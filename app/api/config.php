<?php
// Mailgun Configuration
// API key should be set via environment variable for security
define('MAILGUN_API_KEY', getenv('MAILGUN_API_KEY') ?: '');
define('MAILGUN_DOMAIN', 'mg.hmcareplanner.co.uk');
define('MAILGUN_FROM', 'HMCarePlanner Website <info@hmcareplanner.co.uk>');
define('MAILGUN_TO', 'info@hmcareplanner.co.uk');
define('MAILGUN_API_URL', 'https://api.eu.mailgun.net/v3/' . MAILGUN_DOMAIN . '/messages');

function sendMailgunEmail($to, $subject, $htmlBody, $textBody, $replyTo = null) {
    $postFields = [
        'from'    => MAILGUN_FROM,
        'to'      => $to,
        'subject' => $subject,
        'html'    => $htmlBody,
        'text'    => $textBody,
    ];

    if ($replyTo) {
        $postFields['h:Reply-To'] = $replyTo;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, MAILGUN_API_URL);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, 'api:' . MAILGUN_API_KEY);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        return ['success' => false, 'error' => 'Connection error: ' . $error];
    }

    if ($httpCode >= 200 && $httpCode < 300) {
        return ['success' => true];
    }

    $response = json_decode($result, true);
    return ['success' => false, 'error' => $response['message'] ?? 'Failed to send email'];
}

function sanitize($str) {
    if (!$str) return '';
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}
