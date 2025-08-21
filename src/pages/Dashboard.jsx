import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ways } from "./data";

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

  function TimeButton({ title, description }) {
    return (
      <ul>
        <TimeSlot time={title} /> <button> {description}</button>
      </ul>
    );
  }

  function TimeSlot({ time }) {
    function handleClick() {
      console.log("clicked!"); //Я брал инфу с документации где по очередно делали крестики-нолики, поэтому эта функция здесь нахер не нужна
    }

    return (
      <button className="square" onClick={handleClick}>
        {time}
      </button>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Личный кабинет</h1>
      <p>Здесь будет расписание</p>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>{teacher.name} </li>
        ))}
      </ul>
      <div className="time-buttons">
        <TimeButton title="9:00" description="Записать" />
        <TimeButton title="10:00" description="Записать" />
        <TimeButton title="11:00" description="Записать" />
        <TimeButton title="12:00" description="Записать" />
        <TimeButton title="13:00" description="Записать" />
        <TimeButton title="14:00" description="Записать" />
        <TimeButton title="15:00" description="Записать" />
        <TimeButton title="16:00" description="Записать" />
        <TimeButton title="17:00" description="Записать" />
        <TimeButton title="18:00" description="Записать" />
        <TimeButton title="19:00" description="Записать" />
        <TimeButton title="20:00" description="Записать" />
        <TimeButton title="21:00" description="Записать" />
      </div>
      <button onClick={handleExit}> Выход </button>
    </div>
  );
}
