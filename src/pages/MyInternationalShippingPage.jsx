// src/pages/MyInternationalShippingPage.jsx
import React from "react";
import TitleBar from "../components/common/TitleBar.jsx";
import InternationalShippingList from "../components/mypage/InternationalShippingList.jsx"; // 리스트 컴포넌트 임포트
import "./MyInternationalShippingPage.css"; // 스타일 파일

function MyInternationalShippingPage() {
  return (
    <div className="my-international-shipping-page">
      <TitleBar
        title="나의 대행신청 현황 - 국제배송"
        description="현재 국제 배송 중인 상품의 내역입니다."
      />
      <div className="international-shipping-content">
        <InternationalShippingList />
      </div>
    </div>
  );
}

export default MyInternationalShippingPage;
