// 16개 유형에 대한 결과 데이터를 관리


const APTResultData = {
  IRNS: {
    type: "IRNS",
    description: "감성적인 분위기와 사실적인 형상이 결합된 표현에 끌리며, 작가의 내면과 감정을 느낄 수 있는 전시를 선호합니다.",
    keywords: ["내면적", "제현적", "자연주의적", "정서적"],
    icons: {
      introspective: "group-178-2.png",
      representational: "fluent-eye-24-filled.svg",
      naturalistic: "mingcute-tree-3-fill.svg",
      sensitive: "solar-heart-bold.svg",
    },
    exhibition: {
      title: "2025 아시아프",
      image: "rectangle-128.png",
      location: "문화역서울284",
      date: "2025.09.01 - 2025.09.30",
    },
    artists: [
      {
        name: "홍길동",
        intro: "감정을 섬세하게 표현하는 현대 미술 작가",
        image: "ellipse-83.png",
      },
      {
        name: "이영희",
        intro: "자연주의적 요소를 활용한 회화 작품",
        image: "ellipse-84.png",
      },
    ],
  },
  EADC: {
    type: "EADC",
    description: "사회적 문제를 예술로 표현하는 방식에 큰 관심이 있습니다.",
    keywords: ["외향적", "분석적", "제도적", "비판적"],
    icons: {
      introspective: "group-200.png",
      representational: "fluent-eye-24-filled.svg",
      naturalistic: "mingcute-tree-3-fill.svg",
      sensitive: "solar-heart-bold.svg",
    },
    exhibition: {
      title: "현대미술 비엔날레",
      image: "rectangle-150.png",
      location: "부산현대미술관",
      date: "2025.07.10 - 2025.08.31",
    },
    artists: [
      {
        name: "김철수",
        intro: "사회와 예술의 관계를 탐구하는 작가",
        image: "ellipse-90.png",
      },
    ],
  },
  // ... 나머지 14개 유형 추가
};

export default APTResultData;
