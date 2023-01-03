const express = require('express');
const cors = require("cors");
const nodemailer = require("nodemailer")
require('dotenv').config()
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(express.json())
app.use(cors(corsOptions));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  }
});

app.get('/hi', (req, res, next) => {
  res.json({ message: 'hi'})
})

app.post('/', (req, res, next) => {
  const recipient = req.body.email;
  const text = req.body.text;

  let mailOptions = {
    from: 'test.chengdutaste@gmail.com',
    to: recipient,
    subject: 'Cheng Du Taste Order Confirmation',
    html: text
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.send({ message: err.message})
    } else {
      res.send({ message: "success"})
    }
  });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});