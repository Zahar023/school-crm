import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
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

  const handleExit = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");

    delete axios.defaults.headers.common["Authorization"];

    navigate("/");
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Личный кабинет</h1>
      <p>Здесь будет расписание</p>
      <ul>
        {users.map((teacher) => (
          <li key={teacher.id}>{teacher.name} </li>
        ))}
      </ul>
      <button onClick={handleExit}> Выход </button>
    </div>
  );
}
