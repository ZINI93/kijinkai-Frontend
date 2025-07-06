// src/components/mypage/InternationalShippingList.jsx
import React, { useState } from "react";
import "./InternationalShippingList.css";

const dummyInternationalShipping = [
  {
    id: 1,
    orderNo: "ORD20250701-001",
    trackingNo: "JP1234567890KR",
    url: "https://item.rakuten.co.jp/shop/item_A",
    status: "세관 통관 중",
    lastUpdate: "2025-07-01",
  },
  {
    id: 2,
    orderNo: "ORD20250701-002",
    trackingNo: "JP9876543210KR",
    url: "https://jp.mercari.com/item/item_B",
    status: "항공편 대기",
    lastUpdate: "2025-06-29",
  },
];

function InternationalShippingList() {
  const [orders, setOrders] = useState(dummyInternationalShipping);

  return (
    <div className="international-shipping-list">
      <h4>국제 배송 중인 상품 리스트</h4>
      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th>주문번호</th>
              <th>배송추적번호</th>
              <th>배송상태</th>
              <th>최근 업데이트</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-orders-message">
                  국제 배송 중인 상품이 없습니다.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.orderNo}</td>
                  <td>{order.trackingNo}</td>
                  <td>{order.status}</td>
                  <td>{order.lastUpdate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InternationalShippingList;
