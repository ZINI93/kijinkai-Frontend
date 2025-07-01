// src/components/mypage/WithdrawForm.jsx
import React from "react";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import "./WithdrawForm.css"; // WithdrawForm 스타일 (MyWallet.css에서 분리)

function WithdrawForm({
  currentBalance,
  handleAmountClick,
  handleWithdrawSubmit,
  withdrawAmount,
  setWithdrawAmount,
  withdrawBank,
  setWithdrawBank,
  withdrawAccountNum,
  setWithdrawAccountNum,
  withdrawAccountHolder,
  setWithdrawAccountHolder,
}) {
  const amountButtons = [10000, 50000, 100000, 200000, 500000, 1000000];

  return (
    <section className="wallet-withdraw-form">
      <h4>출금금액 신청</h4>
      <form onSubmit={handleWithdrawSubmit}>
        <FormInput
          label="출금금액"
          id="withdrawAmount"
          type="number"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          required
          placeholder="출금하실 금액을 입력하세요."
        />
        <div className="amount-buttons">
          {amountButtons.map((amount) => (
            <Button
              key={`withdraw-${amount}`}
              type="button"
              className="amount-quick-button"
              onClick={() => handleAmountClick(amount, "withdraw")}
            >
              {amount.toLocaleString()}원
            </Button>
          ))}
        </div>

        <FormInput
          label="은행명"
          id="withdrawBank"
          type="text"
          value={withdrawBank}
          onChange={(e) => setWithdrawBank(e.target.value)}
          required
          placeholder="은행명을 입력하세요."
        />
        <FormInput
          label="계좌번호"
          id="withdrawAccountNum"
          type="text"
          value={withdrawAccountNum}
          onChange={(e) => setWithdrawAccountNum(e.target.value)}
          required
          placeholder="계좌번호를 입력하세요. (- 없이 입력)"
        />
        <FormInput
          label="예금주"
          id="withdrawAccountHolder"
          type="text"
          value={withdrawAccountHolder}
          onChange={(e) => setWithdrawAccountHolder(e.target.value)}
          required
          placeholder="예금주 이름을 입력하세요."
        />

        <Button type="submit" className="withdraw-button">
          출금신청
        </Button>
      </form>
    </section>
  );
}

export default WithdrawForm;
