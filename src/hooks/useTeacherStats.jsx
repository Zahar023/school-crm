import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const useTeacherStats = (teacherId) => {
  const [stats, setStats] = useState({ hours: 0, slots: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log("UseEffect: ");

        if (!teacherId) {
          setLoading(false);
          return;
        }
        const response = await axios.get(
          `https://school-crm-backend-2q7c.onrender.com/api/users/${teacherId}/stats`
        );
        console.log("Статистика: ", response.data.data);
        setStats(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Ошибка при загрузке статистики"
        );
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [teacherId]);
  return { stats, loading, error };
};
