"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import {
  EducationDoc,
  fetchEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "@/lib/content-store";
import { TextField, SaveButton } from "@/components/admin/fields";

function emptyItem(order: number): Omit<EducationDoc, "id"> {
  return { school: "", degree: "", period: "", order };
}

export default function AdminEducationPage() {
  const [items, setItems] = useState<EducationDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetchEducation().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const update = (id: string, patch: Partial<EducationDoc>) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const handleSave = async (item: EducationDoc) => {
    setSavingId(item.id);
    try {
      const { id, ...rest } = item;
      await updateEducation(id, rest);
    } finally {
      setSavingId(null);
    }
  };

  const handleAdd = async () => {
    const order = items.length ? Math.max(...items.map((p) => p.order)) + 1 : 0;
    const id = await createEducation(emptyItem(order));
    setItems((prev) => [...prev, { id, ...emptyItem(order) }]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this education entry?")) return;
    await deleteEducation(id);
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
      updateEducation(a.id, { order: a.order }),
      updateEducation(b.id, { order: b.order }),
    ]);
  };

  if (loading) return <p className="text-neutral-400">Loading…</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-neutral-900">
          Education ({items.length})
        </h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-[13.5px] font-semibold text-white hover:opacity-90"
        >
          <Plus size={14} /> Add entry
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {items.map((item, i) => (
          <div key={item.id} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                {item.school || "Untitled"}
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

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <TextField
                label="School"
                value={item.school}
                onChange={(v) => update(item.id, { school: v })}
              />
              <TextField
                label="Degree"
                value={item.degree}
                onChange={(v) => update(item.id, { degree: v })}
              />
              <TextField
                label="Period"
                value={item.period}
                onChange={(v) => update(item.id, { period: v })}
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
