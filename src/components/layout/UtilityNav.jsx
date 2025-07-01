// src/components/layout/UtilityNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // useAuth 훅 임포트
import "./UtilityNav.css";

function UtilityNav() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="utility-nav">
      <ul>
        {isLoggedIn ? (
          // 로그인 후 메뉴
          <>
            <li>
              <Link to="#" onClick={logout}>
                로그아웃
              </Link>
            </li>
            <li>
              <Link to="/mypage/profile">정보수정</Link>
            </li>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
            <li>
              <Link to="/customer-service">고객센터</Link>
            </li>
          </>
        ) : (
          // 로그인 전 메뉴
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/register">회원가입</Link>
            </li>
            <li>
              <Link to="/customer-service">고객센터</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default UtilityNav;
