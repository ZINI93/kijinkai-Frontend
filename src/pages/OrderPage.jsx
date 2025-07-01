// src/pages/OrderPage.jsx
import React from "react";
import OrderForm from "../components/order/OrderForm"; // OrderForm 컴포넌트 임포트
import TitleBar from "../components/common/TitleBar"; // TitleBar 재사용
import "./OrderPage.css"; // OrderPage 스타일

function OrderPage() {
  return (
    <div className="order-page-container">
      <TitleBar
        title="주문하기"
        description="구매를 원하는 상품의 정보를 입력해주세요."
      />
      <OrderForm />
    </div>
  );
}

export default OrderPage;
