// src/pages/MyDeliveryCompletedPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar.jsx";
import DeliveryCompletedList from "../components/mypage/DeliveryCompletedList.jsx"; // 리스트 컴포넌트 임포트
import "./MyDeliveryCompletedPage.css"; // 스타일 파일

function MyDeliveryCompletedPage() {
  return (
    <div className="my-delivery-completed-page">
      <TitleBar
        title="나의 대행신청 현황 - 배송완료"
        description="배송이 완료된 상품의 내역입니다."
      />
      <div className="delivery-completed-content">
        <DeliveryCompletedList />
      </div>
    </div>
  );
}

export default MyDeliveryCompletedPage;
