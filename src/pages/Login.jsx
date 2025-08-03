import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Вход в CRM</h1>
      <button className="login-button" onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
}
