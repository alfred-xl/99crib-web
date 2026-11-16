<?php

declare(strict_types=1);

// Footer newsletter sign-up. Saves each address to 99crib-mail/subscribers.csv (email, date),
// a private file outside the document root. Import that file into a newsletter service later.

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
        respond(422, false, 'Please enter a valid email address.');
    }

    return trim($value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 5000) {
    respond(413, false, 'Please enter a valid email address.');
}

$email = strtolower(field('email'));

// A hidden field catches simple form bots without saving anything.
if (field('website') !== '') {
    respond(200, true, 'You are subscribed. Thank you!');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
    respond(422, false, 'Please enter a valid email address.');
}

// Same private directory as contact.php: beside the live document root, not inside it.
$privateDirectory = dirname(__DIR__, 2) . '/99crib-mail';

// TEMPORARY: while the whole repository is deployed into the document root, this file is
// served from /home/USER/public_html/out/api/, one level deeper, so the private directory
// is three levels up. Remove this block once only the contents of out/ are deployed.
if (!is_dir($privateDirectory . '/rate-limits') && basename(dirname(__DIR__)) === 'out') {
    $privateDirectory = dirname(__DIR__, 3) . '/99crib-mail';
}

try {
    if (!is_dir($privateDirectory . '/rate-limits')) {
        throw new RuntimeException('Private directory is missing.');
    }

    // Limit each client IP to five sign-ups in fifteen minutes.
    $rateFile = $privateDirectory . '/rate-limits/' . hash('sha256', 'subscribe|' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown')) . '.json';
    $handle = @fopen($rateFile, 'c+');

    if ($handle === false) {
        throw new RuntimeException('Rate-limit storage is unavailable.');
    }

    $limited = false;

    try {
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Could not lock rate-limit storage.');
        }

        $times = json_decode(stream_get_contents($handle) ?: '[]', true);
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
        respond(429, false, 'Too many attempts. Please try again later.');
    }

    $list = @fopen($privateDirectory . '/subscribers.csv', 'c+');

    if ($list === false) {
        throw new RuntimeException('Subscriber list is unavailable.');
    }

    try {
        if (!flock($list, LOCK_EX)) {
            throw new RuntimeException('Could not lock subscriber list.');
        }

        // A spreadsheet treats a cell starting with = + - or @ as a formula, so those get a
        // leading apostrophe. The saved value is what is compared for duplicates.
        $saved = preg_match('/^[=+\-@]/', $email) === 1 ? "'" . $email : $email;
        $exists = false;
        $empty = true;

        while (($row = fgetcsv($list, null, ',', '"', '')) !== false) {
            $empty = false;

            if (($row[0] ?? '') === $saved) {
                $exists = true;
                break;
            }
        }

        if (!$exists) {
            fseek($list, 0, SEEK_END);

            if ($empty) {
                fputcsv($list, ['email', 'subscribed_at_utc'], ',', '"', '');
            }

            if (fputcsv($list, [$saved, gmdate('Y-m-d H:i:s')], ',', '"', '') === false) {
                throw new RuntimeException('Could not write subscriber list.');
            }

            fflush($list);
        }
    } finally {
        flock($list, LOCK_UN);
        fclose($list);
    }

    // Same answer whether or not the address was already on the list.
    respond(200, true, 'You are subscribed. Thank you!');
} catch (Throwable $error) {
    error_log('99 Crib subscribe form: ' . $error->getMessage());
    respond(500, false, 'We could not subscribe you right now. Please try again.');
}
