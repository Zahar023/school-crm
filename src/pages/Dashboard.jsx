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

  function TimeButton(props) {
    return (
      <ul>
        <TimeSlot time={props.title} /> <button> {props.description}</button>
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
      <button onClick={handleExit}> Выход </button>
    </div>
  );
}
