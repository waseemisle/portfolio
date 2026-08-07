"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { getAnalyticsInstance } from "@/lib/firebase";
import { logVisit } from "@/lib/content-store";

type IpApiResponse = {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  success?: boolean;
};

async function lookupIpInfo(): Promise<IpApiResponse> {
  try {
    const res = await fetch("https://ipwho.is/");
    if (!res.ok) return {};
    const data = (await res.json()) as IpApiResponse;
    if (data.success === false) return {};
    return data;
  } catch {
    return {};
  }
}

export default function VisitLogger() {
  const pathname = usePathname();
  const ipInfoCache = useRef<IpApiResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // GA4 pageview
      const analytics = await getAnalyticsInstance();
      if (analytics && !cancelled) {
        logEvent(analytics, "page_view", {
          page_path: pathname,
          page_location: window.location.href,
        });
      }

      // Custom visit log (IP/geo) — resolved once per session, reused across pages
      if (!ipInfoCache.current) {
        ipInfoCache.current = await lookupIpInfo();
      }
      if (cancelled) return;
      const info = ipInfoCache.current;

      logVisit({
        path: pathname || "/",
        referrer: document.referrer || "",
        userAgent: navigator.userAgent,
        ip: info.ip || "",
        city: info.city || "",
        region: info.region || "",
        country: info.country || "",
      }).catch(() => {});
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
