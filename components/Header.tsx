"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NetworkStrip } from "@/components/NetworkStrip";
import { VisitorCounter } from "@/components/VisitorCounter";
import { AUTOPIX_LABEL, NAV, SITE_NAME, autopixUrl } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur">
      <NetworkStrip medium="header" />
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span
            className="inline-block h-7 w-7 rounded-full border border-gold bg-[radial-gradient(circle_at_30%_30%,#C6A75E,transparent_55%),radial-gradient(circle_at_70%_70%,#8a7340,transparent_50%)]"
            aria-hidden
          />
          <span className="min-w-0">
            <span className="block font-serif text-base leading-tight tracking-wide text-gold sm:text-lg">
              {SITE_NAME}
            </span>
            <span className="mt-0.5 block text-[10px] leading-none tracking-[0.16em] text-gold/80">
              비공식 팬사이트
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 text-sm md:flex">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "text-gold" : "text-muted hover:text-paper"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <VisitorCounter />
          <a
            href={autopixUrl("header")}
            className="hidden text-xs text-muted underline decoration-line underline-offset-4 hover:text-gold sm:inline"
          >
            {AUTOPIX_LABEL}
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-line text-paper md:hidden"
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-4 py-3 md:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-paper hover:bg-gold/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={autopixUrl("header")} className="mt-3 inline-block text-sm text-muted underline">
            {AUTOPIX_LABEL}
          </a>
        </div>
      )}
    </header>
  );
}
