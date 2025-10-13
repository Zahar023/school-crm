import React from "react";
import "./Border.css";

export default function Border({ onClick }) {
  const slots = Array(12).fill(null);

  return (
    <div className="column">
      {slots.map((_, index) => (
        <div
          key={index}
          className={`time-slot ${index === 0 ? "first-slot" : ""}`}
          onClick={onClick}
        >
          <div className="slot-hover-overlay"></div>
        </div>
      ))}
    </div>
  );
}
