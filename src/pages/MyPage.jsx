// src/pages/MyPage.jsx
import React from "react";
import SideMenu from "../components/mypage/SideMenu";
import MyPageContent from "../components/mypage/MyPageContent";
import "./MyPage.css";

function MyPage() {
  return (
    <div className="mypage-container">
      <SideMenu />
      <MyPageContent />{" "}
      {/* MyPageContent가 Routes를 포함하므로, 이 컴포넌트가 렌더링됨 */}
    </div>
  );
}

export default MyPage;
