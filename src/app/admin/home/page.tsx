"use client";

import { useEffect, useState } from "react";
import {
  HomeContent,
  defaultHomeContent,
  fetchHomeContent,
  saveHomeContent,
} from "@/lib/content-store";
import {
  TextAreaField,
  StringListField,
  TitleBodyListField,
  LifecycleListField,
  CapabilityGroupsField,
  FlagshipListField,
  TextField,
  SaveButton,
} from "@/components/admin/fields";

export default function AdminHomePage() {
  const [data, setData] = useState<HomeContent>(defaultHomeContent);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchHomeContent().then(setData);
  }, []);

  const set = <K extends keyof HomeContent>(key: K, value: HomeContent[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await saveHomeContent(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-neutral-900">Home Sections</h1>
        <SaveButton saving={saving} saved={saved} onClick={handleSave} />
      </div>

      <div className="mt-8 space-y-10">
        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">Platforms marquee</h2>
          <div className="mt-3">
            <StringListField
              label="Platform names"
              values={data.platforms}
              onChange={(v) => set("platforms", v)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">Pillars (3 cards)</h2>
          <div className="mt-3">
            <TitleBodyListField
              label="Pillars"
              values={data.pillars}
              onChange={(v) => set("pillars", v)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">
            Lifecycle (Discover → Support stepper)
          </h2>
          <div className="mt-3">
            <LifecycleListField
              label="Lifecycle stages"
              values={data.lifecycle}
              onChange={(v) => set("lifecycle", v)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">Capabilities</h2>
          <div className="mt-3 space-y-4">
            <TextAreaField
              label="Capabilities section headline"
              value={data.capabilitiesIntro}
              onChange={(v) => set("capabilitiesIntro", v)}
              rows={2}
            />
            <CapabilityGroupsField
              label="Capability groups"
              values={data.capabilities}
              onChange={(v) => set("capabilities", v)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">Flagship Engagements</h2>
          <div className="mt-3">
            <FlagshipListField
              label="Flagship engagements"
              values={data.flagshipEngagements}
              onChange={(v) => set("flagshipEngagements", v)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">Final CTA</h2>
          <div className="mt-3 space-y-4">
            <TextField
              label="Title"
              value={data.finalCta.title}
              onChange={(v) => set("finalCta", { ...data.finalCta, title: v })}
            />
            <TextAreaField
              label="Body"
              value={data.finalCta.body}
              onChange={(v) => set("finalCta", { ...data.finalCta, body: v })}
              rows={3}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
