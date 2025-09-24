import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const toggleActiveStatus = async (teacherId) => {
    try {
      const teacher = users.find((t) => t.id === teacherId);
      console.log("Введенные данные:", teacher);
      const newActiveStatus = !teacher.active;

      setUsers(
        users.map((t) =>
          t.id === teacherId ? { ...t, active: newActiveStatus } : t
        )
      );

      const response = await axios.patch(
        "https://school-crm-backend-2q7c.onrender.com/api/users/status",
        {
          email: teacher.email,
          active: newActiveStatus,
        }
      );

      if (!response.data.success) {
        setUsers(
          users.map((t) =>
            t.id === teacherId ? { ...t, active: teacher.active } : t
          )
        );
      }
    } catch (err) {
      setUsers(
        users.map((t) =>
          t.id === teacherId ? { ...t, active: teacher.active } : t
        )
      );

      setError(
        err.response?.data?.message ||
          err.message ||
          "Ошибка при обновлении статуса"
      );
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://school-crm-backend-2q7c.onrender.com/api/users"
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
    navigate("/");
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Все пользователи</h1>
      <p>Здесь можно запретить доступ пользователю на платформу</p>
      <div>
        <table
          style={{
            width: "80%",
            borderCollapse: "collapse",
            //borderSpacing: "0px", работает только с separate
            backgroundColor: "#f5f5f5",
            //border: "1px solid #ddd",
            borderRadius: "8px",
            margin: "10px auto",
            fontFamily: "Arial",
            overflow: "auto",
          }}
        >
          <thead
            style={{
              backgroundColor: "#b1b2b3ff",
              fontWeight: "600",
            }}
          >
            <tr>
              <th>Пользователь</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((teacher) => (
              <tr>
                <th>{teacher.name}</th>
                <th>{teacher.active ? "Активен" : "Неактивен"}</th>
                <th>
                  <button onClick={() => toggleActiveStatus(teacher.id)}>
                    {teacher.active ? "Заблокировать" : "Разблокировать"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleExit}> Выход </button>
    </div>
  );
}
