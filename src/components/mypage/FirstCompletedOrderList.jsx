// src/components/mypage/FirstCompletedOrderList.jsx
import React, { useState } from "react"; // useEffect 제거
// import Button from '../common/Button'; // Button 사용하지 않으므로 제거
// import axios from 'axios'; // axios 사용하지 않으므로 제거
import "./FirstCompletedOrderList.css";

// 더미 데이터 (실제는 API에서 받아와야 합니다)
const dummyFirstCompletedOrders = [
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
];

function FirstCompletedOrderList() {
  // orders 상태의 초기값을 더미 데이터로 직접 설정
  const [orders, setOrders] = useState(dummyFirstCompletedOrders);

  // loading, error 상태는 더미 데이터 사용 시 필요 없으므로 제거
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect 제거 (더미 데이터 즉시 로드를 위해)
  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       setTimeout(() => {
  //         setOrders(dummyFirstCompletedOrders);
  //         setLoading(false);
  //       }, 500);
  //     } catch (err) {
  //       console.error('주문 내역 조회 실패:', err.response ? err.response.data : err.message);
  //       setError('주문 내역을 불러오는데 실패했습니다.');
  //       setLoading(false);
  //     }
  //   };
  //   fetchOrders();
  // }, []);

  return (
    <div className="first-completed-order-list">
      <h4>1차 결제 완료 상품 리스트</h4>
      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th>결제일</th>
              <th>상품 URL</th>
              <th>가격</th>
              <th>수량</th>
              <th>메모</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {/* loading 상태 검사 제거 */}
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-orders-message">
                  1차 결제 완료된 상품이 없습니다.
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

export default FirstCompletedOrderList;
