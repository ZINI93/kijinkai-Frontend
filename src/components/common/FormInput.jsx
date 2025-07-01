// src/components/common/FormInput.jsx
import React from "react";
import "./FormInput.css"; // FormInput 스타일 파일

/**
 * 재사용 가능한 폼 입력 필드 컴포넌트
 * @param {object} props - 컴포넌트 속성
 * @param {string} props.label - 입력 필드 라벨
 * @param {string} props.id - input의 id (label의 htmlFor와 연결)
 * @param {string} props.type - input의 type (text, email, password 등)
 * @param {string} props.value - input의 현재 값
 * @param {function} props.onChange - input 값 변경 핸들러
 * @param {boolean} props.required - 필수 입력 여부
 * @param {boolean} props.isInvalid - 유효하지 않은 입력인지 여부 (빨간 테두리 표시용)
 * @param {string} props.errorMessage - 유효하지 않을 때 표시할 메시지
 */
function FormInput({
  label,
  id,
  type,
  value,
  onChange,
  required,
  isInvalid,
  errorMessage,
}) {
  return (
    <div className={`form-group ${isInvalid ? "invalid" : ""}`}>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={isInvalid ? "input-invalid" : ""}
      />
      {isInvalid && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default FormInput;
