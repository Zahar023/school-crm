import Sidebar from "../Side/Sidebar";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
}
