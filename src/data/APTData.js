//  art personality test 문제 데이터

const APTData = [
    {
      questionNumber: 1,
      questionText: "미술 작품을 감상할 때, 더 흥미로운 것은 무엇인가요?",
      images: [
        { src: "/image32.png", description: "작품이 사회 문제나 시대적 상황에 대해 이야기하는 방식" },
        { src: "/image33.png", description: "작가가 느낀 감정이나 내면의 세계를 상징적으로 표현한 방식" }
      ],
      linePercent: 10, // 진행도 %
    },
    {
      questionNumber: 2,
      questionText: "다음 질문 텍스트",
      images: [
        { src: "/image34.png", description: "첫 번째 선택지 설명" },
        { src: "/image35.png", description: "두 번째 선택지 설명" }
      ],
      linePercent: 20,
    },
    // ... 총 10문항
  ];
  
  export default APTData;
  