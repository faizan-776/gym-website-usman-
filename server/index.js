import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// 1. Updated CORS to be more reliable for Vercel -> Render communication
app.use(
  cors({
    origin: "*", // For development; in production, replace "*" with your Vercel URL
    methods: ["POST", "GET"],
    credentials: true,
  }),
);

app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.send("Gym Server is running perfectly.");
});

// 2. Optimized Contact Form Route
app.post("/contact", async (req, res) => {
  const { name, email, number, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  // 3. Setup Nodemailer Transporter
  // Gmail requires an "App Password" — your regular password will NOT work.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // This MUST be a 16-character App Password
    },
  });

  // 4. Define Email Options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Gmail usually forces this to be YOUR email
    to: process.env.EMAIL_USER, // Where you want to receive the message
    replyTo: email, // IMPORTANT: This lets you hit 'Reply' to email the customer back
    subject: subject || `New Gym Lead: ${name}`,
    text: `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ success: "Message sent" });
  } catch (err) {
    // This logs the EXACT reason for failure in your Render dashboard
    console.error("Nodemailer Error:", err);
    res
      .status(500)
      .json({ error: "Failed to send email", details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
