// src/components/mypage/ApprovedOrderNotice.jsx
import React from "react";
import "./ApprovedOrderNotice.css";

function ApprovedOrderNotice() {
  return (
    <div className="approved-order-notice">
      <h4>안내사항</h4>
      <ul>
        <li>
          해외 사이트에서 회원님의 신청서가 낙찰/구매된 상품은 모두 이곳에서
          확인 가능합니다.
        </li>
        <li>
          낙찰/구매된 상품은 재팬비드 일본센터에 입고되어 검수 완료 후, '내 지갑
          관리'에서 금액 확인이 가능합니다.
        </li>
        <li>
          재팬비드 일본센터에 입고된 상품은 낙찰/구매일로부터 30일 이내에
          국제배송 신청을 해야 합니다.
          <br />
          (30일 초과 시 보관 수수료가 발생하며, 90일 이상 장기 보관된 상품은
          폐기될 수 있습니다.)
        </li>
        <li>재팬비드는 회원님의 안전한 구매를 위하여 최선을 다하겠습니다.</li>
      </ul>
      <h4 className="notice-sub-title">입금 규정 및 유의사항</h4>
      <p>
        * 회원님께서는 재팬비드 내 통장 입금 전 또는 입금 중이신 금액이 존재하지
        않습니다.
        <br />내 통장에서 입금하실 금액이 있으시다면, 입금 후 바로 확인됩니다.
        <br />
        입금 규정 확인 후 신청해 주시길 바랍니다. (환율은 입금 시점 고시환율이
        적용됩니다.)
      </p>
      <p>
        ※ 등록하신 계좌와 실제 입금하신 분의 성함이 다를 경우 금액 확인이
        늦어지거나 누락될 수 있습니다.
      </p>
      <p className="important-notice">
        * 물품을 수령하신 후 반품 또는 환불을 원하시는 경우, 재팬비드는 해외
        배송비 및 서비스 수수료를 제외한 금액만 환불 가능합니다.
      </p>
    </div>
  );
}

export default ApprovedOrderNotice;
