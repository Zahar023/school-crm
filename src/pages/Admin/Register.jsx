import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const roleOptions = [
  { value: "teacher", label: "teacher" },
  { value: "manager", label: "manager" },
];

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Введенные данные:", formData);

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.role
    ) {
      console.log("Заполни все");
      return;
    }

    try {
      const response = await axios.post(
        "https://school-crm-backend-ioyv.onrender.com/api/auth/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        navigate("/");
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

  const handleRoleChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      role: selectedOption.value,
    }));
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleActiveUsers = () => {
    navigate("/users");
  };

  return (
    <div>
      <h1>добавление пользователя в CRM</h1>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Имя"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          placeholder="Логин"
          name="email"
          value={formData.email}
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
        <Select
          onChange={handleRoleChange}
          options={roleOptions}
          placeholder="Выберите вариант"
        />
        <br />
        <button className="login-button" type="submit">
          Зарегистрировать
        </button>
        <button onClick={handleExit}>Назад</button>
        <button onClick={handleActiveUsers}>Пользователи</button>
      </form>
    </div>
  );
}
