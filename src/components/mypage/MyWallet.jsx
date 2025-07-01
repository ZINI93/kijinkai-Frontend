// src/components/mypage/MyWallet.jsx (수정)
import React, { useState } from "react";
import TitleBar from "../common/TitleBar";
import DepositForm from "./DepositForm";
import WithdrawForm from "./WithdrawForm";
import { useAuth } from "../../context/AuthContext"; // useAuth 임포트
import "./MyWallet.css";

function MyWallet() {
  const { currentBalance, updateBalance } = useAuth(); // AuthContext에서 잔액과 업데이트 함수 가져옴

  const [depositAmount, setDepositAmount] = useState("");
  const [depositMethod, setDepositMethod] = useState("");
  const [depositAccount, setDepositAccount] = useState("");

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawBank, setWithdrawBank] = useState("");
  const [withdrawAccountNum, setWithdrawAccountNum] = useState("");
  const [withdrawAccountHolder, setWithdrawAccountHolder] = useState("");

  // 금액 버튼 클릭 핸들러 (동일)
  const handleAmountClick = (amount, type) => {
    if (type === "deposit") {
      setDepositAmount((prev) => String(parseInt(prev || 0) + amount));
    } else if (type === "withdraw") {
      setWithdrawAmount((prev) => String(parseInt(prev || 0) + amount));
    }
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    console.log("입금 신청:", { depositAmount, depositMethod, depositAccount });
    alert(`입금 신청 금액: ${depositAmount}원 (개발용)`);
    // 성공 시 백엔드에서 잔액을 업데이트하고 updateBalance(newBalance) 호출
    // 예: updateBalance(currentBalance + parseInt(depositAmount || 0));
    setDepositAmount("");
    setDepositMethod("");
    setDepositAccount("");
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    if (parseInt(withdrawAmount || 0) > currentBalance) {
      alert("잔액이 부족합니다.");
      return;
    }
    const withdrawFeeThreshold = 30000;
    let finalWithdrawAmount = parseInt(withdrawAmount || 0);
    if (finalWithdrawAmount < withdrawFeeThreshold) {
      alert(
        `30,000엔 미만 출금 시 수수료가 부과됩니다. (현재 ${finalWithdrawAmount.toLocaleString()}엔)`
      );
    }
    console.log("출금 신청:", {
      withdrawAmount,
      withdrawBank,
      withdrawAccountNum,
      withdrawAccountHolder,
    });
    alert(`출금 신청 금액: ${finalWithdrawAmount.toLocaleString()}원 (개발용)`);
    // 성공 시 백엔드에서 잔액을 업데이트하고 updateBalance(newBalance) 호출
    // 예: updateBalance(currentBalance - finalWithdrawAmount);
    setWithdrawAmount("");
    setWithdrawBank("");
    setWithdrawAccountNum("");
    setWithdrawAccountHolder("");
  };

  const [activeTab, setActiveTab] = useState("deposit"); // 'deposit' 또는 'withdraw'

  return (
    <div className="my-wallet-section">
      <TitleBar
        title="내 통장 입금/환불"
        description="재팬비드 내 통장 입금 관리"
      />

      <div className="wallet-content-wrapper">
        <div className="wallet-main-area">
          {/* 재팬비드 내 통장 현황 (잔액 표시) */}
          <div className="wallet-info-box">
            <h4>재팬비드 내 통장 현황</h4>
            {/* ... (기존 p 태그들) ... */}
            <p className="highlight-text">
              * 출금대행은 내통장잔액이 30,000엔 이상이여야 가능합니다.
              (30,000엔 미만인 경우 출금수수료가 부과됩니다.)
            </p>
            <div className="current-balance-display">
              내 통장 잔액:{" "}
              <strong>{currentBalance.toLocaleString()} 원</strong>
            </div>
            <div className="account-info">
              <span>입금 계좌 :</span>
              <strong>KB국민은행 123-456789-01-234 (예금주: 재팬비드)</strong>
            </div>
            {/* ... (은행 버튼들) ... */}
          </div>

          {/* 탭 메뉴 */}
          <div className="wallet-tabs">
            <button
              className={`tab-button ${
                activeTab === "deposit" ? "active" : ""
              }`}
              onClick={() => setActiveTab("deposit")}
            >
              입금 신청
            </button>
            <button
              className={`tab-button ${
                activeTab === "withdraw" ? "active" : ""
              }`}
              onClick={() => setActiveTab("withdraw")}
            >
              출금 신청
            </button>
          </div>

          {activeTab === "deposit" ? (
            <DepositForm
              currentBalance={currentBalance}
              handleAmountClick={handleAmountClick}
              handleDepositSubmit={handleDepositSubmit}
              depositAmount={depositAmount}
              setDepositAmount={setDepositAmount}
              depositMethod={depositMethod}
              setDepositMethod={setDepositMethod}
              depositAccount={depositAccount}
              setDepositAccount={setDepositAccount}
            />
          ) : (
            <WithdrawForm
              currentBalance={currentBalance}
              handleAmountClick={handleAmountClick}
              handleWithdrawSubmit={handleWithdrawSubmit}
              withdrawAmount={withdrawAmount}
              setWithdrawAmount={setWithdrawAmount}
              withdrawBank={withdrawBank}
              setWithdrawBank={setWithdrawBank}
              withdrawAccountNum={withdrawAccountNum}
              setWithdrawAccountNum={setWithdrawAccountNum}
              withdrawAccountHolder={withdrawAccountHolder}
              setWithdrawAccountHolder={setWithdrawAccountHolder}
            />
          )}

          {/* 입금 규정 및 유의사항 */}
          <section className="wallet-regulations">
            <h4>입금 규정 및 유의사항</h4>
            <ul>
              <li>환율은 입금신청 시점의 고시환율이 적용됩니다.</li>
              <li>
                신용카드 결제 시 즉시 충전되며, 은행 계좌 이체는 영업일 기준
                1시간 이내에 처리됩니다.
              </li>
              <li>
                본인 확인을 위하여 본인 명의의 계좌로만 입금 신청이 가능합니다.
              </li>
              <li>
                오입금 시 취소 및 환불 절차가 복잡하오니 정확히 확인 후 입금해
                주시기 바랍니다.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyWallet;
