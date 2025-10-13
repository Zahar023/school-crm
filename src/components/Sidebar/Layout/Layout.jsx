import React from "react";
import Sidebar from "../Sidebar";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}
