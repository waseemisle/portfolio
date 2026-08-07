"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SiteSettings,
  defaultSiteSettings,
  fetchSiteSettings,
  saveSiteSettings,
} from "@/lib/content-store";
import { uploadAvatar, uploadResume } from "@/lib/storage-upload";
import { TextField, TextAreaField, StringListField, SaveButton } from "@/components/admin/fields";

export default function AdminSitePage() {
  const [data, setData] = useState<SiteSettings>(defaultSiteSettings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const avatarInput = useRef<HTMLInputElement>(null);
  const resumeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchSiteSettings().then(setData);
  }, []);

  const set = <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await saveSiteSettings(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarUpload = async (file: File) => {
    setUploadingAvatar(true);
    try {
      const url = await uploadAvatar(file);
      set("avatarUrl", url);
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleResumeUpload = async (file: File) => {
    setUploadingResume(true);
    try {
      const url = await uploadResume(file);
      set("resumeUrl", url);
    } finally {
      setUploadingResume(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-neutral-900">Site &amp; Hero</h1>
        <SaveButton saving={saving} saved={saved} onClick={handleSave} />
      </div>

      <div className="mt-8 space-y-6">
        <TextField label="Name" value={data.name} onChange={(v) => set("name", v)} />
        <TextField label="Role" value={data.role} onChange={(v) => set("role", v)} />
        <StringListField
          label="Hero headline lines"
          values={data.heroLines}
          onChange={(v) => set("heroLines", v)}
        />
        <TextAreaField
          label="Hero subheadline / tagline"
          value={data.tagline}
          onChange={(v) => set("tagline", v)}
          rows={4}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField label="Email" value={data.email} onChange={(v) => set("email", v)} />
          <TextField label="Phone (display)" value={data.phone} onChange={(v) => set("phone", v)} />
          <TextField
            label="Phone (tel: link, no spaces)"
            value={data.phoneHref}
            onChange={(v) => set("phoneHref", v)}
          />
          <TextField label="LinkedIn URL" value={data.linkedin} onChange={(v) => set("linkedin", v)} />
        </div>
        <TextField label="Location" value={data.location} onChange={(v) => set("location", v)} />

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-[13px] font-semibold text-neutral-700">Avatar photo</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
              {data.avatarUrl && (
                <Image
                  src={data.avatarUrl}
                  alt="Avatar preview"
                  width={64}
                  height={64}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <input
              ref={avatarInput}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleAvatarUpload(f);
              }}
            />
            <button
              type="button"
              onClick={() => avatarInput.current?.click()}
              disabled={uploadingAvatar}
              className="rounded-full border border-neutral-300 px-4 py-2 text-[13px] font-semibold text-neutral-700 hover:border-neutral-900 disabled:opacity-50"
            >
              {uploadingAvatar ? "Uploading…" : "Replace photo"}
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-[13px] font-semibold text-neutral-700">Resume PDF</p>
          <p className="mt-2 truncate text-[13px] text-neutral-500">{data.resumeUrl}</p>
          <input
            ref={resumeInput}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleResumeUpload(f);
            }}
          />
          <button
            type="button"
            onClick={() => resumeInput.current?.click()}
            disabled={uploadingResume}
            className="mt-3 rounded-full border border-neutral-300 px-4 py-2 text-[13px] font-semibold text-neutral-700 hover:border-neutral-900 disabled:opacity-50"
          >
            {uploadingResume ? "Uploading…" : "Replace resume PDF"}
          </button>
        </div>
      </div>
    </div>
  );
}
