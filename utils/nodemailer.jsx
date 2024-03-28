import nodemailer from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

export const smtpEmail = process.env.REACT_APP_GOOGLE_EMAIL;
export const smtpPassword = process.env.REACT_APP_GOOGLE_PASSWORD;

export const transporter = nodemailer.createTransport(
  SMPTransport({
    service: "gmail",
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  })
);
