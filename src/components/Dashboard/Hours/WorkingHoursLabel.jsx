import React from "react";
import "./WorkingHoursLabel.css";

export default function WorkingHourLabel() {
  const hours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <div className="working-hours-container">
      {hours.map((hour, index) => (
        <div key={index} className="working-hours-label">
          <p className="hour-text">{hour}</p>
        </div>
      ))}
    </div>
  );
}
