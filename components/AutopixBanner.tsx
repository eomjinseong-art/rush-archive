import { SisterCta } from "@/components/SisterCta";
import { AUTOPIX_LABEL, CAR_CTA_LABEL } from "@/lib/site";
import { AUTOPIX_HEADLINE } from "@/lib/siteConfig";

export function AutopixBanner({ content }: { content?: string }) {
  return (
    <section className="rounded-2xl border border-gold/55 bg-[radial-gradient(circle_at_top_left,#C6A75E33,transparent_55%)] p-5 sm:p-8">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{AUTOPIX_LABEL}</p>
      <h2 className="mt-2 font-serif text-2xl leading-snug text-paper sm:text-3xl">{AUTOPIX_HEADLINE}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        이 아카이브는 경주차도 촬영 차량도 팔지 않습니다. 내 차에 쓸 세차·정비·실내 용품은 {AUTOPIX_LABEL}에서 봅니다.
      </p>
      <div className="mt-5">
        <SisterCta label={CAR_CTA_LABEL} content={content} />
      </div>
    </section>
  );
}
