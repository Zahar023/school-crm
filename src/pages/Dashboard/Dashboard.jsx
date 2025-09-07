import React from "react";
import WorkingHourLabel from "./WorkingHoursLabel";
import Border from "./Border/Border";
import "./DashboardEffects.css";

export default function Dashboard() {
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

            <Border />
            <Border />
            <Border />
            <Border />
            <Border />
            <Border />
            <Border />
          </div>
        </div>
      </div>
    </div>
  );
}
