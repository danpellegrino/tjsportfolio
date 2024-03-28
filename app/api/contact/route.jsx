import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/utils/nodemailer";

import { Email } from "@/components/Email";

export async function POST(req, res) {
  const body = await req.json();

  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "TJSDesigns Contact Form",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email: ", error);
  }

  return new Response("OK");
}
