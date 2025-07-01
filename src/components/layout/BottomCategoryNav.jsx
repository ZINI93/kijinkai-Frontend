// src/components/layout/BottomCategoryNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./BottomCategoryNav.css";

function BottomCategoryNav() {
  return (
    <nav className="bottom-category-nav">
      <ul>
        <li>
          <Link to="/self-purchase">공지사항</Link>
        </li>
        <li>
          <Link to="/shipping-agent">이벤트</Link>
        </li>
        <li>
          <Link to="/buy-method">구매방법</Link>
        </li>
        <li>
          <Link to="/buy-agent">주문하기</Link>
        </li>
      </ul>
      <div className="mypage-shortcut">
        <Link to="/mypage">● 마이페이지</Link>
      </div>
    </nav>
  );
}
export default BottomCategoryNav;
