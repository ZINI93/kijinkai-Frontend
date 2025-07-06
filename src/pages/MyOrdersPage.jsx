// src/pages/MyOrdersPage.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import MyApprovedOrdersPage from "./MyApprovedOrdersPage";
import MyProcessingOrdersPage from "./MyProcessingOrdersPage";
import MyFirstCompletedOrdersPage from "./MyFirstCompletedOrdersPage";
import AllOrdersList from "../components/mypage/AllOrdersList";
import TitleBar from "../components/common/TitleBar";

// 새로 추가될 페이지 컴포넌트들 임포트
import MySecondRequestOrdersPage from "./MySecondRequestOrdersPage"; // 2차 결제요청 페이지
import MySecondCompletedOrdersPage from "./MySecondCompletedOrdersPage"; // 2차 결제완료 페이지

import MyInternationalShippingPage from "./MyInternationalShippingPage.jsx";
import MyDeliveryCompletedPage from "./MyDeliveryCompletedPage.jsx";

function MyOrdersPage() {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("status");

  let content = null;

  if (statusFilter === "approved") {
    content = <MyApprovedOrdersPage />;
  } else if (statusFilter === "processing") {
    content = <MyProcessingOrdersPage />;
  } else if (statusFilter === "first_completed") {
    content = <MyFirstCompletedOrdersPage />;
  } else if (statusFilter === "first_request") {
    // 1차 결제요청 상태 추가
    content = <MyFirstRequestOrdersPage />;
  } else if (statusFilter === "second_request") {
    // 2차 결제요청 상태 추가
    content = <MySecondRequestOrdersPage />;
  } else if (statusFilter === "second_completed") {
    // 2차 결제완료 상태 추가
    content = <MySecondCompletedOrdersPage />;
  } else if (statusFilter === "international_shipping") {
    // 국제배송중 상태 추가
    content = <MyInternationalShippingPage />;
  } else if (statusFilter === "delivery_completed") {
    // 배송완료 상태 추가
    content = <MyDeliveryCompletedPage />;
  } else {
    // statusFilter가 없거나 다른 값일 때 AllOrdersList 렌더링 (기본)
    content = (
      <div className="my-orders-default-page">
        <TitleBar
          title="전체 주문 내역"
          description="회원님의 모든 주문 내역입니다."
        />
        <AllOrdersList />
      </div>
    );
  }

  return <div className="my-orders-container">{content}</div>;
}

export default MyOrdersPage;
