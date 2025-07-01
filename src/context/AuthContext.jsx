// src/context/AuthContext.jsx (수정 없음, 단지 주석 추가 및 user 객체에 대한 이해 강조)
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // user 객체는 User 테이블의 핵심 정보(id, email, nickname 등)만 포함
  const [user, setUser] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userData = localStorage.getItem("userData");
    if (token && userData) {
      setIsLoggedIn(true);
      try {
        const parsedUserData = JSON.parse(userData);
        setUser(parsedUserData);
        // 로그인 시 백엔드에서 user 정보와 함께 잔액이 오는 경우
        if (parsedUserData.balance !== undefined) {
          setCurrentBalance(parsedUserData.balance);
        }
      } catch (e) {
        console.error(
          "Failed to parse user data or token from localStorage",
          e
        );
        logout();
      }
    }
  }, []);

  // user 정보(닉네임 등)를 업데이트할 때 사용 (User 테이블 필드)
  const updateUser = (updatedUserData) => {
    setUser((prevUser) => {
      const newUser = { ...prevUser, ...updatedUserData };
      localStorage.setItem("userData", JSON.stringify(newUser));
      return newUser;
    });
  };

  const updateBalance = (newBalance) => {
    setCurrentBalance(newBalance);
  };

  // 로그인 시 User 테이블의 정보 (id, email, nickname)만 받음
  const login = (userDataFromBackend, token) => {
    setIsLoggedIn(true);
    // userDataFromBackend에는 User 테이블 정보만 들어있다고 가정
    setUser(userDataFromBackend);
    localStorage.setItem("userToken", token);
    localStorage.setItem("userData", JSON.stringify(userDataFromBackend));
    // 로그인 시 백엔드에서 user 정보와 함께 잔액이 오는 경우
    if (userDataFromBackend.balance !== undefined) {
      setCurrentBalance(userDataFromBackend.balance);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentBalance(0);
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  };

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    currentBalance,
    updateBalance,
    updateUser, // user 객체의 필드를 업데이트하는 함수
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
