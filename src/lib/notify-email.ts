import emailjs from "@emailjs/browser";
import { site } from "@/lib/content";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const emailNotificationsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

// Sends the "you got a new contact form submission" email via EmailJS.
// The actual EmailJS template (dashboard.emailjs.com/admin/templates/j3ts9d9)
// only has placeholders for {{name}}, {{time}}, and {{message}} — no email
// field — so the sender's email is folded into the message body itself to
// guarantee it's visible, rather than depending on a template slot that
// doesn't exist. email/reply_to are still sent too in case the template's
// (not-body-visible) Reply-To setting references one of them.
// Best-effort: the form submission itself already succeeded (data is safely
// in Firestore) by the time this runs, so a failure here is logged, not thrown.
export async function notifyNewMessage(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn("EmailJS is not configured — skipping email notification.");
    return;
  }
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name,
        time: new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
        message: `Reply to: ${data.email}\n\n${data.message}`,
        email: data.email,
        reply_to: data.email,
        to_email: site.email,
      },
      { publicKey: PUBLIC_KEY }
    );
  } catch (err) {
    const status = (err as { status?: number; text?: string } | undefined)?.status;
    const text = (err as { status?: number; text?: string } | undefined)?.text;
    console.error("EmailJS notification failed:", status ?? "", text || err);
  }
}
