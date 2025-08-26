// src/pages/APTResult.js
import React from "react";
import { useParams } from "react-router-dom";
import APTResultData from "../data/APTResultData";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonPrimaryWrapper } from "../components/ButtonPrimaryWrapper";
import { NavbarArt } from "../components/NavbarArt";
import { View } from "../components/View";
import { ViewWrapper } from "../components/ViewWrapper";

export default function APTResult() {
  const { type } = useParams();
  const result = APTResultData[type];

  if (!result) {
    return <div>결과 데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="relative w-[412px] min-h-screen bg-white overflow-hidden">
      {/* 상단 결과 헤더 */}
      <div className="absolute w-[226px] h-[39px] top-[90px] left-[94px]">
        <div className="relative w-56 h-[39px]">
          <div className="absolute w-[166px] h-[39px] top-0 left-[29px] bg-[#f8f8f8] rounded-3xl" />
          <div className="absolute w-56 h-[29px] top-1.5 left-0 text-black text-2xl font-normal text-center">
            테스트 결과
          </div>
        </div>
      </div>

      {/* 유형 정보 */}
      <div className="absolute top-[150px] left-[20px] w-[370px]">
        <h2 className="text-2xl font-bold">{result.type}</h2>
        <p className="mt-2 text-base">{result.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {result.keywords.map((kw, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* 추천 전시 */}
      <div className="absolute w-[412px] top-[600px] bg-[#f0f0f0] p-4">
        <h3 className="text-xl mb-3">추천 전시</h3>
        <img src={result.exhibition.image} alt={result.exhibition.title} className="rounded-lg mb-2" />
        <p className="font-bold">{result.exhibition.title}</p>
        <p>{result.exhibition.location}</p>
        <p>{result.exhibition.date}</p>
        <ButtonPrimaryWrapper text="추천 전시 더 보러가기" className="mt-4" />
      </div>

      {/* 추천 작가 */}
      <div className="absolute w-[412px] top-[1000px] bg-[#f0f0f0] p-4">
        <h3 className="text-xl mb-3">추천 작가</h3>
        {result.artists.map((artist, idx) => (
          <div key={idx} className="flex items-center mb-3">
            <img src={artist.image} alt={artist.name} className="w-12 h-12 rounded-full mr-3" />
            <div>
              <p className="font-bold">{artist.name}</p>
              <p className="text-sm">{artist.intro}</p>
            </div>
          </div>
        ))}
        <ButtonPrimaryWrapper text="추천 작가 작품 보러가기" className="mt-4" />
      </div>

      {/* 공유 버튼 */}
      <ButtonPrimary
        className="!left-6 !absolute !top-[1400px]"
        divClassName="!whitespace-nowrap"
        text="검사 결과 공유하기"
      />

      <NavbarArt className="!fixed !left-0 !top-0" />
    </div>
  );
}
