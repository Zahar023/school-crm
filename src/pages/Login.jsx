import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Введенные данные:", formData);

    try {
      const response = await axios.post(
        "https://school-crm-backend-ioyv.onrender.com/api/login",
        formData
      );

      if (response.data.success) {
        if (response.data.isAdmin) {
          navigate("/register");
        } else {
          navigate("/dashboard");
        }
      }
    } catch {}
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("Введенные данные:", formData);
  };

  return (
    <div>
      <h1>Вход в CRM</h1>
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
