const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Configure your mail transporter (Gmail example)
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yourgmail@gmail.com",      // your email
        pass: "your_app_password"         // ⚠️ use App Password (not normal password)
    }
});

// ✅ API route for sending mail
app.post("/send-leave-request", (req, res) => {
    const { leave_type, from_date, to_date, reason } = req.body;

    let mailOptions = {
        from: "yourgmail@gmail.com",
        to: "hod_email@example.com", // recipient
        subject: "New Leave Request",
        text: `
📌 Leave Request Submitted

Leave Type: ${leave_type}
From Date: ${from_date}
To Date: ${to_date}
Reason: ${reason}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Error sending mail:", error);
            return res.status(500).json({ success: false, error });
        }
        console.log("✅ Email sent:", info.response);
        res.json({ success: true, message: "Leave request sent successfully!" });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
