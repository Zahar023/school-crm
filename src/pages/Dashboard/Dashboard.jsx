import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ways } from "./data";
import TimeButton from "./TimeButton";
import "./DashboardEffects.css";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://school-crm-backend-ioyv.onrender.com/api/users"
        );
        setUsers(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Ошибка при загрузке данных"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    // <body style>
    <div className="dashboard">
      <Sidebar />
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
