const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

var app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email", //replace with your email provider
  port: 587,
  auth: {
    // user: process.env.EMAIL,
    // pass: process.env.PASSWORD,
    user: "patricia.frami56@ethereal.email",
    pass: "6V6nUAj8WgsFacvBph",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var mail = {
    from: name,
    to: "mikecassidy0000@gmail.com",
    subject: subject,
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
