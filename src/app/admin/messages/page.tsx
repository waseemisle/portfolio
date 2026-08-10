"use client";

import { useEffect, useState } from "react";
import { MessageDoc, fetchMessages } from "@/lib/content-store";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<MessageDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages()
      .then(setMessages)
      .catch((err) => {
        const message = err instanceof Error ? err.message : String(err);
        if (message.toLowerCase().includes("permission")) {
          setError(
            "Firestore is still using its default rules, which block this read. Publish firestore.rules in the Firebase Console (Firestore Database → Rules), then reload this page."
          );
        } else {
          setError(message);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-neutral-400">Loading…</p>;

  return (
    <div>
      <h1 className="text-[22px] font-semibold text-neutral-900">
        Messages ({messages.length})
      </h1>
      <p className="mt-2 text-[13.5px] text-neutral-500">
        Submissions from the contact form. Each one also triggers an email
        notification if EmailJS is configured.
      </p>

      {error && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[13.5px] text-amber-900">
          {error}
        </div>
      )}

      <div className="mt-6 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[14.5px] font-semibold text-neutral-900">{m.name}</p>
              <p className="text-[12.5px] text-neutral-500">
                {new Date(m.createdAt).toLocaleString()}
              </p>
            </div>
            <a
              href={`mailto:${m.email}`}
              className="mt-1 inline-block text-[13.5px] text-neutral-600 hover:text-neutral-900 hover:underline"
            >
              {m.email}
            </a>
            <p className="mt-3 whitespace-pre-wrap text-[14px] leading-relaxed text-neutral-700">
              {m.message}
            </p>
          </div>
        ))}
        {messages.length === 0 && !error && (
          <p className="rounded-xl border border-neutral-200 bg-white px-4 py-8 text-center text-neutral-400">
            No messages yet.
          </p>
        )}
      </div>
    </div>
  );
}
