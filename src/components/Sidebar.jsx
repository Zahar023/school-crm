import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleExit = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarHeaderLogo"></div>
        <div className="toggleButton"></div>
      </div>
      <div className="sidebarBody">
        <div className="personalCabinet">
          <h2>Навигация</h2>
        </div>
        <div className="sidebar-nav">
          <button
            onClick={() => navigate("/profile")}
            className={location.pathname === "/profile" ? "active" : ""}
          >
            Профиль
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className={location.pathname === "/dashboard" ? "active" : ""}
          >
            Календарь
          </button>
        </div>
        <div>
          <button onClick={handleExit}> Выход </button>
        </div>
      </div>
    </div>
  );
}
