// src/components/home/HeroSection.jsx
import React from "react";
import "./HeroSection.css"; // HeroSection 스타일 파일

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>5,000엔 이상 상품, 대행수수료 면제!</h2>
        <p>지금 바로 일본 상품을 저렴하게 구매하세요!</p>
        <button className="cta-button">지금 구매하기</button>
      </div>
      {/* 실제 슬라이더 구현 시에는 이미지들을 props로 받아서 매핑 */}
    </section>
  );
}

export default HeroSection;
