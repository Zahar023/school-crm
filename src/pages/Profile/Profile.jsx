import "./Profile.css";
import { useTeacherStats } from "../../hooks/useTeacherStats";
import { useUser } from "../../contexts/UserContext";

export default function Profile() {
  const { currentUser } = useUser();
  const { stats, loading, error } = useTeacherStats(currentUser?.id);
  console.log("Id Пользователя: ", currentUser?.id);

  if (!currentUser) {
    return <div>Вы не авторизованы</div>;
  }

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!stats) return <div>Данные статистики не найдены</div>;
  console.log("Часы Пользователя: ", stats.hours);
  console.log("Слоты Пользователя: ", stats.slots);

  return (
    <div>
      <h1>Профиль</h1>
      <div>
        <h2>Статистика</h2>
        <p>Имя: {stats.name}</p>
        <p>Отработано часов: {stats.hours}</p>
        <p>Активных слотов: {stats.slots}</p>
      </div>
    </div>
  );
}
