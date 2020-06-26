import nodemailer from "nodemailer";

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

export async function post(req, res, next) {
  const { mail, subject, body } = req.body;
  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: `${mail} - ${subject}`, // Subject line
    text: body, // plain text body
  });
  res.end(`Message successfully sent to ${mail}`);
}
