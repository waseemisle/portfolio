"use client";

import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[14px] text-neutral-900 outline-none focus:border-neutral-900";

export function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <input
        className={inputClass}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function TextAreaField({
  label,
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <textarea
        className={inputClass}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function StringListField({
  label,
  values,
  onChange,
  placeholder,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const update = (i: number, v: string) => {
    const next = [...values];
    next[i] = v;
    onChange(next);
  };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  const add = () => onChange([...values, ""]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              className={inputClass}
              value={v}
              placeholder={placeholder}
              onChange={(e) => update(i, e.target.value)}
            />
            <button type="button" onClick={() => move(i, -1)} className="text-neutral-400 hover:text-neutral-900">
              <ChevronUp size={16} />
            </button>
            <button type="button" onClick={() => move(i, 1)} className="text-neutral-400 hover:text-neutral-900">
              <ChevronDown size={16} />
            </button>
            <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900"
      >
        <Plus size={14} /> Add
      </button>
    </div>
  );
}

export function TitleBodyListField({
  label,
  values,
  onChange,
  titleLabel = "Title",
  bodyLabel = "Body",
}: {
  label: string;
  values: { title: string; body: string }[];
  onChange: (v: { title: string; body: string }[]) => void;
  titleLabel?: string;
  bodyLabel?: string;
}) {
  const update = (i: number, field: "title" | "body", v: string) => {
    const next = [...values];
    next[i] = { ...next[i], [field]: v };
    onChange(next);
  };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  const add = () => onChange([...values, { title: "", body: "" }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <div className="space-y-3">
        {values.map((v, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Item {i + 1}
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(i, -1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronUp size={15} />
                </button>
                <button type="button" onClick={() => move(i, 1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronDown size={15} />
                </button>
                <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <input
                className={inputClass}
                value={v.title}
                placeholder={titleLabel}
                onChange={(e) => update(i, "title", e.target.value)}
              />
              <textarea
                className={inputClass}
                value={v.body}
                rows={2}
                placeholder={bodyLabel}
                onChange={(e) => update(i, "body", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900"
      >
        <Plus size={14} /> Add
      </button>
    </div>
  );
}

export function StatsListField({
  label,
  values,
  onChange,
}: {
  label: string;
  values: { value: string; label: string }[];
  onChange: (v: { value: string; label: string }[]) => void;
}) {
  const update = (i: number, field: "value" | "label", v: string) => {
    const next = [...values];
    next[i] = { ...next[i], [field]: v };
    onChange(next);
  };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  const add = () => onChange([...values, { value: "", label: "" }]);

  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              className={inputClass + " w-24"}
              value={v.value}
              placeholder="20+"
              onChange={(e) => update(i, "value", e.target.value)}
            />
            <input
              className={inputClass}
              value={v.label}
              placeholder="Label"
              onChange={(e) => update(i, "label", e.target.value)}
            />
            <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900"
      >
        <Plus size={14} /> Add
      </button>
    </div>
  );
}

export function LifecycleListField({
  label,
  values,
  onChange,
}: {
  label: string;
  values: { stage: string; roleLabel: string; description: string }[];
  onChange: (v: { stage: string; roleLabel: string; description: string }[]) => void;
}) {
  const update = (i: number, field: "stage" | "roleLabel" | "description", v: string) => {
    const next = [...values];
    next[i] = { ...next[i], [field]: v };
    onChange(next);
  };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  const add = () => onChange([...values, { stage: "", roleLabel: "", description: "" }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <div className="space-y-3">
        {values.map((v, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Stage {i + 1}
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(i, -1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronUp size={15} />
                </button>
                <button type="button" onClick={() => move(i, 1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronDown size={15} />
                </button>
                <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                className={inputClass}
                value={v.stage}
                placeholder="Stage name (e.g. Discover)"
                onChange={(e) => update(i, "stage", e.target.value)}
              />
              <input
                className={inputClass}
                value={v.roleLabel}
                placeholder="Role label (e.g. Business & Systems Analysis)"
                onChange={(e) => update(i, "roleLabel", e.target.value)}
              />
            </div>
            <textarea
              className={inputClass + " mt-2"}
              value={v.description}
              rows={2}
              placeholder="Description"
              onChange={(e) => update(i, "description", e.target.value)}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900"
      >
        <Plus size={14} /> Add
      </button>
    </div>
  );
}

export function CapabilityGroupsField({
  label,
  values,
  onChange,
}: {
  label: string;
  values: { title: string; roleTag: string; body: string; bullets: string[] }[];
  onChange: (v: { title: string; roleTag: string; body: string; bullets: string[] }[]) => void;
}) {
  const update = (i: number, field: "title" | "roleTag" | "body", v: string) => {
    const next = [...values];
    next[i] = { ...next[i], [field]: v };
    onChange(next);
  };
  const updateBullets = (i: number, bullets: string[]) => {
    const next = [...values];
    next[i] = { ...next[i], bullets };
    onChange(next);
  };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  const add = () => onChange([...values, { title: "", roleTag: "", body: "", bullets: [] }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <div className="space-y-4">
        {values.map((v, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Group {i + 1}
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(i, -1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronUp size={15} />
                </button>
                <button type="button" onClick={() => move(i, 1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronDown size={15} />
                </button>
                <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                className={inputClass}
                value={v.title}
                placeholder="Title"
                onChange={(e) => update(i, "title", e.target.value)}
              />
              <input
                className={inputClass}
                value={v.roleTag}
                placeholder="Role tag (e.g. Solution Architect)"
                onChange={(e) => update(i, "roleTag", e.target.value)}
              />
            </div>
            <textarea
              className={inputClass + " mt-2"}
              value={v.body}
              rows={2}
              placeholder="Body"
              onChange={(e) => update(i, "body", e.target.value)}
            />
            <div className="mt-2">
              <StringListField
                label="Bullets"
                values={v.bullets}
                onChange={(bullets) => updateBullets(i, bullets)}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900"
      >
        <Plus size={14} /> Add
      </button>
    </div>
  );
}

type FlagshipListField_Value = {
  eyebrow: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  architectureTitle: string;
  architectureDescription: string;
  flow: string[];
};

export function FlagshipListField({
  label,
  values,
  onChange,
}: {
  label: string;
  values: FlagshipListField_Value[];
  onChange: (v: FlagshipListField_Value[]) => void;
}) {
  type Item = FlagshipListField_Value;
  const update = <K extends keyof Item>(i: number, field: K, v: Item[K]) => {
    const next = [...values];
    next[i] = { ...next[i], [field]: v };
    onChange(next);
  };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  const add = () =>
    onChange([
      ...values,
      {
        eyebrow: "",
        title: "",
        role: "",
        description: "",
        tags: [],
        architectureTitle: "",
        architectureDescription: "",
        flow: [],
      },
    ]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">{label}</span>
      <div className="space-y-4">
        {values.map((v, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                {v.title || `Engagement ${i + 1}`}
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(i, -1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronUp size={15} />
                </button>
                <button type="button" onClick={() => move(i, 1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronDown size={15} />
                </button>
                <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <input
                className={inputClass}
                value={v.eyebrow}
                placeholder="Eyebrow label"
                onChange={(e) => update(i, "eyebrow", e.target.value)}
              />
              <textarea
                className={inputClass}
                value={v.title}
                rows={2}
                placeholder="Title"
                onChange={(e) => update(i, "title", e.target.value)}
              />
              <input
                className={inputClass}
                value={v.role}
                placeholder="Role"
                onChange={(e) => update(i, "role", e.target.value)}
              />
              <textarea
                className={inputClass}
                value={v.description}
                rows={3}
                placeholder="Description"
                onChange={(e) => update(i, "description", e.target.value)}
              />
              <StringListField
                label="Tags"
                values={v.tags}
                onChange={(tags) => update(i, "tags", tags)}
              />
              <input
                className={inputClass}
                value={v.architectureTitle}
                placeholder="Architecture card title"
                onChange={(e) => update(i, "architectureTitle", e.target.value)}
              />
              <textarea
                className={inputClass}
                value={v.architectureDescription}
                rows={2}
                placeholder="Architecture card description"
                onChange={(e) => update(i, "architectureDescription", e.target.value)}
              />
              <StringListField
                label="Flow diagram labels"
                values={v.flow}
                onChange={(flow) => update(i, "flow", flow)}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-[13px] font-semibold text-neutral-600 hover:text-neutral-900"
      >
        <Plus size={14} /> Add engagement
      </button>
    </div>
  );
}

export function SaveButton({
  saving,
  saved,
  onClick,
}: {
  saving: boolean;
  saved: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={saving}
      className="rounded-full bg-neutral-900 px-6 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {saving ? "Saving…" : saved ? "Saved ✓" : "Save"}
    </button>
  );
}
