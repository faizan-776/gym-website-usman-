import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// 1. Better CORS Configuration
// Replace the origin URL with your actual Vercel deployment URL
app.use(
  cors({
    origin: ["https://your-frontend-name.vercel.app", "http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  }),
);

app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.send("Gym Server is officially running!");
});

// 2. Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, number, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Please fill in all required fields." });
  }

  // 3. Setup Nodemailer Transporter
  // Make sure EMAIL_USER and EMAIL_PASS (App Password) are in your Render Environment Variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 4. Define the Email Options
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Shows the sender's name
    to: process.env.EMAIL_USER, // Sends to your gym email
    replyTo: email, // Crucial: Allows you to reply directly to the customer
    subject: subject || "New Contact Form Message",
    text:
      `You have a new message from your gym website:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${number}\n\n` +
      `Message:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res
      .status(200)
      .json({ success: "Message sent! We will get back to you soon." });
  } catch (err) {
    // This will print the EXACT error in your Render logs
    console.error("Nodemailer Error Details:", err);
    res.status(500).json({
      error: "Failed to send email. Check your server logs.",
      details: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is breathing on port ${PORT}`);
});
