//   APTOngoing.js에서 사용자가 선택한 10문항의 answers 배열과 각 유형의 pattern을 비교

const resultMap = [
    { type: "EADC", pattern: [0,1,1,0,0,1,0,1,0,0] },
    { type: "EADS", pattern: [0,1,1,0,0,1,1,1,0,0] },
    { type: "EANC", pattern: [0,1,0,0,0,0,0,1,0,0] },
    { type: "EANS", pattern: [0,1,0,0,0,0,1,1,0,0] },
    { type: "ERDC", pattern: [0,0,1,0,0,1,0,0,0,0] },
    { type: "ERDS", pattern: [0,0,1,0,0,1,1,0,0,0] },
    { type: "ERNC", pattern: [0,0,0,0,0,0,0,0,0,0] },
    { type: "ERNS", pattern: [0,0,0,0,0,0,1,0,0,0] },
    { type: "IADC", pattern: [0,1,1,1,0,1,0,1,1,0] },
    { type: "IADS", pattern: [0,1,1,1,0,1,1,1,1,0] },
    { type: "IANC", pattern: [0,1,0,1,0,0,0,1,1,0] },
    { type: "IANS", pattern: [0,1,0,1,0,0,1,1,1,0] },
    { type: "IRDC", pattern: [0,0,1,1,0,1,0,0,1,0] },
    { type: "IRDS", pattern: [0,0,1,1,0,1,1,0,1,0] },
    { type: "IRNC", pattern: [0,0,0,1,0,0,0,0,1,0] },
    { type: "IRNS", pattern: [0,0,0,1,0,0,1,0,1,0] },
  ];
  
  export default resultMap;