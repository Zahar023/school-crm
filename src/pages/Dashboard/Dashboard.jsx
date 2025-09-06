import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ways } from "./data";
import TimeButton from "./TimeButton";
import "./DashboardEffects.css";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    /*const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
      return;
    }*/
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    // <body style>
    <div className="dashboard">
      <div className="timeDescriptionButtons">
        <h3> Запись</h3>

        {ways.map((way) => (
          <TimeButton key={way.id} {...way} />
        ))}
      </div>
    </div>
    // </body>
  );
}
