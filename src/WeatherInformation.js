import React from "react";
import "./App.css";

export default function WeatherInformation() {
  return (
    <div className="row weatherInformation">
      <div className="col-md-auto">
        <p>
          <span className="currentDegrees text-center">85</span>
          <span className="units">
            <a href="/" className="active">
              °F
            </a>{" "}
            | <a href="/">°C</a>
          </span>
        </p>
      </div>
      <div className="col-md-auto">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          className="main-icon"
          alt="partlycloudy"
        />
      </div>
      <div className="col-md-auto">
        <ul className="list-group-information list-group-flush">
          <li className="list-group-item bg-transparent">
            <span>Partly Sunny</span>
          </li>
          <li className="list-group-item bg-transparent">
            Feels like: <span>85</span>°F
          </li>
          <li className="list-group-item bg-transparent">
            Wind: <span>5</span>mph
          </li>
          <li className="list-group-item bg-transparent">
            Humidity: <span>5</span>%
          </li>
        </ul>
      </div>
    </div>
  );
}
