// src/components/layout/MainHeaderContent.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./MainHeaderContent.css"; // 스타일 파일 임포트

function MainHeaderContent() {
  return (
    <div className="main-header-content">
      <div className="logo-section">
        <div className="logo">
          <Link to="/">
            {/* public 폴더에 있는 kijinkai-home-logo.png 사용 */}
            <img
              src="/kijinkai-home-logo.jpeg" // public 폴더의 이미지에 접근하는 경로
              alt="Kijinkai Logo"
              className="logo-img"
            />
          </Link>
        </div>
      </div>

      {/* 기존 검색 섹션 제거, URL 입력 섹션만 남김 */}
      <div className="url-input-section">
        {" "}
        {/* 새로운 컨테이너 클래스명 */}
        <input
          type="text"
          placeholder="구매를 원하는 상품의 URL을 입력해주세요. (예: https://)"
          className="url-input"
        />
        <button type="button" className="url-go-button">
          이동
        </button>{" "}
        {/* 버튼 클래스명 변경 */}
      </div>
    </div>
  );
}

export default MainHeaderContent;
