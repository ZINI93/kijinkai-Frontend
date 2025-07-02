// src/pages/MyFirstCompletedOrdersPage.jsx
import React from "react";
// import TitleBar from '../components/common/TitleBar'; // 임시로 주석 처리
// import FirstCompletedOrderList from '../components/mypage/FirstCompletedOrderList'; // 임시로 주석 처리
import "./MyFirstCompletedOrdersPage.css";

function MyFirstCompletedOrdersPage() {
  return (
    <div
      style={{
        padding: "30px",
        border: "3px solid green",
        backgroundColor: "#e6ffe6",
        textAlign: "center",
      }}
    >
      <h1>1차 결제 완료 페이지 (테스트)</h1>
      <p>
        이 메시지가 보인다면 페이지 컴포넌트는 정상적으로 렌더링되고 있습니다.
      </p>
    </div>
  );
}

export default MyFirstCompletedOrdersPage;
