// src/components/mypage/TransactionHistory.jsx
import React, { useState, useEffect, useMemo } from "react"; // useMemo 훅 추가
import TitleBar from "../common/TitleBar";
import Button from "../common/Button";
import axios from "axios";
import "./TransactionHistory.css";

// 더미 데이터 (실제 API에서 받아와야 합니다)
const dummyTransactions = [
  {
    id: 1,
    date: "2025-06-25",
    type: "입금",
    description: "가상계좌 입금",
    amount: 100000,
    balance: 100000,
    note: "",
  },
  {
    id: 2,
    date: "2025-06-26",
    type: "구매",
    description: "야후옥션 - 상품 A",
    amount: -25000,
    balance: 75000,
    note: "낙찰완료",
  },
  {
    id: 3,
    date: "2025-06-27",
    type: "출금",
    description: "환불 신청",
    amount: -20000,
    balance: 55000,
    note: "은행 이체",
  },
  {
    id: 4,
    date: "2025-06-28",
    type: "입금",
    description: "추가 입금",
    amount: 50000,
    balance: 105000,
    note: "",
  },
  {
    id: 5,
    date: "2025-06-29",
    type: "구매",
    description: "메루카리 - 상품 B",
    amount: -30000,
    balance: 75000,
    note: "주문완료",
  },
  {
    id: 6,
    date: "2025-06-30",
    type: "입금",
    description: "카드 충전",
    amount: 80000,
    balance: 155000,
    note: "",
  },
  {
    id: 7,
    date: "2025-07-01",
    type: "출금",
    description: "서비스 이용료",
    amount: -5000,
    balance: 150000,
    note: "수수료",
  },
];

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all"); // 활성화된 필터 상태: 'all', '입금', '출금', '구매'

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        // 실제 API 호출 (예시)
        // const API_URL = 'http://localhost:8080/api/user/transactions';
        // const token = localStorage.getItem('userToken');
        // const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
        // setTransactions(response.data);

        // 더미 데이터를 비동기적으로 설정
        setTimeout(() => {
          setTransactions(dummyTransactions);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error(
          "거래 내역 조회 실패:",
          err.response ? err.response.data : err.message
        );
        setError("거래 내역을 불러오는데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  // activeFilter 또는 transactions가 변경될 때마다 필터링된 목록을 계산
  const filteredTransactions = useMemo(() => {
    if (activeFilter === "all") {
      return transactions;
    } else {
      return transactions.filter((tx) => tx.type === activeFilter);
    }
  }, [transactions, activeFilter]); // transactions 또는 activeFilter가 변경될 때만 재계산

  return (
    <div className="transaction-history-section">
      <TitleBar
        title="내 지갑 내역"
        description="회원님의 모든 거래 내역을 확인하실 수 있습니다."
      />

      <div className="section-body">
        <div className="filter-options">
          {/* 각 버튼 클릭 시 activeFilter 상태 변경 */}
          <Button
            type="button"
            className={`filter-button ${
              activeFilter === "all" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("all")}
          >
            전체
          </Button>
          <Button
            type="button"
            className={`filter-button ${
              activeFilter === "입금" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("입금")}
          >
            입금
          </Button>
          <Button
            type="button"
            className={`filter-button ${
              activeFilter === "구매" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("구매")}
          >
            구매
          </Button>
          <Button
            type="button"
            className={`filter-button ${
              activeFilter === "출금" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("출금")}
          >
            출금
          </Button>
        </div>

        {loading ? (
          <p className="loading-message">거래 내역을 불러오는 중...</p>
        ) : error ? (
          <p className="error-message-display">{error}</p>
        ) : filteredTransactions.length === 0 ? ( // 필터링된 목록이 비었을 때 메시지
          <p className="no-transactions-message">
            선택된 필터에 해당하는 거래 내역이 없습니다.
          </p>
        ) : (
          <div className="transaction-table-wrapper">
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>구분</th>
                  <th>내용</th>
                  <th>금액</th>
                  <th>잔액</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {/* 필터링된 목록 사용 */}
                {filteredTransactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className={
                      tx.type === "입금"
                        ? "deposit"
                        : tx.type === "출금"
                        ? "withdraw"
                        : "purchase"
                    }
                  >
                    <td>{tx.date}</td>
                    <td>{tx.type}</td>
                    <td>{tx.description}</td>
                    <td className="amount">{tx.amount.toLocaleString()}</td>
                    <td className="balance">{tx.balance.toLocaleString()}</td>
                    <td>{tx.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="pagination">{/* 페이지네이션 (추후 구현) */}</div>
      </div>
    </div>
  );
}

export default TransactionHistory;
