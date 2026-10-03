import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { NetworkStrip } from "@/components/NetworkStrip";
import { AUTOPIX_LABEL, FAN_SITE_DISCLAIMER, autopixUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <CoupangBanner />
      <NetworkStrip medium="footer" />
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <h2 className="font-serif text-xs tracking-[0.22em] text-gold">비공식 팬사이트</h2>
        <div className="mt-3 max-w-3xl space-y-3">
          <p>{FAN_SITE_DISCLAIMER}</p>
          <p>
            본문은 위키백과·제조사·모터스포츠 매체·IMCDb 같은 바깥 자료를 참고해 다시 쓴 글입니다. 각 페이지 아래에
            출처를 적고, 자료끼리 날짜·순위·차종이 다르면 그 사실을 함께 적습니다.{" "}
            <Link href="/sources" className="underline decoration-line underline-offset-4 hover:text-gold">
              출처와 기준
            </Link>
          </p>
          <p>권리자의 요청이 있으면 해당 내용을 삭제하거나 고칩니다.</p>
        </div>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <a
            href={autopixUrl("footer")}
            className="underline decoration-line underline-offset-4 hover:text-gold"
          >
            자동차 용품 · {AUTOPIX_LABEL}
          </a>
          <Link href="/sources" className="underline decoration-line underline-offset-4 hover:text-gold">
            출처
          </Link>
        </p>
      </div>
    </footer>
  );
}
