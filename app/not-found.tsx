import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-paper">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-sm text-muted">
        주소가 없거나 잘못된 경로입니다.
      </p>
      <Link href="/" className="mt-6 inline-block text-gold">
        홈으로
      </Link>
    </div>
  );
}
