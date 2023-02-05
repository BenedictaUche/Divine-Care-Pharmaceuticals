const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send-message", (req, res) => {
  const { name, email, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: "andaline160@gmail.com",
      pass: "Emirate160?"
    }
  });

  const mailOptions = {
    from: `"Pharmaceutical Website Contact Form" <${email}>`,
    to: "andaline160@gmail.com",
    subject,
    text: `From: ${name} (${email})\n\n${text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send({ success: false, error });
    } else {
      res.send({ success: true });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
