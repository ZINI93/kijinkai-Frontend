// src/pages/MyProcessingOrdersPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar";
import ProcessingStatusSummary from "../components/mypage/ProcessingStatusSummary";
import ProcessingOrderNotice from "../components/mypage/ProcessingOrderNotice";
import ProcessingOrderList from "../components/mypage/ProcessingOrderList";
import "./MyProcessingOrdersPage.css"; // MyProcessingOrdersPage 스타일

function MyProcessingOrdersPage() {
  return (
    <div className="my-processing-orders-page">
      <TitleBar
        title="나의 대행신청 현황"
        description="현재 진행 중이거나 구매 요청된 내역입니다."
      />

      <div className="processing-orders-content">
        <ProcessingStatusSummary />
        <ProcessingOrderNotice />
        <ProcessingOrderList />
      </div>
    </div>
  );
}

export default MyProcessingOrdersPage;
