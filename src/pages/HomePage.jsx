// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import CategoryShowcase from "../components/home/CategoryShowcase";
// 다른 홈 페이지 섹션 컴포넌트들을 여기에 임포트

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoryShowcase />
      {/* 다른 홈 페이지 섹션들 추가 예정 (예: 추천 상품, 신규 상품 등) */}
    </div>
  );
}

export default HomePage;
