import React from "react";
import Sidebar from "../components/AdminPanel/sidebar/Sidebar";
import Navbar from "../components/AdminPanel/navbar/Navbar";
import "./AdminPanel.scss";

const AdminPanel = () => {
  return (
    <div className="AdminPanel">
      <Sidebar />
      <div className="AdminContainer">
        <Navbar/> 
        Container kijin kai
      </div>
    </div>
  );
}

export default AdminPanel;