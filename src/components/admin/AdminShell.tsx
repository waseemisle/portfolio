"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { LogOut, ExternalLink } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const navItems = [
  { label: "Overview", href: "/admin" },
  { label: "Site & Hero", href: "/admin/site" },
  { label: "Home Sections", href: "/admin/home" },
  { label: "Engagements / Projects", href: "/admin/projects" },
  { label: "Experience", href: "/admin/experience" },
  { label: "Education", href: "/admin/education" },
  { label: "Skills", href: "/admin/skills" },
  { label: "About", href: "/admin/about" },
  { label: "Messages", href: "/admin/messages" },
  { label: "Traffic", href: "/admin/traffic" },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { logout, user } = useAdminAuth();

  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      <aside className="flex w-64 shrink-0 flex-col border-r border-neutral-200 bg-white">
        <div className="border-b border-neutral-200 px-6 py-5">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-neutral-400">
            Admin
          </p>
          <p className="mt-1 truncate text-[13px] text-neutral-600">{user?.email}</p>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                  active
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="space-y-1 border-t border-neutral-200 p-3">
          <a
            href={basePathHome()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-[14px] font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <ExternalLink size={15} /> View live site
          </a>
          <button
            onClick={() => logout()}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[14px] font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <LogOut size={15} /> Log out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto px-10 py-10">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}

function basePathHome() {
  if (typeof window === "undefined") return "/";
  const path = window.location.pathname;
  const idx = path.indexOf("/admin");
  return idx > 0 ? path.slice(0, idx) + "/" : "/";
}
