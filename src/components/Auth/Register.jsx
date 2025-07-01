// src/components/Auth/Register.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../common/Button";
import FormInput from "../common/FormInput";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (confirmPassword === "") {
      setPasswordMismatch(false);
    } else if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordMismatch) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }

    if (!password || !confirmPassword) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      // User 테이블에만 저장하는 API (email, password, nickname)
      const API_URL = "http://localhost:8080/api/auth/register";

      const response = await axios.post(API_URL, {
        email: email,
        password: password,
        nickname: nickname,
      });

      console.log("회원가입 성공:", response.data);
      alert(
        "회원가입이 성공적으로 완료되었습니다! 로그인 페이지로 이동합니다."
      );
      navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error(
        "회원가입 실패:",
        error.response ? error.response.data : error.message
      );
      alert(
        `회원가입 실패: ${
          error.response?.data?.message || "알 수 없는 오류 발생"
        }`
      );
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>회원가입</h2>

        <FormInput
          label="아이디 (이메일)"
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

        <FormInput
          label="비밀번호 확인"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          isInvalid={passwordMismatch}
          errorMessage={passwordMismatch ? "비밀번호가 일치하지 않습니다." : ""}
        />

        <FormInput
          label="닉네임"
          id="nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />

        <Button type="submit">회원가입</Button>

        <p className="auth-link">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
