// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import MyPage from "./pages/MyPage"; // MyPage 컴포넌트 임포트
import OrderPage from "./pages/OrderPage"; // OrderPage 컴포넌트 임포트
import AdminPanel from "./pages/AdminPanel"; //

import "./App.css";

function App() {
  const location = useLocation();
  const isAdminPanel = location.pathname.includes('/AdminPanel');


  const hideHeaderAndFooterPaths = ["/login", "/register", "/AdminPanel"];
  const shouldHideHeaderAndFooter = hideHeaderAndFooterPaths.includes(
    location.pathname
  );

  return (
    <div className="App">
      {/* <Header /> */}
      {!shouldHideHeaderAndFooter && <Header />}

      <main className={isAdminPanel ? 'admin-layout' : ''}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage/*" element={<MyPage />} />
          {/* 주문하기 페이지 라우트 추가 */}
          <Route path="/buy-agent" element={<OrderPage />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
      </main>

      {/* <Footer /> */}
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;