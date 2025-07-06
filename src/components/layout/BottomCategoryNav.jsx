// src/components/layout/BottomCategoryNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./BottomCategoryNav.css";

function BottomCategoryNav() {
  return (
    <nav className="bottom-category-nav">
      <ul>
        <li>
          <a href="/AdminPanel" target="_blank" rel="noopener noreferrer">
            Admin panel
          </a>
        </li>
        <li>
          <Link to="/self-purchase">Custom Service</Link>
        </li>
        <li>
          <Link to="/shipping-agent">Event</Link>
        </li>
        <li>
          <Link to="/buy-method">Order method</Link>
        </li>
        <li>
          <Link to="/buy-agent">Order</Link>
        </li>
      </ul>
      <div className="mypage-shortcut">
        <Link to="/mypage">● My page</Link>
      </div>
    </nav>
  );
}
export default BottomCategoryNav;
