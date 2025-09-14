import React from "react";
import WorkingHourLabel from "./WorkingHoursLabel";
import Border from "./Border/Border";
import "./DashboardEffects.css";
import Modal from "./Modal/Modal";
import { useState } from "react";
export default function Dashboard() {

  const [isModalActive, setIsModalActive] = useState(false);

  const openModal = () => {
    setIsModalActive(true); // открыть модальное окно
  }

  return (
    <div>
      <div className="calendarHeader">
        <div className="singleNumber">
          1 Sep
          <span>Mon</span>
        </div>
      </div>
      <div className="Dash">
        <div className="jss2">
          <div className="jss3">
            <div className="time-width">
              <WorkingHourLabel />
            </div>
            <Border onClick={openModal} />
            <Border onClick={openModal} />
            <Border onClick={openModal} />
            <Border onClick={openModal} />
            <Border onClick={openModal} />
            <Border onClick={openModal} />
            <Border onClick={openModal} />
          </div>          
        </div>
      </div>
      <Modal active={isModalActive} setActive={setIsModalActive} />
    </div>
  );
}
