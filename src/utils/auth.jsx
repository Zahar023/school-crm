import axios from "axios";

export const setupAxios = () => {
  const token = localStorage.getItem("authToken");
  console.log("Токен из localStorage:", token);

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.exp && payload.exp * 1000 < Date.now()) {
        console.log("Токен истек");
        localStorage.removeItem("authToken");
        delete axios.defaults.headers.common["Authorization"];
        return false;
      }

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("Axios заголовок установлен");
      return true;
    } catch (error) {
      console.error("Невалидный токен:", error);
      localStorage.removeItem("authToken");
      delete axios.defaults.headers.common["Authorization"];
      return false;
    }
  } else {
    console.log("Токен не найден");
    delete axios.defaults.headers.common["Authorization"];
    return false;
  }
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
  delete axios.defaults.headers.common["Authorization"];
  console.log("Токен удален");
};

export const getCurrentToken = () => {
  return localStorage.getItem("authToken");
};

export const isTokenValid = () => {
  const token = getCurrentToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return !(payload.exp && payload.exp * 1000 < Date.now());
  } catch {
    return false;
  }
};
