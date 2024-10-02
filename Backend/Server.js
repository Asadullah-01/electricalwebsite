const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-password', // Replace with your email password or app-specific password
    },
});

// Update the email sending endpoint
app.post('/api/send-email', (req, res) => {
    const { name, email, service, message } = req.body; // Destructure additional fields
    const mailOptions = {
        from: email,
        to: 'pitbull690124@gmail.com', // Set the destination email
        subject: 'New Contact from Website',
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`, // Include all form data
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' }); // Error response
        }
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Email sent successfully' }); // Success response
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
