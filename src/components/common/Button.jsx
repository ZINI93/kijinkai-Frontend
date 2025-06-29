// src/components/common/Button.jsx
import React from "react";
import "./Button.css"; // 버튼 스타일을 위한 CSS 파일

/**
 * 재사용 가능한 버튼 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.type - 버튼 타입 (submit, button 등)
 * @param {function} props.onClick - 클릭 이벤트 핸들러
 * @param {React.ReactNode} props.children - 버튼 내부에 표시될 내용 (텍스트, 아이콘 등)
 * @param {string} props.className - 추가적인 CSS 클래스 (선택 사항)
 * @param {boolean} props.disabled - 버튼 비활성화 여부 (선택 사항)
 */
function Button({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`common-button ${className}`} // 기본 클래스와 추가 클래스 병합
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
