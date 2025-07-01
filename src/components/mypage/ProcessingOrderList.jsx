// src/components/mypage/ProcessingOrderList.jsx
import React, { useState } from "react"; // useEffect 제거
import Button from "../common/Button";
// import axios from 'axios'; // axios 제거 (더미 데이터 사용으로 인해)
import "./ProcessingOrderList.css";

// 더미 데이터 (실제는 API에서 받아와야 하며, 주문하기 페이지에서 넘어온 데이터여야 함)
const dummyProcessingOrders = [
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
];

function ProcessingOrderList() {
  // orders 상태의 초기값을 더미 데이터로 직접 설정
  const [orders, setOrders] = useState(dummyProcessingOrders);

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
  //         setOrders(dummyProcessingOrders);
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

  // 주문 항목 삭제
  const handleDeleteItem = (idToDelete) => {
    if (
      window.confirm("정말로 이 주문을 삭제하시겠습니까? (삭제 후 복구 불가)")
    ) {
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== idToDelete)
      );
      alert("주문이 삭제되었습니다.");
    }
  };

  return (
    <div className="processing-order-list">
      <h4>입찰 및 구매리스트</h4>
      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th>신청일</th>
              <th>상품 URL</th>
              <th>가격</th>
              <th>수량</th>
              <th>메모</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {/* loading 상태 검사 제거 */}
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-orders-message">
                  진행 중이거나 구매 요청된 상품이 없습니다.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.requestDate}</td>
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
                  <td>
                    <Button
                      type="button"
                      className="delete-item-button"
                      onClick={() => handleDeleteItem(order.id)}
                    >
                      삭제
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProcessingOrderList;
