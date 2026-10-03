/**
 * 영화 속 자동차 아카이브 네트워크. 각 주소는 2026-10-03에 HTTP 200을 확인했습니다.
 * bond-archive.vercel.app는 다른 서비스이므로 007 아카이브는 bond-archive-two를 씁니다.
 */
export type ArchiveId = "ff" | "bond" | "mi" | "tf" | "fvf" | "rush" | "gt";

export type Archive = { id: ArchiveId; label: string; url: string; blurb: string };

export const ARCHIVES: Archive[] = [
  {
    id: "ff",
    label: "분노의 질주 아카이브",
    url: process.env.NEXT_PUBLIC_FF_ARCHIVE_URL ?? "https://ff-archive.vercel.app",
    blurb: "패밀리의 수프라·차저·스카이라인",
  },
  {
    id: "bond",
    label: "007 본드 아카이브",
    url: process.env.NEXT_PUBLIC_BOND_ARCHIVE_URL ?? "https://bond-archive-two.vercel.app",
    blurb: "DB5부터 발할라까지 본드카",
  },
  {
    id: "mi",
    label: "미션 임파서블 아카이브",
    url: process.env.NEXT_PUBLIC_MI_ARCHIVE_URL ?? "https://mi-archive.vercel.app",
    blurb: "IMF 요원들의 추격 차량",
  },
  {
    id: "tf",
    label: "트랜스포머 아카이브",
    url: process.env.NEXT_PUBLIC_TF_ARCHIVE_URL ?? "https://transformers-archive.vercel.app",
    blurb: "오토봇·디셉티콘이 변신한 실제 차",
  },
  {
    id: "fvf",
    label: "포드 V 페라리 아카이브",
    url: process.env.NEXT_PUBLIC_FVF_ARCHIVE_URL ?? "https://fordvferrari-archive.vercel.app",
    blurb: "1966 르망, GT40 Mk II와 330 P3",
  },
  {
    id: "rush",
    label: "러쉬 아카이브",
    url: process.env.NEXT_PUBLIC_RUSH_ARCHIVE_URL ?? "https://rush-archive.vercel.app",
    blurb: "1976 F1, 헌트의 M23과 라우다의 312T2",
  },
  {
    id: "gt",
    label: "그란 투리스모 아카이브",
    url: process.env.NEXT_PUBLIC_GT_ARCHIVE_URL ?? "https://granturismo-archive.vercel.app",
    blurb: "GT 아카데미에서 르망까지, GT-R",
  },
];

export function getArchive(id: ArchiveId) {
  return ARCHIVES.find((a) => a.id === id)!;
}
