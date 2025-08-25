import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ways } from "./data";
import TimeButton from "./TimeButton";
import "./DashboardEffects.css";

export default function Dashboard() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          "https://school-crm-backend-ioyv.onrender.com/api/teachers"
        );
        setTeachers(response.data.data);
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

    fetchTeachers();
  }, []);

  const handleExit = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");

    delete axios.defaults.headers.common["Authorization"];

    navigate("/");
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    // <body style>
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebarHeader">
          <div className="sidebarHeaderLogo"></div>
          <div className="toggleButton"></div>
        </div>
        <div className="sidebarBody">
          <div className="personalCabinet">
            <h2>Профиль</h2>
          </div>
          <div>
            <button onClick={handleExit}> Выход </button>
          </div>
        </div>
        <ul>
          {/* {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name} </li>
        ))} */}
        </ul>
      </div>
      <div className="timeDescriptionButtons">
        <h3>Запись</h3>

        {ways.map((way) => (
          <TimeButton {...way} />
        ))}
      </div>
    </div>
    // </body>
  );
}
