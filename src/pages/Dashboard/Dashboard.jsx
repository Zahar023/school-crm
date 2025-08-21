import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ways } from "./data";
import TimeButton from "./TimeButton";

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
    navigate("/");
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <div className="side-bar">
        <div className="header">
          <div className="logo"></div>
          <div className="toggleButton"></div>
        </div>
        <div className="side-bar-body">
          <div className="Личный кабинет">
            <h2>Личный кабинет</h2>
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
      <div className="time-description-buttons">
        <TimeButton {...ways[0]} />
        <TimeButton {...ways[1]} />
        <TimeButton {...ways[2]} />
        <TimeButton {...ways[3]} />
        <TimeButton {...ways[4]} />
        <TimeButton {...ways[5]} />
        <TimeButton {...ways[6]} />
        <TimeButton {...ways[7]} />
        <TimeButton {...ways[8]} />
        <TimeButton {...ways[9]} />
        <TimeButton {...ways[10]} />
        <TimeButton {...ways[11]} />
        <TimeButton {...ways[12]} />
      </div>
    </div>
  );
}
