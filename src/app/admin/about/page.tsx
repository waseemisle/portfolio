"use client";

import { useEffect, useState } from "react";
import {
  AboutContent,
  defaultAboutContent,
  fetchAboutContent,
  saveAboutContent,
} from "@/lib/content-store";
import { TextField, StringListField, StatsListField, SaveButton } from "@/components/admin/fields";

export default function AdminAboutPage() {
  const [data, setData] = useState<AboutContent>(defaultAboutContent);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchAboutContent().then(setData);
  }, []);

  const set = <K extends keyof AboutContent>(key: K, value: AboutContent[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await saveAboutContent(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-neutral-900">About</h1>
        <SaveButton saving={saving} saved={saved} onClick={handleSave} />
      </div>

      <div className="mt-8 space-y-6">
        <StringListField
          label="Bio paragraphs"
          values={data.bio}
          onChange={(v) => set("bio", v)}
          placeholder="Paragraph text…"
        />
        <TextField
          label="Availability line"
          value={data.availability}
          onChange={(v) => set("availability", v)}
        />
        <StatsListField label="Stats" values={data.stats} onChange={(v) => set("stats", v)} />
      </div>
    </div>
  );
}
