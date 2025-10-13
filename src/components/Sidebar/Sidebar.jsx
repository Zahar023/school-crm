import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen, BarChart, Calendar, User, LogOut } from "lucide-react";
import { useUser } from "../../contexts/UserContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <BookOpen size={24} />
          </div>
          <h1 className="logo-text">CodeSchool</h1>
        </div>
      </div>

      <div className="sidebar-body">
        <div className="sidebar-section">
          <h2 className="sidebar-title">Навигация</h2>
        </div>

        <nav className="sidebar-nav">
          <button
            onClick={() => navigate("/profile")}
            className={`nav-button ${
              location.pathname === "/profile" ? "active" : ""
            }`}
          >
            <User size={20} />
            <span>Профиль</span>
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className={`nav-button ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            <Calendar size={20} />
            <span>Расписание занятий</span>
          </button>

          <button
            onClick={() => navigate("/calendar")}
            className={`nav-button ${
              location.pathname === "/calendar" ? "active" : ""
            }`}
          >
            <BarChart size={20} />
            <span>Хз</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">
            <LogOut size={20} />
            <span>Выход</span>
          </button>
        </div>
      </div>
    </div>
  );
}
