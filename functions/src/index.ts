import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import * as nodemailer from 'nodemailer';
import { defineSecret } from 'firebase-functions/params';

// Define secrets (but don't call .value() yet)
const gmailUser = defineSecret('EMAIL_USER');
const gmailPass = defineSecret('EMAIL_PASS');

export const sendContactEmail = onCall(
  {
    secrets: [gmailUser, gmailPass],
    region: 'us-central1',
  },
  async (request) => {
    const { name, email, message } = request.data;

    // ✅ Only use .value() here inside the function — this runs at runtime
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser.value(),
        pass: gmailPass.value(),
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: gmailUser.value(), // You can hardcode a "to" email if needed
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error) {
      logger.error('Failed to send email', error);
      throw new Error('Failed to send email');
    }
  }
);
