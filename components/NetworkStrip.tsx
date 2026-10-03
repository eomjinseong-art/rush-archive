import Link from "next/link";
import { SITE_NAME, archiveNetworkUrl, otherArchives } from "@/lib/site";

const linkClass =
  "shrink-0 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted hover:border-gold/60 hover:text-gold";

export function NetworkStrip({ medium }: { medium: "header" | "footer" }) {
  return (
    <div className={medium === "header" ? "border-b border-line/80 bg-card/70" : ""}>
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-2">
        <span className="shrink-0 text-[11px] tracking-wide text-gold">영화 속 자동차</span>
        <Link href="/" className={`${linkClass} border-gold/50 text-gold`}>
          {SITE_NAME}
        </Link>
        {otherArchives().map((archive) => (
          <a key={archive.id} href={archiveNetworkUrl(archive.url, "/", medium)} className={linkClass}>
            {archive.label}
          </a>
        ))}
      </div>
    </div>
  );
}
