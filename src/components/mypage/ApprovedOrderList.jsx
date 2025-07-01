// src/components/mypage/ApprovedOrderList.jsx
import React, { useState } from "react";
import Button from "../common/Button";
import "./ApprovedOrderList.css";

// 간소화된 더미 데이터 (실제 API에서 받아와야 합니다)
const dummyApprovedOrders = [
  {
    id: 1,
    url: "https://item.rakuten.co.jp/shop/item_123",
    price: "25000", // 숫자 문자열
    quantity: 1,
    memo: "색상: 블랙, 사이즈: M",
  },
  {
    id: 2,
    url: "https://store.yahoo.co.jp/shop/item_456",
    price: "10000",
    quantity: 2,
    memo: "선물 포장 요청",
  },
  {
    id: 3,
    url: "https://jp.mercari.com/item/789",
    price: "5000",
    quantity: 1,
    memo: "손상되지 않게 포장 부탁드립니다.",
  },
];

function ApprovedOrderList() {
  const [orders, setOrders] = useState(dummyApprovedOrders);
  const [selectedOrders, setSelectedOrders] = useState([]); // 선택된 주문 항목 ID

  // 모든 주문 선택/해제
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(orders.map((order) => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  // 개별 주문 선택/해제
  const handleSelectItem = (id) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // 선택된 주문들의 총 합계 계산
  const calculateSelectedTotal = () => {
    return selectedOrders.reduce((sum, id) => {
      const order = orders.find((o) => o.id === id);
      if (order) {
        const priceValue = parseInt(order.price.replace(/,/g, "") || 0);
        const quantityValue = parseInt(order.quantity || 1);
        return sum + priceValue * quantityValue;
      }
      return sum;
    }, 0);
  };

  const handlePayment = () => {
    if (selectedOrders.length === 0) {
      alert("결제할 상품을 선택해주세요.");
      return;
    }
    const total = calculateSelectedTotal();
    alert(
      `선택된 ${
        selectedOrders.length
      }건의 상품을 총 ${total.toLocaleString()}원(엔)으로 결제합니다.`
    );
    // 실제 결제 API 호출 로직 추가
    // 백엔드에는 selectedOrders의 id들을 보내서 결제 처리 요청
  };

  return (
    <div className="approved-order-list">
      <h4>낙찰 및 구매리스트</h4>
      <div className="list-controls">
        <label className="select-all-label">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={
              orders.length > 0 && selectedOrders.length === orders.length
            }
          />
          전체 선택
        </label>
        {/* 다른 필터링/정렬 옵션은 제외 */}
      </div>

      <div className="order-table-wrapper">
        <table className="order-list-table">
          <thead>
            <tr>
              <th className="select-col">선택</th> {/* 선택 체크박스 컬럼 */}
              <th>상품 URL</th>
              <th>가격</th>
              <th>수량</th>
              <th>메모</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-orders-message">
                  낙찰/구매 승인된 상품이 없습니다.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="select-col">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectItem(order.id)}
                    />
                  </td>
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
                  <td className="item-memo-col">{order.memo || "-"}</td>{" "}
                  {/* 메모가 없으면 '-' 표시 */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="total-payment-summary">
        <span>선택 상품 합계 금액: </span>
        <strong>{calculateSelectedTotal().toLocaleString()} 원(엔)</strong>
        <Button
          type="button"
          className="payment-button"
          onClick={handlePayment}
        >
          결제하기
        </Button>
      </div>
    </div>
  );
}

export default ApprovedOrderList;
