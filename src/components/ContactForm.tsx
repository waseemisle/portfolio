"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { submitMessage } from "@/lib/content-store";
import { notifyNewMessage } from "@/lib/notify-email";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("submitting");
    try {
      await submitMessage({ name: name.trim(), email: email.trim(), message: message.trim() });
      // Best-effort — the message is already saved even if the email fails.
      notifyNewMessage({ name: name.trim(), email: email.trim(), message: message.trim() });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-surface-border bg-surface-card p-8 text-center">
        <p className="font-heading text-[18px] font-semibold text-surface-foreground">
          Message sent.
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-surface-foreground-muted">
          Thanks for reaching out — I typically reply within a day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13.5px] font-semibold text-accent underline decoration-accent/40 underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-surface-border bg-surface-card p-8"
    >
      <p className="font-heading text-[18px] font-semibold text-surface-foreground">
        Send a message
      </p>
      <p className="mt-1.5 text-[13.5px] text-surface-foreground-muted">
        Goes straight to my inbox — no scheduling tool, no gatekeeping.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[12.5px] font-semibold text-surface-foreground-muted">
            Name
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-surface-border bg-surface px-3.5 py-2.5 text-[14px] text-surface-foreground outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12.5px] font-semibold text-surface-foreground-muted">
            Email
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-surface-border bg-surface px-3.5 py-2.5 text-[14px] text-surface-foreground outline-none transition-colors focus:border-accent"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-[12.5px] font-semibold text-surface-foreground-muted">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-surface-border bg-surface px-3.5 py-2.5 text-[14px] text-surface-foreground outline-none transition-colors focus:border-accent"
          placeholder="What are you working on?"
        />
      </label>

      {status === "error" && (
        <p className="mt-3 text-[13px] text-red-500">
          Something went wrong sending that — try again, or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface-foreground px-6 py-3 text-[13.5px] font-semibold text-surface transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <Send size={14} />}
      </button>
    </form>
  );
}
