# 러쉬 아카이브

화면 제목은 러쉬 아카이브입니다. 패키지 이름은 `rush-archive`입니다.

《러시: 더 라이벌》(Rush, 2013) 한 편을 다루는 비공식 팬 아카이브입니다. 1976년 F1 시즌과 제임스 헌트·니키 라우다, 영화에 나온 F1 머신과 로드카을 정리합니다.
영화 개요, 실화와 영화의 차이, 실존 인물, 레이스·서킷, 차량 상세(실제 차 / 영화용 레플리카 구분)를 담습니다.
Next.js App Router + TypeScript + Tailwind. 분노의 질주·트랜스포머 아카이브와 같은 구조입니다.

영화사, 제조사, 배우, 권리자와 무관합니다. 포스터와 영화 스틸은 쓰지 않고, 위키미디어 공용의 자유 이용 사진만 출처와 함께 씁니다.
사진이 없는 차는 색 배경으로 둡니다. 사이트 주인의 실명은 적지 않습니다.

## 데이터

- `data/film.ts` — 영화 정보, 출연진, 실화 vs 영화, 자료 차이
- `data/people.ts` — 실존 인물
- `data/races.ts` — 레이스·서킷
- `data/cars.ts` — 차량. 영화 속 쓰임, 촬영 차, 실제 역사, 자료 차이(`uncertain`), 출처
- `data/carPhotos.ts` — 사진 출처·라이선스 (생성 파일)
- `data/sisterCarList.ts` — 같은 브랜드 자매 아카이브 차량 (생성 파일)

## 링크 규칙

- 오토픽스 차량 버튼: `utm_source=rush-archive&utm_medium=cta&utm_campaign=rush-car&utm_content=<차량 slug>`, 보조 링크로 `/wiki/0N-*.html` 가이드.
- 자매 아카이브 링크: `utm_source=rush-archive&utm_campaign=archive-network`.
- 쿠팡 파트너스 배너: 푸터 위 (`components/CoupangBanner.tsx`).

방문자 수는 Abacus `rush-archive` / `visits`입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

검사: `npx tsc --noEmit && npm run lint && npm run build`
