// src/pages/MyOrdersPage.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import MyApprovedOrdersPage from "./MyApprovedOrdersPage";
import MyProcessingOrdersPage from "./MyProcessingOrdersPage";
import MyFirstCompletedOrdersPage from "./MyFirstCompletedOrdersPage"; // MyFirstCompletedOrdersPage 임포트 확인
import AllOrdersList from "../components/mypage/AllOrdersList"; // AllOrdersList 임포트
import TitleBar from "../components/common/TitleBar"; // 공통 TitleBar

function MyOrdersPage() {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("status");

  let content = null;
  // let pageTitle = "나의 주문 내역"; // 이제 각 컴포넌트가 자체 TitleBar를 가집니다.
  // let pageDescription = "회원님의 모든 주문 관련 내역을 확인하실 수 있습니다.";

  if (statusFilter === "approved") {
    content = <MyApprovedOrdersPage />;
    // pageTitle = "나의 대행신청 현황 - 구매승인";
    // pageDescription = "구매 승인된 상품의 내역입니다.";
  } else if (statusFilter === "processing") {
    content = <MyProcessingOrdersPage />;
    // pageTitle = "나의 대행신청 현황 - 진행중/구매요청";
    // pageDescription = "현재 진행 중이거나 구매 요청된 내역입니다.";
  } else if (statusFilter === "first_completed") {
    // <-- 이 조건문이 누락되어 있었습니다!
    content = <MyFirstCompletedOrdersPage />;
    // pageTitle = "나의 대행신청 현황 - 1차 결제완료";
    // pageDescription = "1차 결제가 완료된 주문 내역입니다.";
  } else {
    // statusFilter가 없거나 다른 값일 때 AllOrdersList 렌더링
    content = (
      <div className="my-orders-default-page">
        <TitleBar
          title="전체 주문 내역"
          description="회원님의 모든 주문 내역입니다."
        />
        <AllOrdersList />
      </div>
    );
    // pageTitle = "전체 주문 내역";
    // pageDescription = "회원님의 모든 주문 내역입니다.";
  }

  return <div className="my-orders-container">{content}</div>;
}

export default MyOrdersPage;
