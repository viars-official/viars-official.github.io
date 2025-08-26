// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// pages 폴더 안의 컴포넌트 불러오기
import Landing from "./pages/Landing";
import UserType from "./pages/UserType";
import APTStart from "./pages/APTStart";
import APTOngoing from "./pages/APTOngoing";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* 최초 접속 시 랜딩 페이지 */}
      <Route path="/" element={<Landing />} />
      {/* 랜딩 페이지 이후 User Type 페이지 */}
      <Route path="/usertype" element={<UserType />} />
      {/* Art Personality Test - Start 페이지 */}
      <Route path="/apt-start" element={<APTStart />} />
      {/* Art Personality Test - Ongoing 페이지 */}
      <Route path="/apt-ongoing" element={<APTOngoing />} />
      {/* 로그인 후 홈 페이지 */}
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;