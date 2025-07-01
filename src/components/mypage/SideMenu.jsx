// src/components/mypage/SideMenu.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <nav className="mypage-side-menu">
      <div className="menu-header">
        <h2>마이페이지</h2>
        <p className="welcome-message">환영합니다.</p>
      </div>
      <ul>
        <li>
          <NavLink to="/mypage" end>
            대행신청 현황
          </NavLink>
        </li>
        <li>
          <NavLink to="/mypage/payment">내 통장 입금/환불</NavLink>
        </li>
        <li>
          <NavLink to="/mypage/transaction-history">거래내역 확인</NavLink>
        </li>
        <li>
          <NavLink to="/mypage/membership-level">회원정보 수정</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
