// src/pages/MyOrdersPage.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import MyApprovedOrdersPage from "./MyApprovedOrdersPage";
import MyProcessingOrdersPage from "./MyProcessingOrdersPage"; // MyProcessingOrdersPage 임포트
import TitleBar from "../components/common/TitleBar"; // 공통 TitleBar

function MyOrdersPage() {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("status");

  let content = null;
  let pageTitle = "나의 주문 내역";
  let pageDescription = "회원님의 모든 주문 관련 내역을 확인하실 수 있습니다.";

  if (statusFilter === "approved") {
    content = <MyApprovedOrdersPage />;
    pageTitle = "나의 대행신청 현황 - 구매승인";
    pageDescription = "구매 승인된 상품의 내역입니다.";
  } else if (statusFilter === "processing") {
    content = <MyProcessingOrdersPage />; // 'processing'일 때 MyProcessingOrdersPage 렌더링
    pageTitle = "나의 대행신청 현황 - 진행중/구매요청";
    pageDescription = "현재 진행 중이거나 구매 요청된 내역입니다.";
  } else {
    // 기본적으로는 모든 주문 리스트를 보여주는 페이지 (추후 구현)
    // 여기서는 일단 모든 주문을 보여주는 컴포넌트가 없으므로 임시로 메시지
    content = (
      <div className="order-detail-placeholder mypage-section">
        {" "}
        {/* mypage-section 클래스 추가 */}
        <TitleBar
          title="전체 주문 내역"
          description="회원님의 모든 주문 내역입니다."
        />
        <div style={{ padding: "20px", textAlign: "center", color: "#777" }}>
          <p>전체 주문 내역을 표시하는 컴포넌트가 여기에 렌더링됩니다.</p>
          <p>아직 구현되지 않았습니다.</p>
        </div>
      </div>
    );
    pageTitle = "전체 주문 내역";
    pageDescription = "회원님의 모든 주문 내역입니다.";
  }

  return <div className="my-orders-container">{content}</div>;
}

export default MyOrdersPage;
