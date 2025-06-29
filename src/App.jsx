import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">홈</Link>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="welcome-section">
                  <h1>Kijinkai 구매대행 서비스에 오신 것을 환영합니다!</h1>
                  <p>
                    시작하려면 <Link to="/login">로그인</Link> 또는{" "}
                    <Link to="/register">회원가입</Link> 해주세요.
                  </p>
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
