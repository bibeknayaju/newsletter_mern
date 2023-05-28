const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("THIS IS STARTED!");
});

app.post("/email", async (req, res) => {
  const { email } = req.body;

  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "yourgmail@gmail.com", // Your gmail id
      pass: "yourgeneratedapppassword", // your generated app password from goole account > security
    },
  });

  // sedn email from here
  let info = await transporter.sendMail({
    from: '"Your Name" <yourgmail@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "This is from Hello", // Subject line
    // text: "There is a new article.", // plain text body
    html: "<b>Hello hello, from hello.</b>", // html body
  });
  res.json(email);
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
