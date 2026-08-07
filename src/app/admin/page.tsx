"use client";

import Link from "next/link";
import { useState } from "react";
import { seedDefaultsIfEmpty } from "@/lib/content-store";

const sections = [
  { label: "Site & Hero", href: "/admin/site", desc: "Name, role, headline, contact info, avatar, resume." },
  { label: "Home Sections", href: "/admin/home", desc: "Platforms, pillars, expertise, featured integration, final CTA." },
  { label: "Work / Projects", href: "/admin/projects", desc: "Add, edit, delete, and reorder case studies." },
  { label: "Experience", href: "/admin/experience", desc: "Job history and bullet points." },
  { label: "Education", href: "/admin/education", desc: "Schools and degrees." },
  { label: "Skills", href: "/admin/skills", desc: "Skill groups and tags." },
  { label: "About", href: "/admin/about", desc: "Bio paragraphs and stats." },
  { label: "Traffic", href: "/admin/traffic", desc: "Visitor log: IP, location, referrer, pages." },
];

export default function AdminOverviewPage() {
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<string | null>(null);

  const handleSeed = async () => {
    setSeeding(true);
    setSeedResult(null);
    try {
      const created = await seedDefaultsIfEmpty();
      setSeedResult(
        created.length
          ? `Seeded: ${created.join(", ")}`
          : "Everything already has content — nothing to seed."
      );
    } catch (err) {
      setSeedResult(`Failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div>
      <h1 className="text-[24px] font-semibold text-neutral-900">Dashboard</h1>
      <p className="mt-2 text-[14px] text-neutral-600">
        Edit any part of the site below. Changes are live on the public site
        as soon as you save — no rebuild needed.
      </p>

      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-5">
        <p className="text-[14px] font-semibold text-neutral-900">First-time setup</p>
        <p className="mt-1 text-[13.5px] text-neutral-600">
          If this is a fresh Firebase project, click below once to copy the
          current site content into Firestore as a starting point. It only
          fills in sections that are still empty — it will never overwrite
          content you've already edited.
        </p>
        <button
          onClick={handleSeed}
          disabled={seeding}
          className="mt-3 rounded-full bg-neutral-900 px-5 py-2 text-[13.5px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {seeding ? "Seeding…" : "Seed defaults into Firestore"}
        </button>
        {seedResult && <p className="mt-2 text-[13px] text-neutral-600">{seedResult}</p>}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400"
          >
            <p className="text-[15px] font-semibold text-neutral-900">{s.label}</p>
            <p className="mt-1 text-[13px] text-neutral-600">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
