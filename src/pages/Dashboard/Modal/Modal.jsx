import "./Modal.css";
import { useEffect } from "react";

export default function Modal({ active, setActive }) {
  return (

    
    <div className={active ? "modal active" : "modal"}>
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