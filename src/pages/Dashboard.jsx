import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://school-crm-backend-ioyv.onrender.com/api/teachers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        setTeachers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleExit = () => {
    navigate("/");
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Личный кабинет</h1>
      <p>Здесь будет расписание</p>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name} </li>
        ))}
      </ul>
      <button onClick={handleExit}> Выход </button>
    </div>
  );
}
