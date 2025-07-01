// src/components/layout/Header.jsx
import React from "react";
import TopNotificationBar from "./TopNotificationBar";
import UtilityNav from "./UtilityNav"; // 최상단 우측 유틸리티 메뉴
import MainHeaderContent from "./MainHeaderContent"; // 로고와 검색 바
import BottomCategoryNav from "./BottomCategoryNav"; // 하단 카테고리 내비게이션
import "./Header.css"; // Header 전체 래퍼 스타일

function Header() {
  return (
    <header className="main-header-wrapper">
      <div className="header-top-strip">
        {" "}
        {/* 최상단 공지 + 유틸리티 메뉴 스트립 */}
        <TopNotificationBar message="2025년 키진카이 오픈이벤트 5% 할인" />{" "}
        {/* 공지사항 */}
        <UtilityNav /> {/* 로그인 전/후 유틸리티 메뉴 (우측 정렬) */}
      </div>

      {/* 로고와 검색 바가 있는 메인 헤더 부분 */}
      <MainHeaderContent />

      {/* 하단 카테고리/서비스 메뉴 */}
      <BottomCategoryNav />
    </header>
  );
}

export default Header;
