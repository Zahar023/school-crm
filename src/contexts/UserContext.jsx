import { createContext, useContext, useState, useEffect } from "react";
import { setupAxios, removeAuthToken } from "../utils/auth";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const isAuthenticated = setupAxios();

        if (!token) {
          return;
        }

        if (!isAuthenticated) {
          return;
        }

        const payload = JSON.parse(atob(token.split(".")[1]));

        setCurrentUser({
          id: payload.id,
          email: payload.email,
          name: payload.full_name,
          role: payload.role,
          isAdmin: payload.isAdmin || false,
        });
      } catch (error) {
        console.error("Ошибка инициализации:", error);
        removeAuthToken();
      } finally {
      }
    };

    initializeAuth();
  }, []);

  const login = (token, userData) => {
    try {
      localStorage.setItem("authToken", token);

      setupAxios();

      const payload = JSON.parse(atob(token.split(".")[1]));

      setCurrentUser({
        id: payload.id,
        email: payload.email,
        name: payload.full_name,
        role: payload.role,
        isAdmin: payload.isAdmin || false,
      });
      //localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.error("Ошибка при логине:", error);
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    removeAuthToken();
    localStorage.removeItem("userData");
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
