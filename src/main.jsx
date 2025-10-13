import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./contexts/UserContext";
import { setupAxios } from "./utils/auth";
import App from "./App.jsx";

setupAxios();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
