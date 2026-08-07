export default function PlatformsMarquee({ platforms }: { platforms: string[] }) {
  return (
    <div className="border-t border-page-border bg-page py-8">
      <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-wider text-page-foreground-muted/70">
        Platforms I&rsquo;ve Integrated
      </p>
      <div className="no-scrollbar overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12">
          {[...platforms, ...platforms].map((platform, i) => (
            <span
              key={`${platform}-${i}`}
              className="whitespace-nowrap text-[16px] font-semibold tracking-tight text-page-foreground-muted"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
