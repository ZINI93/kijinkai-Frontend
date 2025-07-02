// src/pages/MySecondCompletedOrdersPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar";
import SecondCompletedOrderList from "../components/mypage/SecondCompletedOrderList"; // 리스트 컴포넌트 임포트
import "./MySecondCompletedOrdersPage.css";

function MySecondCompletedOrdersPage() {
  return (
    <div className="my-second-completed-orders-page">
      <TitleBar
        title="나의 대행신청 현황 - 2차 결제완료"
        description="2차 결제가 완료된 상품의 내역입니다."
      />
      <div className="second-completed-orders-content">
        <SecondCompletedOrderList />
      </div>
    </div>
  );
}

export default MySecondCompletedOrdersPage;
