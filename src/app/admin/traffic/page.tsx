"use client";

import { useEffect, useMemo, useState } from "react";
import { VisitDoc, fetchVisits } from "@/lib/content-store";

function topCounts(items: string[], n = 5): [string, number][] {
  const counts = new Map<string, number>();
  for (const item of items) {
    const key = item || "(unknown)";
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
}

export default function AdminTrafficPage() {
  const [visits, setVisits] = useState<VisitDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVisits().then((data) => {
      setVisits(data);
      setLoading(false);
    });
  }, []);

  const topPages = useMemo(() => topCounts(visits.map((v) => v.path)), [visits]);
  const topCountries = useMemo(() => topCounts(visits.map((v) => v.country)), [visits]);
  const topReferrers = useMemo(
    () => topCounts(visits.map((v) => v.referrer || "(direct)")),
    [visits]
  );

  if (loading) return <p className="text-neutral-400">Loading…</p>;

  return (
    <div>
      <h1 className="text-[22px] font-semibold text-neutral-900">
        Traffic ({visits.length} visits logged)
      </h1>
      <p className="mt-2 text-[13.5px] text-neutral-500">
        Most recent 500 visits. Full aggregate analytics (devices, sessions,
        trends) are in the{" "}
        <a
          href="https://console.firebase.google.com/project/waseem-portfolio-app/analytics"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Firebase Analytics console
        </a>
        .
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SummaryCard title="Top pages" rows={topPages} />
        <SummaryCard title="Top countries" rows={topCountries} />
        <SummaryCard title="Top referrers" rows={topReferrers} />
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-neutral-200 text-neutral-500">
              <th className="px-4 py-3 font-semibold">Time</th>
              <th className="px-4 py-3 font-semibold">Page</th>
              <th className="px-4 py-3 font-semibold">IP</th>
              <th className="px-4 py-3 font-semibold">Location</th>
              <th className="px-4 py-3 font-semibold">Referrer</th>
              <th className="px-4 py-3 font-semibold">User agent</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((v) => (
              <tr key={v.id} className="border-b border-neutral-100 text-neutral-700">
                <td className="whitespace-nowrap px-4 py-2.5">
                  {new Date(v.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2.5">{v.path}</td>
                <td className="px-4 py-2.5">{v.ip || "—"}</td>
                <td className="px-4 py-2.5">
                  {[v.city, v.region, v.country].filter(Boolean).join(", ") || "—"}
                </td>
                <td className="max-w-[180px] truncate px-4 py-2.5">{v.referrer || "(direct)"}</td>
                <td className="max-w-[220px] truncate px-4 py-2.5">{v.userAgent}</td>
              </tr>
            ))}
            {visits.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-neutral-400">
                  No visits logged yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SummaryCard({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4">
      <p className="text-[12px] font-semibold uppercase tracking-wide text-neutral-400">
        {title}
      </p>
      <div className="mt-2 space-y-1.5">
        {rows.length === 0 && <p className="text-[13px] text-neutral-400">—</p>}
        {rows.map(([key, count]) => (
          <div key={key} className="flex items-center justify-between text-[13px]">
            <span className="truncate text-neutral-700">{key}</span>
            <span className="ml-2 shrink-0 font-semibold text-neutral-900">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
