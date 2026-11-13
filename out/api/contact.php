<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

function field(string $name): string
{
    $value = $_POST[$name] ?? '';

    if (!is_string($value)) {
        respond(422, false, 'Please check the form fields and try again.');
    }

    return trim($value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    respond(413, false, 'Your message is too long.');
}

$name = field('fullName');
$email = field('email');
$university = field('university');
$subject = field('subject');
$message = field('message');

// A hidden field catches simple form bots without creating a mailbox notification.
if (field('website') !== '') {
    respond(200, true, 'Your message has been sent.');
}

$allowedSubjects = [
    'General enquiry',
    'Listing my property',
    'Student support',
    'Partnership / investment',
    'Press / media',
];

if (
    $name === '' ||
    strlen($name) > 150 ||
    preg_match('/[\r\n]/', $name) === 1 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($email) > 254 ||
    strlen($university) > 200 ||
    !in_array($subject, $allowedSubjects, true) ||
    $message === '' ||
    strlen($message) > 10000
) {
    respond(422, false, 'Please check the form fields and try again.');
}

// The private directory must sit beside the live document root, not inside it.
// For /home/USER/public_html/api/contact.php this is /home/USER/99crib-mail.
$privateDirectory = dirname(__DIR__, 2) . '/99crib-mail';

try {
    $autoload = $privateDirectory . '/vendor/autoload.php';
    $configFile = $privateDirectory . '/config.php';

    if (!is_readable($autoload) || !is_readable($configFile)) {
        throw new RuntimeException('Mail application files are missing.');
    }

    require_once $autoload;
    $config = require $configFile;

    // Limit each client IP to five submissions in fifteen minutes.
    $rateFile = $privateDirectory . '/rate-limits/' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown') . '.json';
    $handle = @fopen($rateFile, 'c+');

    if ($handle === false) {
        throw new RuntimeException('Rate-limit storage is unavailable.');
    }

    $limited = false;

    try {
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Could not lock rate-limit storage.');
        }

        $stored = stream_get_contents($handle);
        $times = json_decode($stored ?: '[]', true);
        $times = is_array($times) ? $times : [];
        $now = time();
        $times = array_values(array_filter(
            $times,
            static fn ($time): bool => is_int($time) && $time > $now - 900
        ));

        if (count($times) >= 5) {
            $limited = true;
        } else {
            $times[] = $now;
            rewind($handle);
            ftruncate($handle, 0);

            if (fwrite($handle, json_encode($times)) === false) {
                throw new RuntimeException('Could not write rate-limit storage.');
            }

            fflush($handle);
        }
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }

    if ($limited) {
        respond(429, false, 'Too many messages. Please try again later.');
    }

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['host'];
    $mail->Port = (int) $config['port'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['username'];
    $mail->Password = $config['password'];
    $mail->SMTPDebug = 0;

    if ($config['encryption'] === 'smtps') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($config['encryption'] === 'starttls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        throw new RuntimeException('Invalid SMTP encryption setting.');
    }

    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['sender'], '99 Crib Website');
    $mail->addAddress($config['recipient']);
    $mail->addReplyTo($email, $name);
    $mail->isHTML(false);
    $mail->Subject = $subject . ' from ' . $name;
    $mail->Body =
        "Name: {$name}\n" .
        "Email: {$email}\n" .
        'University: ' . ($university !== '' ? $university : 'Not provided') . "\n" .
        "Subject: {$subject}\n\n" .
        "Message:\n{$message}\n";

    $mail->send();
    respond(200, true, 'Your message has been sent.');
} catch (Throwable $error) {
    error_log('99 Crib contact form: ' . $error->getMessage());
    respond(500, false, 'We could not send your message right now. Please try again.');
}
