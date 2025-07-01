// src/pages/MyApprovedOrdersPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar"; // TitleBar의 올바른 임포트 경로 확인
import ApprovedStatusSummary from "../components/mypage/ApprovedStatusSummary";
import ApprovedOrderNotice from "../components/mypage/ApprovedOrderNotice";
import ApprovedOrderList from "../components/mypage/ApprovedOrderList";
import "./MyApprovedOrdersPage.css";

function MyApprovedOrdersPage() {
  return (
    <div className="my-approved-orders-page">
      <TitleBar title="나의 대행신청 현황 - 구매승인" /> {/* 명확한 제목 */}
      <div className="approved-orders-content">
        <ApprovedStatusSummary />
        <ApprovedOrderNotice />
        <ApprovedOrderList />
      </div>
    </div>
  );
}

export default MyApprovedOrdersPage;
