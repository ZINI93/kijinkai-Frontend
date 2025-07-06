// src/pages/MyFirstCompletedOrdersPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar"; // TitleBar 임포트 해제
import FirstCompletedOrderList from "../components/mypage/FirstCompletedOrderList"; // FirstCompletedOrderList 임포트 해제
import "./MyFirstCompletedOrdersPage.css";

function MyFirstCompletedOrdersPage() {
  return (
    <div className="my-first-completed-orders-page">
      {/* TitleBar를 사용하여 페이지 제목과 설명을 표시 */}
      <TitleBar
        title="나의 대행신청 현황 - 1차 결제완료"
        description="1차 결제가 완료된 주문 내역입니다."
      />

      <div className="first-completed-orders-content">
        {/* FirstCompletedOrderList 컴포넌트를 렌더링하여 실제 목록 표시 */}
        <FirstCompletedOrderList />
      </div>
    </div>
  );
}

export default MyFirstCompletedOrdersPage;
