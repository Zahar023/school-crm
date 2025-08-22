import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Введенные данные:", formData);

    try {
      const response = await axios.post(
        "https://school-crm-backend-ioyv.onrender.com/api/auth/login",
        formData
      );

      if (response.data.success) {
        localStorage.setItem("authToken", response.data.data.token);

        axios.defaults.headers.common["Authorization"] =
          `Bearer ${response.data.data.token}`;

        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.data.token)
        );

        if (response.data.data.isAdmin) {
          navigate("/register");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response?.data?.errorCode === "ACCOUNT_DISABLED") {
        setError("Ваш аккаунт заблокирован. Обратитесь к администратору.");
      } else if (error.response?.status === 403) {
        setError("Аккаунт заблокирован. Обратитесь к администратору.");
      } else if (error.response?.status === 401) {
        setError("Неверный email или пароль");
      } else if (error.code === "NETWORK_ERROR") {
        setError("Нет соединения с сервером");
      } else {
        setError("Ошибка при входе. Попробуйте позже.");
      }
      setFormData({ password: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    //console.log("Введенные данные:", formData);
  };

  return (
    <div>
      <h1>Вход в CRM</h1>
      {error && (
        <div
          style={{
            color: "#c62828",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          {error}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <input
          placeholder="Логин"
          name="email"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          placeholder="Пароль"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <button className="login-button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
