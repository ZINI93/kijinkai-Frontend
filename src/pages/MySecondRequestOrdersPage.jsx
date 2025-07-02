// src/pages/MySecondRequestOrdersPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar";
import SecondRequestList from "../components/mypage/SecondRequestList"; // 리스트 컴포넌트 임포트
import "./MySecondRequestOrdersPage.css"; // 스타일 파일

function MySecondRequestOrdersPage() {
  return (
    <div className="my-second-request-orders-page">
      <TitleBar
        title="나의 대행신청 현황 - 2차 결제요청"
        description="2차 결제가 요청된 상품의 내역입니다."
      />
      <div className="second-request-orders-content">
        <SecondRequestList />
      </div>
    </div>
  );
}

export default MySecondRequestOrdersPage;
