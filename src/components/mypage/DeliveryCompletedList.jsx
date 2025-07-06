// src/components/mypage/DeliveryCompletedList.jsx
import React, { useState } from "react";
import "./DeliveryCompletedList.css";

const dummyDeliveryCompleted = [
  {
    id: 1,
    orderNo: "ORD20250620-001",
    trackingNo: "JP1111222233KR",
    url: "https://item.rakuten.co.jp/shop/item_C",
    status: "배송 완료",
    deliveryDate: "2025-06-30",
  },
  {
    id: 2,
    orderNo: "ORD20250622-002",
    trackingNo: "JP4444555566KR",
    url: "https://jp.mercari.com/item/item_D",
    status: "배송 완료",
    deliveryDate: "2025-07-01",
  },
];

function DeliveryCompletedList() {
  const [orders, setOrders] = useState(dummyDeliveryCompleted);

  return (
    <div className="delivery-completed-list">
      <h4>배송 완료된 상품 리스트</h4>
      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th>주문번호</th>
              <th>배송추적번호</th>
              <th>배송상태</th>
              <th>배송완료일</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-orders-message">
                  배송 완료된 상품이 없습니다.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.orderNo}</td>
                  <td>{order.trackingNo}</td>

                  <td>{order.status}</td>
                  <td>{order.deliveryDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliveryCompletedList;
