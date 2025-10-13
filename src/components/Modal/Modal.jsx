import React, { useEffect } from "react";
import { X, Clock, User, BookOpen } from "lucide-react";
import "./Modal.css";

export default function Modal({ active, setActive, selectedSlot }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [active, setActive]);

  return (
    <div
      className={`modal-overlay ${active ? "active" : ""}`}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setActive(false)}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <BookOpen size={28} />
          </div>
          <h2 className="modal-title">Добавить занятие</h2>
        </div>

        <div className="modal-body">
          {selectedSlot && (
            <div className="selected-slot-info">
              <Clock size={18} />
              <span>
                {selectedSlot.date} - {selectedSlot.day}
              </span>
            </div>
          )}

          <form className="lesson-form">
            <div className="form-group">
              <label className="form-label">
                <BookOpen size={28} />
                Название курса
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Введите название курса"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <User size={28} />
                Преподаватель
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Имя преподавателя"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <Clock size={18} />
                  Начало
                </label>
                <input type="time" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Clock size={18} />
                  Окончание
                </label>
                <input type="time" className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Описание</label>
              <textarea
                className="form-textarea"
                placeholder="Дополнительная информация о занятии"
                rows="4"
              ></textarea>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setActive(false)}
              >
                Отмена
              </button>
              <button type="submit" className="btn-submit">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
