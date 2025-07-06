// src/components/mypage/AllOrdersList.jsx
import React, { useState } from "react";
import "./AllOrdersList.css";

// 더미 데이터 (실제는 API에서 받아와야 합니다)
// 여기서는 다양한 상태의 더미 데이터를 포함합니다.
const dummyAllOrders = [
  {
    id: 1,
    requestDate: "2025-07-01",
    url: "https://item.rakuten.co.jp/shop/example1",
    price: "15000",
    quantity: 1,
    memo: "색상: 레드",
    status: "구매요청",
  },
  {
    id: 2,
    requestDate: "2025-07-01",
    url: "https://jp.mercari.com/item/example2",
    price: "5000",
    quantity: 2,
    memo: "사이즈: L",
    status: "진행중",
  },
  {
    id: 3,
    requestDate: "2025-06-30",
    url: "https://buy.yahoo.co.jp/example3",
    price: "25000",
    quantity: 1,
    memo: "추가 포장 요청",
    status: "구매요청",
  },
  {
    id: 101,
    orderDate: "2025-06-20",
    url: "https://item.rakuten.co.jp/shop/completed_item_1",
    price: "30000",
    quantity: 1,
    memo: "1차 결제 완료 상품 A",
    status: "1차 결제완료",
  },
  {
    id: 102,
    orderDate: "2025-06-22",
    url: "https://jp.mercari.com/item/completed_item_2",
    price: "12000",
    quantity: 2,
    memo: "1차 결제 완료 상품 B",
    status: "1차 결제완료",
  },
  {
    id: 201,
    orderDate: "2025-06-15",
    url: "https://auction.yahoo.co.jp/item/approved_item_1",
    price: "25200",
    quantity: 1,
    memo: "구매 승인 상품 C",
    status: "구매승인",
  },
  {
    id: 202,
    orderDate: "2025-06-18",
    url: "https://mercari.com/approved_item_2",
    price: "10100",
    quantity: 1,
    memo: "구매 승인 상품 D",
    status: "구매승인",
  },
];

function AllOrdersList() {
  const [orders, setOrders] = useState(dummyAllOrders);

  // 이 페이지는 삭제나 결제 기능 없이 단순 리스트만 보여줍니다.

  return (
    <div className="all-orders-list">
      <h4>모든 주문 상품 리스트</h4>
      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th>신청일/결제일</th>
              <th>상품 URL</th>
              <th>가격</th>
              <th>수량</th>
              <th>메모</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-orders-message">
                  주문 내역이 없습니다.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.requestDate || order.orderDate}</td>{" "}
                  {/* 신청일 또는 결제일 */}
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
                  <td className="item-status-col">{order.status}</td>{" "}
                  {/* 상태 컬럼 추가 */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllOrdersList;
