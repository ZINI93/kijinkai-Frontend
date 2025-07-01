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

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage/*" element={<MyPage />} />
          {/* 주문하기 페이지 라우트 추가 */}
          <Route path="/buy-agent" element={<OrderPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
