// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 임포트
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext"; // AuthProvider 임포트
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* App 컴포넌트를 BrowserRouter로 감쌈 */}
      <AuthProvider>
        {" "}
        {/* App 컴포넌트를 AuthProvider로 감쌈 */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
