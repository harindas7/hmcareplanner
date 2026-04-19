require('dotenv').config();
const express = require('express');
const path = require('path');
const Mailgun = require('mailgun.js');
const formData = require('form-data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'key-placeholder',
  url: 'https://api.eu.mailgun.net'
});

function sanitize(str) {
  if (!str) return '';
  return String(str).replace(/[<>]/g, '').trim();
}

app.post(['/api/contact', '/api/contact.php'], async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    const subjectMap = {
      'demo': 'Book a Demo',
      'pricing': 'Pricing Enquiry',
      'support': 'Technical Support',
      'general': 'General Question'
    };
    const subjectLine = `[HMCarePlanner Contact] ${subjectMap[subject] || 'New Enquiry'} from ${sanitize(name)}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #0f766e); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">HMCarePlanner Website</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 130px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(phone) || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(company) || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Subject:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${subjectMap[subject] || 'General'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Message:</p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #1e293b; line-height: 1.6;">${sanitize(message).replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      </div>
    `;

    const textBody = `New Contact Form Submission - HMCarePlanner Website\n\nName: ${sanitize(name)}\nEmail: ${sanitize(email)}\nPhone: ${sanitize(phone) || 'Not provided'}\nCompany: ${sanitize(company) || 'Not provided'}\nSubject: ${subjectMap[subject] || 'General'}\n\nMessage:\n${sanitize(message)}`;

    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: process.env.MAILGUN_FROM,
      to: [process.env.MAILGUN_TO],
      'h:Reply-To': sanitize(email),
      subject: subjectLine,
      text: textBody,
      html: htmlBody
    });

    res.json({ success: true, message: 'Thank you! Your message has been sent successfully.' });
  } catch (error) {
    console.error('Mailgun error:', error);
    res.status(500).json({ success: false, error: 'Sorry, there was a problem sending your message. Please try again or call us directly.' });
  }
});

app.post(['/api/free-trial', '/api/free-trial.php'], async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, clients } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ success: false, error: 'First name, last name, and email are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    const subjectLine = `[HMCarePlanner] Free Trial Request from ${sanitize(firstName)} ${sanitize(lastName)}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #0f766e); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Free Trial Request</h1>
          <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">HMCarePlanner Website</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 130px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(firstName)} ${sanitize(lastName)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;"><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(phone) || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(company) || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">No. of Clients:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${sanitize(clients) || 'Not specified'}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const textBody = `New Free Trial Request - HMCarePlanner Website\n\nName: ${sanitize(firstName)} ${sanitize(lastName)}\nEmail: ${sanitize(email)}\nPhone: ${sanitize(phone) || 'Not provided'}\nCompany: ${sanitize(company) || 'Not provided'}\nNo. of Clients: ${sanitize(clients) || 'Not specified'}`;

    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: process.env.MAILGUN_FROM,
      to: [process.env.MAILGUN_TO],
      'h:Reply-To': sanitize(email),
      subject: subjectLine,
      text: textBody,
      html: htmlBody
    });

    res.json({ success: true, message: 'Thank you! Your free trial request has been submitted. We\'ll be in touch within 24 hours.' });
  } catch (error) {
    console.error('Mailgun error:', error);
    res.status(500).json({ success: false, error: 'Sorry, there was a problem submitting your request. Please try again or call us directly.' });
  }
});

app.use(express.static(path.join(__dirname, 'app')));

app.get('*', (req, res) => {
  const requestPath = req.path.endsWith('/') ? req.path + 'index.html' : req.path;
  const filePath = path.join(__dirname, 'app', requestPath);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, 'app', 'index.html'));
    }
  });
});

app.listen(PORT, () => {
  console.log(`HMCarePlanner website running at http://localhost:${PORT}`);
});
