import "./Modal.css";
import { useEffect } from "react";

export default function Modal({ active, setActive }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setActive(false); // закрыть модальное окно при нажатии Esc
      }
    };

    if (active) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }
  }, [active, setActive]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={() => setActive(false)}>
          ×
        </button>
        <h2>Модальное окно</h2>
        <p>Содержимое модального окна</p>
      </div>
    </div>
  );
}
