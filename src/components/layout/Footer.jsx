// src/components/layout/Footer.jsx
import React from "react";
import "./Footer.css"; // Footer 스타일 파일

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>고객센터</h3>
          <p>070-1111-1111</p>
          <p>운영시간: 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
        </div>
        <div className="footer-section">
          <h3>Kijinkai</h3>
          <ul>
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>공지사항</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>결제수단</h3>
          <p>계좌이체</p>
          {/* 결제 수단 로고 이미지들을 여기에 추가 */}
          {/* <img
            src="https://via.placeholder.com/80x30?text=Visa"
            alt="VISA, MasterCard"
          /> */}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Kijinkai. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
