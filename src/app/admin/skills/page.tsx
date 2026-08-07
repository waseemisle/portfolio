"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import {
  SkillGroupDoc,
  fetchSkillGroups,
  createSkillGroup,
  updateSkillGroup,
  deleteSkillGroup,
} from "@/lib/content-store";
import { TextField, StringListField, SaveButton } from "@/components/admin/fields";

function emptyItem(order: number): Omit<SkillGroupDoc, "id"> {
  return { title: "", skills: [], order };
}

export default function AdminSkillsPage() {
  const [items, setItems] = useState<SkillGroupDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetchSkillGroups().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const update = (id: string, patch: Partial<SkillGroupDoc>) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const handleSave = async (item: SkillGroupDoc) => {
    setSavingId(item.id);
    try {
      const { id, ...rest } = item;
      await updateSkillGroup(id, rest);
    } finally {
      setSavingId(null);
    }
  };

  const handleAdd = async () => {
    const order = items.length ? Math.max(...items.map((p) => p.order)) + 1 : 0;
    const id = await createSkillGroup(emptyItem(order));
    setItems((prev) => [...prev, { id, ...emptyItem(order) }]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this skill group?")) return;
    await deleteSkillGroup(id);
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const move = async (index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    const a = next[index];
    const b = next[j];
    const swapped = a.order;
    a.order = b.order;
    b.order = swapped;
    [next[index], next[j]] = [next[j], next[index]];
    setItems(next);
    await Promise.all([
      updateSkillGroup(a.id, { order: a.order }),
      updateSkillGroup(b.id, { order: b.order }),
    ]);
  };

  if (loading) return <p className="text-neutral-400">Loading…</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-neutral-900">
          Skills ({items.length})
        </h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-[13.5px] font-semibold text-white hover:opacity-90"
        >
          <Plus size={14} /> Add group
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {items.map((item, i) => (
          <div key={item.id} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                {item.title || "Untitled group"}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={() => move(i, -1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronUp size={16} />
                </button>
                <button onClick={() => move(i, 1)} className="text-neutral-400 hover:text-neutral-900">
                  <ChevronDown size={16} />
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              <TextField
                label="Group title"
                value={item.title}
                onChange={(v) => update(item.id, { title: v })}
              />
              <StringListField
                label="Skills"
                values={item.skills}
                onChange={(v) => update(item.id, { skills: v })}
              />
            </div>

            <div className="mt-4">
              <SaveButton
                saving={savingId === item.id}
                saved={false}
                onClick={() => handleSave(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
