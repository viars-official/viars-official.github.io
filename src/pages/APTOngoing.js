import { useState } from "react";
import APTData from "../data/APTData";
import { ArtPersonalityTest } from "../components/ArtPersonalityTest";
import { useNavigate } from "react-router-dom";
import resultMap from "../data/ResultMap";

export default function APTOngoing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const navigate = useNavigate();

  const handleSelect = (idx) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = idx; // 0 또는 1
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < APTData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const matched = resultMap.find(r =>
        r.pattern.every((v, i) => v === answers[i])
      );
      navigate(`/result/${matched ? matched.type : "Unknown"}`);
    }
  };

  return (
    <ArtPersonalityTest
      question={APTData[currentIndex]}
      selectedAnswer={answers[currentIndex]}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  );
}
