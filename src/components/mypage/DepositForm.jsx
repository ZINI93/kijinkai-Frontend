// src/components/mypage/DepositForm.jsx
import React from "react";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import "./DepositForm.css"; // DepositForm 스타일 (MyWallet.css에서 분리)

function DepositForm({
  currentBalance,
  handleAmountClick,
  handleDepositSubmit,
  depositAmount,
  setDepositAmount,
  depositMethod,
  setDepositMethod,
  depositAccount,
  setDepositAccount,
}) {
  const amountButtons = [10000, 50000, 100000, 200000, 500000, 1000000];

  return (
    <section className="wallet-deposit-form">
      <h4>입금금액 입력</h4>
      <form onSubmit={handleDepositSubmit}>
        <FormInput
          label="입금금액"
          id="depositAmount"
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          required
          placeholder="입금하실 금액을 입력하세요."
        />
        <div className="amount-buttons">
          {amountButtons.map((amount) => (
            <Button
              key={`deposit-${amount}`}
              type="button"
              className="amount-quick-button"
              onClick={() => handleAmountClick(amount, "deposit")}
            >
              {amount.toLocaleString()}원
            </Button>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="depositAccount">입금할 계좌:</label>
          <select
            id="depositAccount"
            value={depositAccount}
            onChange={(e) => setDepositAccount(e.target.value)}
            className="custom-select"
            required
          >
            <option value="">-- 계좌 선택 --</option>
            <option value="kb">KB국민은행 123-456789-01-234</option>
            <option value="woori">우리은행 987-654321-01-234</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="depositMethod">입금 방법:</label>
          <select
            id="depositMethod"
            value={depositMethod}
            onChange={(e) => setDepositMethod(e.target.value)}
            className="custom-select"
            required
          >
            <option value="">-- 방법 선택 --</option>
            <option value="bank_transfer">계좌이체</option>
            <option value="card">신용카드</option>
            <option value="kakaopay">카카오페이</option>
          </select>
        </div>

        <Button type="submit">입금신청</Button>
      </form>
    </section>
  );
}

export default DepositForm;
