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

$name    = sanitize($input['name'] ?? '');
$email   = sanitize($input['email'] ?? '');
$phone   = sanitize($input['phone'] ?? '');
$company = sanitize($input['company'] ?? '');
$subject = sanitize($input['subject'] ?? '');
$message = sanitize($input['message'] ?? '');

if (!$name || !$email || !$message) {
    jsonResponse(['success' => false, 'error' => 'Name, email, and message are required.'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['success' => false, 'error' => 'Please provide a valid email address.'], 400);
}

$subjectMap = [
    'demo'        => 'Book a Demo',
    'pricing'     => 'Pricing Enquiry',
    'support'     => 'Technical Support',
    'general'     => 'General Question',
    'partnership' => 'Partnership',
];
$subjectLabel = $subjectMap[$subject] ?? 'New Enquiry';
$subjectLine = "[HMCarePlanner Contact] {$subjectLabel} from {$name}";

$htmlBody = '
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1e40af, #0f766e); padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
    <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">HMCarePlanner Website</p>
  </div>
  <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 130px;">Name:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . $name . '</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:' . $email . '">' . $email . '</a></td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . ($phone ?: 'Not provided') . '</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . ($company ?: 'Not provided') . '</td></tr>
      <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Subject:</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">' . $subjectLabel . '</td></tr>
    </table>
    <div style="margin-top: 20px;">
      <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Message:</p>
      <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1e293b; line-height: 1.6;">' . nl2br($message) . '</div>
    </div>
  </div>
</div>';

$textBody = "New Contact Form Submission - HMCarePlanner Website\n\nName: {$name}\nEmail: {$email}\nPhone: " . ($phone ?: 'Not provided') . "\nCompany: " . ($company ?: 'Not provided') . "\nSubject: {$subjectLabel}\n\nMessage:\n{$message}";

$result = sendMailgunEmail(MAILGUN_TO, $subjectLine, $htmlBody, $textBody, $email);

if ($result['success']) {
    jsonResponse(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    jsonResponse(['success' => false, 'error' => 'Sorry, there was a problem sending your message. Please try again or call us directly.'], 500);
}
