// src/components/layout/TopNotificationBar.jsx
import React from "react";
import "./TopNotificationBar.css";

function TopNotificationBar({ message }) {
  if (!message) return null;
  return (
    <div className="top-notification-bar">
      <span className="notice-tag">[공지]</span> {message}
    </div>
  );
}
export default TopNotificationBar;
