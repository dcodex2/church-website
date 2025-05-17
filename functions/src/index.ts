/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// 🔐 Gmail credentials set in Firebase config
const gmailUser = functions.config().email.user;
const gmailPass = functions.config().email.pass;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

exports.sendContactEmail = functions.https.onCall(
  async (data: any, context: any) => {
    const { name, email, message } = data;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: gmailUser, // Change this to your receiving church email if needed
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
      console.error('Failed to send email:', error);
      throw new functions.https.HttpsError('internal', 'Failed to send email');
    }
  }
);
