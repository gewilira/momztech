"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  ok: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!message) return { ok: false, error: "Please describe your project." };
  if (message.length > 5000) return { ok: false, error: "Message is too long (max 5000 characters)." };

  try {
    const transporter = nodemailer.createTransport({
      host: required("SMTP_HOST"),
      port: Number(required("SMTP_PORT")),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: required("SMTP_USER"), pass: required("SMTP_PASS") },
    });

    const to = process.env.CONTACT_TO ?? "gewilira.morales@momztech.com";
    const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;

    const text = [
      "New project inquiry from momztech.com",
      "",
      `Name:    ${name}`,
      `Company: ${company || "(not provided)"}`,
      `Email:   ${email}`,
      `Service: ${service || "(not selected)"}`,
      `Budget:  ${budget || "(not selected)"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text,
    });

    return { ok: true };
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return {
      ok: false,
      error: "Could not send your message right now. Please email us directly at gewilira.morales@momztech.com.",
    };
  }
}
