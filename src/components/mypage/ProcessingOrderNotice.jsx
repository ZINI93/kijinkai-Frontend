// src/components/mypage/ProcessingOrderNotice.jsx
import React from "react";
import "./ProcessingOrderNotice.css";

function ProcessingOrderNotice() {
  return (
    <div className="processing-order-notice">
      <h4>안내사항</h4>
      <ul>
        <li>회원님의 주문대행 신청서는 이곳에서 실시간으로 확인 가능합니다.</li>
        <li>
          주문대행 신청서는 재팬비드 운영팀에서 실시간으로 검토 후 최종 결제
          금액이 산정되어 안내됩니다.
        </li>
        <li>
          결제 금액이 산정되기 전까지는 주문을 수정하거나 삭제할 수 있습니다.
        </li>
        <li>견적서가 발송된 후에는 주문 수정 및 삭제가 제한될 수 있습니다.</li>
        <li>불법적이거나 위험한 물품의 구매대행 신청은 반려될 수 있습니다.</li>
      </ul>
    </div>
  );
}

export default ProcessingOrderNotice;
