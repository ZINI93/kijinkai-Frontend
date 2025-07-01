// src/components/mypage/ProcessingStatusSummary.jsx
import React from "react";
import "./ProcessingStatusSummary.css";

function ProcessingStatusSummary() {
  const status = {
    실패: 0,
    진행중: 1, // '진행중'은 1건으로 예시
    구매완료: 0,
    "1차결제요청": 0,
  };

  return (
    <div className="processing-status-summary">
      <div className="summary-item">
        <span className="summary-label">실패</span>
        <span className="summary-value">{status.실패}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">진행중/구매요청</span>
        <span className="summary-value">{status.진행중}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">구매완료</span>
        <span className="summary-value">{status.구매완료}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">1차결제요청</span>
        <span className="summary-value">{status["1차결제요청"]}</span>
      </div>
    </div>
  );
}

export default ProcessingStatusSummary;
