// src/components/mypage/SecondRequestList.jsx
import React, { useState, useEffect } from "react";
import Button from "../common/Button.jsx";
import axios from "axios";
import "./SecondRequestList.css";

// 더미 데이터 (실제는 API에서 '관리자가 제출한 2차 결제요청 목록'을 받아와야 합니다)
// 각 상품별 국제 배송비 및 총 2차 결제금액은 더미 데이터에서 제외하거나 0으로 설정
const dummySecondRequests = [
  {
    id: 201,
    requestDate: "2025-06-25",
    productName: "나이키 에어포스 1",
    productUrl: "https://item.rakuten.co.jp/shop/item_A_completed_1st",
    itemPrice: "30000", // 1차 결제된 상품 가격
    quantity: 1,
    memo: "색상: 블랙, 사이즈: M",
    status: "국제배송 준비중",
  },
  {
    id: 202,
    requestDate: "2025-06-26",
    productName: "애플 에어팟 프로 2세대",
    productUrl: "https://jp.mercari.com/item/item_B_completed_1st",
    itemPrice: "50000",
    quantity: 2,
    memo: "선물 포장 요청",
    status: "국제배송 준비중",
  },
  {
    id: 203,
    requestDate: "2025-06-27",
    productName: "일본 한정판 스낵",
    productUrl: "https://www.amazon.co.jp/snacks/item_C",
    itemPrice: "500",
    quantity: 5,
    memo: "유통기한 긴 것으로",
    status: "국제배송 준비중",
  },
];

function SecondRequestList() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 관리자가 책정한 총 국제 배송비 (실제는 API에서 받아와야 함)
  const [totalInternationalShippingFee, setTotalInternationalShippingFee] =
    useState(0);

  // 컴포넌트 마운트 시 데이터 로딩 (실제 API 호출)
  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      setError(null);
      try {
        // 백엔드 API 엔드포인트 예시: /api/orders/final-payment-requests
        // 이 API는 1차 결제 완료 후 관리자가 배송비 책정 완료한 목록과 최종 금액들을 가져와야 합니다.
        // const API_URL = 'http://localhost:8080/api/orders/final-payment-requests';
        // const token = localStorage.getItem('userToken');
        // const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
        // setRequests(response.data.items);
        // setTotalInternationalShippingFee(response.data.totalShippingFee);
        // setFinalSecondPaymentAmount(response.data.finalAmount);

        // 더미 데이터를 비동기적으로 설정
        setTimeout(() => {
          setRequests(dummySecondRequests);
          setTotalInternationalShippingFee(35000); // 더미 총 국제 배송비
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error(
          "2차 결제요청 목록 조회 실패:",
          err.response ? err.response.data : err.message
        );
        setError("2차 결제요청 목록을 불러오는데 실패했습니다.");
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handlePayment = () => {
    if (requests.length === 0 || totalInternationalShippingFee === 0) {
      alert("결제할 항목이 없거나 금액이 0원입니다.");
      return;
    }
    // 실제 결제 API 호출 로직: 모든 requests의 ID (또는 단일 주문 ID)와 최종 금액을 보내 결제 요청
    alert(
      `총 ${
        requests.length
      }건의 상품에 대해 ${totalInternationalShippingFee.toLocaleString()}원(엔)으로 2차 결제를 진행합니다.`
    );
    // 결제 성공 시 결제 완료 페이지로 이동 또는 상태 업데이트
  };

  return (
    <div className="second-request-list">
      <h4>2차 결제요청 리스트</h4>
      <div className="list-controls">
        {/* '전체 선택' 체크박스 및 기타 컨트롤 제거 */}
      </div>

      <div className="order-table-wrapper">
        {loading ? (
          <p className="loading-message">2차 결제요청 목록을 불러오는 중...</p>
        ) : error ? (
          <p className="error-message-display">{error}</p>
        ) : requests.length === 0 ? (
          <p className="no-requests-message">
            2차 결제요청 대상 상품이 없습니다.
          </p>
        ) : (
          <table className="order-list-table">
            <thead>
              <tr>
                <th>요청일</th>
                <th>상품명</th> {/* 상품 정보 컬럼 통합 */}
                <th>1차 결제금액 (상품)</th>
                <th>수량</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.requestDate}</td>
                  <td className="item-info-col">
                    <div className="product-details">
                      <a
                        href={req.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-url-link"
                      >
                        {req.productName ||
                          (req.productUrl.length > 50
                            ? req.productUrl.substring(0, 50) + "..."
                            : req.productUrl)}
                      </a>
                      <p className="quantity-memo">메모: {req.memo || "-"}</p>
                    </div>
                  </td>
                  <td className="item-price-col">
                    {parseInt(req.itemPrice).toLocaleString()} 원(엔)
                  </td>
                  <td className="item-quantity-col">{req.quantity}</td>
                  <td>{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {requests.length > 0 && ( // 항목이 있을 때만 총 합계와 결제 버튼 표시
        <div className="total-payment-summary-final">
          {" "}
          <div className="summary-row">
            <span>국제 배송비: </span>
            <strong>
              {totalInternationalShippingFee.toLocaleString()} 원(엔)
            </strong>
          </div>
          <div className="summary-row final-amount">
            <span>최종 2차 결제 금액: </span>
            <strong>
              {totalInternationalShippingFee.toLocaleString()} 원(엔)
            </strong>
          </div>
          <Button
            type="button"
            className="payment-button-final"
            onClick={handlePayment}
          >
            2차 결제 진행
          </Button>
        </div>
      )}
    </div>
  );
}

export default SecondRequestList;
