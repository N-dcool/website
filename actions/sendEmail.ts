"use server";
import { validateString } from "@/lib/validateString";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("email");

  if (!validateString(message, 50)) {
    return {
      error: "message is missing or not valid",
    };
  }
  if (!validateString(senderEmail, 5000)) {
    return {
      error: "email is missing or not valid",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "🧑🏻‍💻Portfolio message box <onboarding@resend.dev>",
      to: "nareshnc82643@gmail.com",
      subject: "Hello from Resend",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error:
        "Something went wrong, while sending email, please try again later",
    };
  }

  return { data };
};
