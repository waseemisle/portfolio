import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-[17px] font-semibold text-heading">
              {site.name}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-text-quaternary">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-text-secondary transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-text-quaternary">
                Contact
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[14px] text-text-secondary transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-[14px] text-text-secondary transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] text-text-secondary transition-colors hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-[13px] text-text-quaternary">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-text-quaternary">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
