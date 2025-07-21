const nodemailer = require('nodemailer');

const sendThankYouEmail = async (toEmail, creatorName, campaignTitle) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: toEmail,
            subject: `Thank You for Donating to ${campaignTitle}!`,
            text: `Dear Supporter,\n\nThank you for your generous donation to the campaign "${campaignTitle}" created by ${creatorName}. Your support means a lot!\n\nBest Regards,\nCrowdfunding Platform Team`,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendThankYouEmail;
