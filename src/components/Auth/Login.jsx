// src/components/Auth/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import { useAuth } from "../../context/AuthContext"; // useAuth 훅 임포트
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // AuthContext의 login 함수 가져오기

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = "http://localhost:8080/api/auth/login";

      const response = await axios.post(API_URL, {
        email: email,
        password: password,
      });

      console.log("로그인 성공:", response.data);
      alert("로그인 성공! 환영합니다.");

      // 백엔드 응답에서 사용자 정보와 토큰을 파싱하여 전달
      // 실제 백엔드 응답 형태에 따라 이 부분을 조정해야 합니다.
      const userData = response.data.user || {
        email: email,
        nickname: response.data.nickname || email.split("@")[0],
      };
      const token = response.data.token || "dummy_jwt_token_from_backend";

      login(userData, token); // AuthContext에 로그인 상태 업데이트

      navigate("/"); // 로그인 성공 시 홈 페이지로 이동
    } catch (error) {
      console.error(
        "로그인 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `로그인 실패: ${
          error.response?.data?.message ||
          "이메일 또는 비밀번호를 확인해주세요."
        }`
      );
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>KIJINKAI 로그인</h2>
        <FormInput
          label="이메일"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="비밀번호"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
        <p className="auth-link">
          계정이 없으신가요? <Link to="/register">회원가입</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
