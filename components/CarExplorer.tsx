"use client";

import { useMemo, useState } from "react";
import { CarCard } from "@/components/CarCard";
import { FILM_USE_LABEL, KINDS, cars } from "@/lib/cars";
import type { Car, FilmUse } from "@/data/types";

const tabs = [
  { id: "kind", label: "종류별" },
  { id: "use", label: "촬영 차량별" },
  { id: "brand", label: "브랜드별" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const USES: FilmUse[] = ["real", "mixed", "replica", "unknown", "story-only"];

function Grid({ items }: { items: Car[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((car) => (
        <CarCard key={car.slug} car={car} />
      ))}
    </div>
  );
}

export function CarExplorer() {
  const [tab, setTab] = useState<TabId>("kind");

  const groups = useMemo(() => {
    if (tab === "use") {
      return USES.map((use) => ({
        key: use,
        title: FILM_USE_LABEL[use],
        items: cars.filter((car) => car.filmUse === use),
      })).filter((group) => group.items.length > 0);
    }
    if (tab === "brand") {
      const brands = [...new Set(cars.map((car) => car.brand))];
      return brands
        .map((brand) => {
          const items = cars.filter((car) => car.brand === brand);
          return { key: brand, title: `${items[0].brandKo} (${brand})`, items };
        })
        .sort((a, b) => b.items.length - a.items.length);
    }
    return KINDS.map((kind) => ({
      key: kind,
      title: kind,
      items: cars.filter((car) => car.kind === kind),
    })).filter((group) => group.items.length > 0);
  }, [tab]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4" role="tablist">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`rounded-full px-4 py-1.5 text-sm whitespace-nowrap ${
              tab === item.id ? "bg-gold text-bg" : "border border-line text-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.key}>
            <h2 className="mb-4 font-serif text-xl text-gold">
              {group.title} <span className="text-sm text-muted">{group.items.length}대</span>
            </h2>
            <Grid items={group.items} />
          </section>
        ))}
      </div>
    </div>
  );
}
