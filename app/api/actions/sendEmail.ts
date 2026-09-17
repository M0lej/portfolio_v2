"use server";

import nodemailer from "nodemailer";

const target_email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function sendEmail(formData: FormData) {
  const { email, subject, message } = Object.fromEntries(formData.entries());

  if (!email || !subject || !message) {
    console.error("All fields need to be filled");
    console.log(email, subject, message);
    return {
      success: false,
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: target_email,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${email}" <${target_email}>`,
      to: target_email,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: message as string,
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}
