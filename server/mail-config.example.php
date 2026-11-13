<?php

// Copy this to 99crib-mail/config.php beside your live document root.
// Fill in the real SMTP credentials on the server only; never commit them.
return [
    'host' => 'YOUR_SMTP_HOST',
    'port' => 465,
    'encryption' => 'smtps', // Use 'starttls' with port 587 if your provider requires it.
    'username' => 'support@99crib.com',
    'password' => 'YOUR_SMTP_PASSWORD',
    'sender' => 'support@99crib.com',
    'recipient' => 'support@99crib.com',
];
