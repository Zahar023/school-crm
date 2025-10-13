import React, { useState } from "react";
import WorkingHourLabel from "./Hours/WorkingHoursLabel";
import Border from "./Border/Border";
import Modal from "../Modal/Modal";
import "./DashboardEffects.css";

export default function Dashboard() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const dates = ["1 Сен", "2 Сен", "3 Сен", "4 Сен", "5 Сен", "6 Сен", "7 Сен"];

  const openModal = (dayIndex) => {
    setSelectedSlot({ day: days[dayIndex], date: dates[dayIndex] });
    setIsModalActive(true);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Расписание занятий</h1>
        <button className="add-lesson-btn">
          <span>+</span>
          Добавить занятие
        </button>
      </div>

      <div className="calendar-header">
        {dates.map((date, index) => (
          <div key={index} className="calendar-day">
            <div className="day-date">{date}</div>
            <div className="day-name">{days[index]}</div>
          </div>
        ))}
      </div>

      <div className="calendar-body">
        <div className="calendar-wrapper">
          <div className="calendar-grid">
            <div className="time-column">
              <WorkingHourLabel />
            </div>
            {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
              <Border key={dayIndex} onClick={() => openModal(dayIndex)} />
            ))}
          </div>
        </div>
      </div>

      <Modal
        active={isModalActive}
        setActive={setIsModalActive}
        selectedSlot={selectedSlot}
      />
    </div>
  );
}
