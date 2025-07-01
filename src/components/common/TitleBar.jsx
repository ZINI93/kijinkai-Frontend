// src/components/common/TitleBar.jsx
import React from "react";
import "./TitleBar.css";

function TitleBar({ title, description }) {
  return (
    <div className="title-bar">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export default TitleBar;
