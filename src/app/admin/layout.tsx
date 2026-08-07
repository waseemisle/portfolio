"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminAuthProvider, useAdminAuth } from "@/hooks/useAdminAuth";
import AdminShell from "@/components/admin/AdminShell";

function AdminGate({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading } = useAdminAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname?.replace(/\/$/, "").endsWith("/admin/login");

  useEffect(() => {
    if (loading) return;
    if (!isAdmin && !isLoginPage) {
      router.replace("/admin/login");
    } else if (isAdmin && isLoginPage) {
      router.replace("/admin");
    }
  }, [loading, isAdmin, isLoginPage, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 text-neutral-400">
        Loading…
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 text-neutral-400">
        Redirecting…
      </div>
    );
  }

  return <AdminShell>{children}</AdminShell>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminGate>{children}</AdminGate>
    </AdminAuthProvider>
  );
}
