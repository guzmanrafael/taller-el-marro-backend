const nodemailer = require("nodemailer");
const config = require("../config/index");

module.exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.NODEMAILER.USER,
    pass: config.NODEMAILER.PASSWORD,
  },
});
