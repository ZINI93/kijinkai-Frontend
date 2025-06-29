// src/components/Auth/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button"; // Button 컴포넌트 임포트!
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
    alert(`로그인 시도: ${email}`);
    // 실제 백엔드 연동 로직은 나중에 추가
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Kijinkai 로그인</h2>
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* 기존 <button> 태그 대신 Button 컴포넌트 사용 */}
        <Button type="submit">로그인</Button>

        <p className="auth-link">
          계정이 없으신가요? <Link to="/register">회원가입</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
