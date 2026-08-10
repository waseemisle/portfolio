import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const emailNotificationsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

// Sends the "you got a new contact form submission" email via EmailJS.
// Template variables available: from_name, from_email, message.
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
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      { publicKey: PUBLIC_KEY }
    );
  } catch (err) {
    console.error("EmailJS notification failed:", err);
  }
}
