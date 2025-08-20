import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  function TimeSlot({time}) {

    function handleClick() {
      console.log('clicked!');
    }

    return <button className="square" onClick={handleClick}>{time}</button>;
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
      <div>
        <TimeButtons>
          <TimeSlot time="09:00" />
          <TimeSlot time="10:00" />
          <TimeSlot time="11:00" />
          <TimeSlot time="12:00" />
          <TimeSlot time="13:00" />
          <TimeSlot time="14:00" />
          <TimeSlot time="15:00" />
          <TimeSlot time="16:00" />
          <TimeSlot time="17:00" />
          <TimeSlot time="18:00" />
          <TimeSlot time="19:00" />
          <TimeSlot time="20:00" />
          <TimeSlot time="21:00" />
        </TimeButtons>
      </div>
      <button onClick={handleExit}> Выход </button>      
    </div>
  );
}
