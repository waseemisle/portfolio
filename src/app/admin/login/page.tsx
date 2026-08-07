"use client";

import { useState } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password);
    } catch {
      setError("Invalid email or password.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-8"
      >
        <p className="text-[13px] font-semibold uppercase tracking-wider text-neutral-400">
          Admin
        </p>
        <h1 className="mt-1 text-[22px] font-semibold text-neutral-900">Sign in</h1>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">
              Email
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-[14px] text-neutral-900 outline-none focus:border-neutral-900"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">
              Password
            </span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-[14px] text-neutral-900 outline-none focus:border-neutral-900"
            />
          </label>
        </div>

        {error && <p className="mt-4 text-[13px] text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-full bg-neutral-900 px-6 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
