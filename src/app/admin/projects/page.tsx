"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import {
  ProjectDoc,
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/lib/content-store";
import { TextField, TextAreaField, StringListField, SaveButton } from "@/components/admin/fields";

function emptyProject(order: number): Omit<ProjectDoc, "id"> {
  return { category: "", title: "", description: "", tags: [], group: "", order };
}

export default function AdminProjectsPage() {
  const [items, setItems] = useState<ProjectDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const update = (id: string, patch: Partial<ProjectDoc>) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const handleSave = async (item: ProjectDoc) => {
    setSavingId(item.id);
    try {
      const { id, ...rest } = item;
      await updateProject(id, rest);
    } finally {
      setSavingId(null);
    }
  };

  const handleAdd = async () => {
    const order = items.length ? Math.max(...items.map((p) => p.order)) + 1 : 0;
    const id = await createProject(emptyProject(order));
    setItems((prev) => [...prev, { id, ...emptyProject(order) }]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    await deleteProject(id);
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const move = async (index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    const a = next[index];
    const b = next[j];
    const swappedOrder = a.order;
    a.order = b.order;
    b.order = swappedOrder;
    [next[index], next[j]] = [next[j], next[index]];
    setItems(next);
    await Promise.all([
      updateProject(a.id, { order: a.order }),
      updateProject(b.id, { order: b.order }),
    ]);
  };

  if (loading) return <p className="text-neutral-400">Loading…</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-neutral-900">
          Work / Projects ({items.length})
        </h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-[13.5px] font-semibold text-white hover:opacity-90"
        >
          <Plus size={14} /> Add project
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {items.map((item, i) => (
          <div key={item.id} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                {item.title || "Untitled project"}
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
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <TextField
                  label="Category (small label)"
                  value={item.category}
                  onChange={(v) => update(item.id, { category: v })}
                />
                <TextField
                  label="Title"
                  value={item.title}
                  onChange={(v) => update(item.id, { title: v })}
                />
              </div>
              <TextField
                label="Group (used to cluster the compact Engagements grid, e.g. Commerce & Retail)"
                value={item.group}
                onChange={(v) => update(item.id, { group: v })}
              />
              <TextAreaField
                label="Description"
                value={item.description}
                onChange={(v) => update(item.id, { description: v })}
                rows={3}
              />
              <StringListField
                label="Tags"
                values={item.tags}
                onChange={(v) => update(item.id, { tags: v })}
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
