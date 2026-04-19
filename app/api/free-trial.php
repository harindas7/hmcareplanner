<?php
require_once __DIR__ . '/config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'error' => 'Method not allowed'], 405);
}

$input = json_decode(file_get_contents('php://input'), true);

$firstName = sanitize($input['firstName'] ?? '');
$lastName  = sanitize($input['lastName'] ?? '');
$email     = sanitize($input['email'] ?? '');
$phone     = sanitize($input['phone'] ?? '');
$company   = sanitize($input['company'] ?? '');
$clients   = sanitize($input['clients'] ?? '');

if (!$firstName || !$lastName || !$email) {
    jsonResponse(['success' => false, 'error' => 'First name, last name, and email are required.'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['success' => false, 'error' => 'Please provide a valid email address.'], 400);
}

$subjectLine = "[HMCarePlanner] Free Trial Request from {$firstName} {$lastName}";

$htmlBody = '
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e40af, #0f766e); padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 20px;">New Free Trial Request</h1>
    <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">HMCarePlanner Website</p>
  </div>
  <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 130px;">Name:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . $firstName . ' ' . $lastName . '</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:' . $email . '">' . $email . '</a></td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . ($phone ?: 'Not provided') . '</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . ($company ?: 'Not provided') . '</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">No. of Carers:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . ($clients ?: 'Not specified') . '</td></tr>
    </table>
  </div>
</div>';

$textBody = "New Free Trial Request - HMCarePlanner Website\n\nName: {$firstName} {$lastName}\nEmail: {$email}\nPhone: " . ($phone ?: 'Not provided') . "\nCompany: " . ($company ?: 'Not provided') . "\nNo. of Carers: " . ($clients ?: 'Not specified');

$result = sendMailgunEmail(MAILGUN_TO, $subjectLine, $htmlBody, $textBody, $email);

if ($result['success']) {
    jsonResponse(['success' => true, 'message' => "Thank you! Your free trial request has been submitted. We'll be in touch within 24 hours."]);
} else {
    jsonResponse(['success' => false, 'error' => 'Sorry, there was a problem submitting your request. Please try again or call us directly.'], 500);
}
