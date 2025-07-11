// src/components/mypage/MyPageContent.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyWallet from "./MyWallet";
import ProfileEdit from "./ProfileEdit";
import TransactionHistory from "./TransactionHistory";
import MyApprovedOrdersPage from "../../pages/MyApprovedOrdersPage";
import MyProcessingOrdersPage from "../../pages/MyProcessingOrdersPage";
import MyFirstCompletedOrdersPage from "../../pages/MyFirstCompletedOrdersPage";
import MyOrdersPage from "../../pages/MyOrdersPage";
import TitleBar from "../common/TitleBar";
import { useAuth } from "../../context/AuthContext";
import "./MyPageContent.css";

function MyPageContent() {
  const { currentBalance } = useAuth();

  const [proxyStatusCounts, setProxyStatusCounts] = useState({
    구매대행내역: 15,
    진행중구매요청: 3,
    구매승인: 2,
    차결제요청: 1,
    차결제완료: 10,
    차결제요청2: 0,
    차결제완료2: 0,
    배송확인: 5,
  });

  const [deliveryStatusCounts, setDeliveryStatusCounts] = useState({
    현지배송중: 2,
    현지배송완료: 8,
    국제배송준비: 3,
    국제배송중: 1,
    국제배송완료: 5,
  });

  return (
    <div className="mypage-content">
      <div className="mypage-main-area">
        <Routes>
          {/* 기본 마이페이지 (대행신청 현황) */}
          <Route
            path="/"
            element={
              <section className="mypage-section">
                <TitleBar title="대행신청 현황" />
                <div className="section-body">
                  <div className="mypage-balance-display">
                    현재 월렛 잔액:{" "}
                    <strong>{currentBalance.toLocaleString()} 원</strong>
                  </div>

                  <div className="status-grid">
                    <Link to="/mypage/orders" className="status-item clickable">
                      <span className="status-label">구매대행내역</span>
                      <span className="status-value">
                        {proxyStatusCounts.구매대행내역} <small>건</small>
                      </span>
                    </Link>
                    <Link
                      to="/mypage/orders?status=processing"
                      className="status-item clickable"
                    >
                      <span className="status-label">진행중/구매요청</span>
                      <span className="status-value">
                        {proxyStatusCounts.진행중구매요청} <small>건</small>
                      </span>
                    </Link>
                    <Link
                      to="/mypage/orders?status=approved"
                      className="status-item clickable"
                    >
                      <span className="status-label">구매승인</span>
                      <span className="status-value">
                        {proxyStatusCounts.구매승인} <small>건</small>
                      </span>
                    </Link>
                    <Link
                      to="/mypage/orders?status=first_completed"
                      className="status-item clickable"
                    >
                      <span className="status-label">1차 결제완료</span>
                      <span className="status-value">
                        {proxyStatusCounts.차결제완료} <small>건</small>
                      </span>
                    </Link>
                    {/* 2차 결제요청 링크 경로 수정 */}
                    <Link
                      to="/mypage/orders?status=second_request"
                      className="status-item clickable"
                    >
                      <span className="status-label">2차 결제요청</span>
                      <span className="status-value">
                        {proxyStatusCounts.차결제요청2} <small>건</small>
                      </span>
                    </Link>
                    {/* 2차 결제완료 링크 경로 수정 */}
                    <Link
                      to="/mypage/orders?status=second_completed"
                      className="status-item clickable"
                    >
                      <span className="status-label">2차 결제완료</span>
                      <span className="status-value">
                        {proxyStatusCounts.차결제완료2} <small>건</small>
                      </span>
                    </Link>
                    {/* 국제배송 링크 수정 */}
                    <Link
                      to="/mypage/orders?status=international_shipping"
                      className="status-item clickable"
                    >
                      <span className="status-label">국제배송</span>
                      <span className="status-value">
                        {deliveryStatusCounts.국제배송중} <small>건</small>
                      </span>
                    </Link>
                    {/* 배송완료 링크 수정 */}
                    <Link
                      to="/mypage/orders?status=delivery_completed"
                      className="status-item clickable"
                    >
                      <span className="status-label">배송완료</span>
                      <span className="status-value">
                        {deliveryStatusCounts.국제배송완료} <small>건</small>
                      </span>
                    </Link>
                  </div>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>현지 배송중</th>
                        <th>현지 배송완료</th>
                        <th>국제 배송준비</th>
                        <th>국제 배송중</th>
                        <th>국제 배송완료</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>배송준비</td>
                        <td>{deliveryStatusCounts.현지배송중}</td>
                        <td>{deliveryStatusCounts.현지배송완료}</td>
                        <td>{deliveryStatusCounts.국제배송준비}</td>
                        <td>{deliveryStatusCounts.국제배송중}</td>
                        <td>{deliveryStatusCounts.국제배송완료}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            }
          />

          <Route path="/payment" element={<MyWallet />} />
          <Route path="/membership-level" element={<ProfileEdit />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />

          {/* MyOrdersPage 라우트 (모든 status 쿼리 파라미터 처리) */}
          <Route path="/orders" element={<MyOrdersPage />} />

          <Route
            path="/shipping-request"
            element={
              <section className="mypage-section">
                <TitleBar title="배송 신청" />
              </section>
            }
          />
          <Route
            path="/wishlist"
            element={
              <section className="mypage-section">
                <TitleBar title="관심상품 목록" />
              </section>
            }
          />
          <Route
            path="/coupons"
            element={
              <section className="mypage-section">
                <TitleBar title="쿠폰 내역" />
              </section>
            }
          />
        </Routes>
      </div>

      <div className="side-banner-group">
        <img
          src="https://via.placeholder.com/150x120?text=Event+A"
          alt="이벤트 배너 A"
        />
        <img
          src="https://via.placeholder.com/150x120?text=Event+B"
          alt="이벤트 배너 B"
          style={{ marginTop: "10px" }}
        />
        <img
          src="https://via.placeholder.com/150x120?text=Event+C"
          alt="이벤트 배너 C"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
}

export default MyPageContent;
