import { wiki } from "./sources";
import type { Person } from "./types";

export const people: Person[] = [
  {
    id: "james-hunt",
    nameKo: "제임스 헌트",
    nameEn: "James Hunt",
    years: "1947–1993",
    role: "1976년 F1 월드 챔피언",
    portrayedBy: "크리스 헴스워스",
    body: [
      "영국 서리에서 태어났습니다. 거친 주행 탓에 '헌트 더 션트(the Shunt)'라는 별명이 붙었습니다. 1969년 F3에서 헤스케스 경의 눈에 들어 1973년 헤스케스 팀으로 F1에 데뷔했습니다.",
      "1975년 네덜란드 그랑프리에서 헤스케스 308로 첫 우승을 거뒀고, 헤스케스가 후원사 없이 문을 닫자 1976년 맥라렌으로 옮겨 그해 1점 차로 챔피언이 되었습니다. 1979년 울프 팀에서 은퇴했습니다.",
      "은퇴 뒤 BBC F1 해설자와 신문 칼럼니스트로 활동했고, 1993년 6월 15일 윔블던 자택에서 심장마비로 45세에 숨졌습니다.",
    ],
    sources: [wiki("James_Hunt", "James Hunt")],
  },
  {
    id: "niki-lauda",
    nameKo: "니키 라우다",
    nameEn: "Niki Lauda",
    years: "1949–2019",
    role: "F1 월드 챔피언 3회",
    portrayedBy: "다니엘 브륄",
    body: [
      "오스트리아 빈 출신입니다. 경력이 막히자 은행 대출을 받아 1971년 마치 팀으로 F1에 데뷔했고, 1973년 BRM을 거쳐 1974년 페라리로 옮겼습니다. 1975년 첫 챔피언이 되었습니다.",
      "1976년 독일 그랑프리에서 페라리 312T2가 불길에 휩싸여 큰 화상을 입었지만 6주 뒤 이탈리아 그랑프리에 복귀했고, 그해 헌트에게 1점 차로 타이틀을 내줬습니다. 1977년 페라리, 1984년 맥라렌으로 다시 챔피언이 되었습니다.",
      "항공사 라우다 에어 등을 세운 사업가이기도 했고, 2012년부터 세상을 떠날 때까지 메르세데스 F1 팀의 비상임 회장을 지냈습니다. 영화가 실제와 아주 가깝다고 평가했습니다.",
    ],
    sources: [wiki("Niki_Lauda", "Niki Lauda"), wiki("Rush_(2013_film)", "Rush (2013 film)")],
  },
  {
    id: "clay-regazzoni",
    nameKo: "클레이 레가초니",
    nameEn: "Clay Regazzoni",
    years: "1939–2006",
    role: "페라리 드라이버, 라우다의 팀 동료",
    portrayedBy: "피에르프란체스코 파비노",
    body: [
      "스위스 출신 드라이버입니다. 1973년 BRM에서 라우다와 팀 동료였고, 1974~1976년 페라리에서 다시 함께 달렸습니다. 1974년 챔피언십 2위를 했습니다.",
      "1979년 영국 그랑프리에서 윌리엄스에 첫 우승을 안겼습니다. 1980년 사고로 하반신이 마비된 뒤에도 손으로 조작하는 차로 랠리와 내구 레이스에 나섰습니다.",
    ],
    sources: [wiki("Clay_Regazzoni", "Clay Regazzoni")],
  },
  {
    id: "lord-hesketh",
    nameKo: "헤스케스 경 (알렉산더 퍼머-헤스케스)",
    nameEn: "Alexander Fermor-Hesketh, 3rd Baron Hesketh",
    years: "1950년생",
    role: "헤스케스 레이싱 창립자",
    portrayedBy: "크리스천 매케이",
    body: [
      "영국 귀족으로 헤스케스 레이싱을 세워 헌트를 F1에 데려왔습니다. 후원사 로고 없이 팀을 운영한 것으로 유명합니다. 팀은 1975년 네덜란드 그랑프리에서 첫 우승을 거뒀지만, 그해 말 자금이 떨어져 헌트를 내보냈습니다.",
      "훗날 마거릿 대처·존 메이저 정부에서 하급 장관을 지냈습니다.",
    ],
    sources: [wiki("Alexander_Fermor-Hesketh,_3rd_Baron_Hesketh", "Alexander Fermor-Hesketh, 3rd Baron Hesketh"), wiki("Hesketh_308", "Hesketh 308")],
  },
  {
    id: "suzy-miller",
    nameKo: "수지 밀러",
    nameEn: "Suzy Miller",
    years: "1949년 무렵생",
    role: "헌트의 첫 아내, 모델",
    portrayedBy: "올리비아 와일드",
    body: [
      "영국의 모델·댄서입니다. 1974년 헌트와 결혼했고, 1976년 배우 리처드 버턴에게 떠났습니다. 영화는 이 과정을 1976년 시즌 중반 헌트의 슬럼프와 엮어 보여 줍니다.",
    ],
    sources: [wiki("Suzy_Miller", "Suzy Miller")],
  },
  {
    id: "marlene-lauda",
    nameKo: "말레네 라우다",
    nameEn: "Marlene Lauda (née Knaus)",
    years: "—",
    role: "라우다의 첫 아내",
    portrayedBy: "알렉산드라 마리아 라라",
    body: [
      "라우다와 1976년에 결혼했습니다. 영화는 두 사람이 히치하이크 중에 만나는 것으로 그리지만, 라우다는 실제로는 배우 쿠르트 위르겐스의 집 파티에서 만났다고 말했습니다.",
    ],
    sources: [
      wiki("Niki_Lauda", "Niki Lauda"),
      { label: "Movies & TV Stack Exchange — Lauda and Marlene's first meeting", href: "https://movies.stackexchange.com/questions/50781/is-the-scene-from-rush-where-niki-lauda-meets-his-future-wife-really-the-way-it" },
    ],
  },
  {
    id: "teddy-mayer-alastair-caldwell",
    nameKo: "테디 메이어 · 앨러스테어 콜드웰",
    nameEn: "Teddy Mayer · Alastair Caldwell",
    years: "—",
    role: "맥라렌 대표 · 팀 매니저",
    portrayedBy: "콜린 스틴턴 · 스티븐 맹건",
    body: [
      "1976년 맥라렌을 이끈 두 사람입니다. 에메르송 피티팔디가 갑자기 떠난 뒤 헌트를 데려왔고, 스페인 그랑프리 실격 처분에 항소해 7월에 헌트의 우승을 되찾았습니다.",
    ],
    sources: [wiki("1976_Spanish_Grand_Prix", "1976 Spanish Grand Prix"), wiki("Rush_(2013_film)", "Rush (2013 film)")],
  },
  {
    id: "jochen-mass",
    nameKo: "요헨 마스",
    nameEn: "Jochen Mass",
    years: "1946–2025",
    role: "1976년 맥라렌 드라이버, 헌트의 팀 동료",
    body: [
      "독일 출신으로 1976년 헌트의 맥라렌 팀 동료였습니다. 1975년 스페인 그랑프리 우승자이고 1989년 르망 24시 우승자입니다. 영화의 독일 그랑프리 장면에 본인으로 잠깐 나옵니다.",
    ],
    sources: [wiki("Jochen_Mass", "Jochen Mass"), wiki("Rush_(2013_film)", "Rush (2013 film)")],
  },
];
