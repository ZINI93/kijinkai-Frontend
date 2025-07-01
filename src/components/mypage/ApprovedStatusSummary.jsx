// src/components/mypage/ApprovedStatusSummary.jsx
import React from "react";
import "./ApprovedStatusSummary.css";

function ApprovedStatusSummary() {
  // 더미 데이터 (실제는 API에서 받아와야 함)
  const status = {
    미입고: 0,
    입고대기: 0,
    낙찰: 0, // 이미지에는 '낙찰'
    "1차결제": 1, // 이미지에는 '1차결제' (총 1건)
  };

  return (
    <div className="approved-status-summary">
      <div className="summary-item">
        <span className="summary-label">미입고</span>
        <span className="summary-value">{status.미입고}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">입고대기</span>
        <span className="summary-value">{status.입고대기}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">낙찰</span>
        <span className="summary-value">{status.낙찰}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">1차결제</span>
        <span className="summary-value">{status["1차결제"]}</span>
      </div>
    </div>
  );
}

export default ApprovedStatusSummary;
