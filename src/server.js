const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000; // You can change the port if needed

// Middleware to parse JSON data
app.use(express.json());

// API endpoint for form submission
app.post('/submit-form', (req, res) => {
  // Extract form data from the request body
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'your-email-service',
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.PASSWORD,
    },
  });

  // Compose the email message
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'valtterisyrjanen@gmail.com',
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
