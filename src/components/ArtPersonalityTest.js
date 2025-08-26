// import React from "react";
// import { ButtonSecondary } from "./ButtonSecondary";
// import { NavbarArt } from "./NavbarArt";

// export const ArtPersonalityTest = ({ question, onNext, onSelect, selectedAnswer }) => {
//   return (
//     <div className="relative w-[412px] h-[1198px] bg-white">
//       {/* 상단 진행도 */}
//       <div className="inline-flex items-end top-[79px] left-[13px] justify-center absolute">
//         <div className="relative w-5 mt-[-1.00px] text-black text-[32px]">
//           {question.questionNumber}
//         </div>
//         <p className="relative w-[110px] h-5 text-center text-[#908f8f]">
//           / 10 문항 (<span className="text-[#849bf0]">{question.linePercent}</span>%)
//         </p>
//       </div>

//       {/* 질문 텍스트 */}
//       <p className="absolute w-[340px] h-[62px] top-[153px] left-9 text-black text-2xl">
//         {question.questionText}
//       </p>

//       {/* 이미지와 설명 */}
//       {question.images.map((img, idx) => (
//         <div key={idx} className={`absolute w-[412px] h-[412px] top-[${idx === 0 ? 64 : 682}px] left-0 bg-[#f5f0f0]`}>
//           <p className="absolute w-[326px] top-[13px] left-[62px] text-black text-base">
//             {img.description}
//           </p>
//           <img
//             className="absolute w-[411px] h-[286px] top-[93px] left-0 object-cover"
//             src={img.src}
//             alt={`Option ${idx + 1}`}
//           />
//           <input
//             type="radio"
//             checked={selectedAnswer === idx}
//             onChange={() => onSelect(idx)}
//             className="absolute top-10 left-6"
//           />
//         </div>
//       ))}

//       {/* 다음 버튼 */}
//       <ButtonSecondary className="!fixed !left-6 !top-[1126px]" text="다음" onClick={onNext} />
//       <NavbarArt className="!fixed !left-0 !top-0" line="line-2-2.svg" />
//     </div>
//   );
// };
