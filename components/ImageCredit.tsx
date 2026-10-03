import type { LicensedImage } from "@/data/types";

function CreditText({
  href,
  children,
  linkClass,
}: {
  href?: string;
  children: string;
  linkClass: string;
}) {
  if (!href) return <>{children}</>;
  return (
    <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/**
 * 사진 저작자 / 라이선스 / 출처 표기.
 * plain: 링크 없이 글자만 (카드처럼 전체가 링크인 곳 안에서 씁니다).
 */
export function ImageCredit({
  image,
  compact = false,
  plain = false,
  as: Tag = "figcaption",
}: {
  image: LicensedImage;
  compact?: boolean;
  plain?: boolean;
  as?: "figcaption" | "p";
}) {
  const linkClass = "underline decoration-line underline-offset-2 hover:text-gold";
  const sourceLabel = image.sourceLabel || "위키미디어 공용";
  return (
    <Tag
      className={
        compact
          ? "mt-1.5 break-words text-[10px] leading-4 text-muted"
          : "mt-2 break-words text-xs leading-5 text-muted"
      }
    >
      사진: <span className="text-paper/80">{image.author}</span>
      {" / "}
      {plain ? (
        image.license
      ) : (
        <CreditText href={image.licenseUrl || undefined} linkClass={linkClass}>
          {image.license}
        </CreditText>
      )}
      {" / 출처: "}
      {plain ? (
        sourceLabel
      ) : (
        <CreditText href={image.sourceUrl || undefined} linkClass={linkClass}>
          {sourceLabel}
        </CreditText>
      )}
      {image.referenceNote && !compact ? ` / ${image.referenceNote}` : null}
    </Tag>
  );
}
