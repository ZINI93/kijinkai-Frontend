// src/components/mypage/SecondCompletedOrderList.jsx
import React, { useState } from "react";
import "./SecondCompletedOrderList.css";

const dummySecondCompletedOrders = [
  {
    id: 301,
    orderDate: "2025-06-28",
    url: "https://item.rakuten.co.jp/shop/item_C_completed_2nd",
    price: "40000", // 최종 결제된 금액
    quantity: 1,
    memo: "상품 C (2차 결제 완료)",
    status: "2차 결제완료",
  },
  {
    id: 302,
    orderDate: "2025-06-29",
    url: "https://jp.mercari.com/item/item_D_completed_2nd",
    price: "25000",
    quantity: 1,
    memo: "상품 D (2차 결제 완료)",
    status: "2차 결제완료",
  },
];

function SecondCompletedOrderList() {
  const [orders, setOrders] = useState(dummySecondCompletedOrders);

  return (
    <div className="second-completed-order-list">
      <h4>2차 결제 완료 상품 리스트</h4>
      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th>결제일</th>
              <th>상품 URL</th>
              <th>최종 결제금액</th>
              <th>수량</th>
              <th>메모</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-orders-message">
                  2차 결제 완료된 상품이 없습니다.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.orderDate}</td>
                  <td className="item-url-col">
                    <a
                      href={order.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-url-link"
                    >
                      {order.url.length > 50
                        ? order.url.substring(0, 50) + "..."
                        : order.url}
                    </a>
                  </td>
                  <td className="item-price-col">
                    {parseInt(order.price).toLocaleString()} 원(엔)
                  </td>
                  <td className="item-quantity-col">{order.quantity}</td>
                  <td className="item-memo-col">{order.memo || "-"}</td>
                  <td>{order.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SecondCompletedOrderList;
