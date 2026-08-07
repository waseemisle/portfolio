"use client";

import { useEffect, useState } from "react";
import {
  HomeContent,
  defaultHomeContent,
  fetchHomeContent,
  saveHomeContent,
} from "@/lib/content-store";
import {
  TextField,
  TextAreaField,
  StringListField,
  TitleBodyListField,
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
          <h2 className="text-[15px] font-semibold text-neutral-900">Expertise</h2>
          <div className="mt-3 space-y-4">
            <TextAreaField
              label="Expertise section headline"
              value={data.expertiseIntro}
              onChange={(v) => set("expertiseIntro", v)}
              rows={2}
            />
            <TitleBodyListField
              label="Expertise cards"
              values={data.expertise}
              onChange={(v) => set("expertise", v)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-[15px] font-semibold text-neutral-900">Featured Integration</h2>
          <div className="mt-3 space-y-4">
            <TextField
              label="Eyebrow label"
              value={data.featuredIntegration.eyebrow}
              onChange={(v) =>
                set("featuredIntegration", { ...data.featuredIntegration, eyebrow: v })
              }
            />
            <TextAreaField
              label="Title"
              value={data.featuredIntegration.title}
              onChange={(v) =>
                set("featuredIntegration", { ...data.featuredIntegration, title: v })
              }
              rows={2}
            />
            <TextField
              label="Role"
              value={data.featuredIntegration.role}
              onChange={(v) =>
                set("featuredIntegration", { ...data.featuredIntegration, role: v })
              }
            />
            <TextAreaField
              label="Description"
              value={data.featuredIntegration.description}
              onChange={(v) =>
                set("featuredIntegration", { ...data.featuredIntegration, description: v })
              }
              rows={3}
            />
            <StringListField
              label="Tags"
              values={data.featuredIntegration.tags}
              onChange={(v) => set("featuredIntegration", { ...data.featuredIntegration, tags: v })}
            />
            <TextField
              label="Architecture card title"
              value={data.featuredIntegration.architectureTitle}
              onChange={(v) =>
                set("featuredIntegration", { ...data.featuredIntegration, architectureTitle: v })
              }
            />
            <TextAreaField
              label="Architecture card description"
              value={data.featuredIntegration.architectureDescription}
              onChange={(v) =>
                set("featuredIntegration", {
                  ...data.featuredIntegration,
                  architectureDescription: v,
                })
              }
              rows={3}
            />
            <StringListField
              label="Flow diagram labels (e.g. Shopify → Magento → NetSuite)"
              values={data.featuredIntegration.flow}
              onChange={(v) => set("featuredIntegration", { ...data.featuredIntegration, flow: v })}
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
