import React from "react";
import "./App.css";

export default function WeatherInformation() {
  return (
    <div className="row2">
      <div className="row justify-content-center">
        <div className="col-4">
          <p className="current-degrees">
            <span className="temperature"></span>
            <span className="units">
              <br />
              <span className="currentDegrees">85</span>
              <a href="/" className="active">
                °F
              </a>{" "}
              |<a href="/">°C</a>
            </span>

            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              className="main-icon"
            />
          </p>
        </div>

        <div className="col-4">
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
    </div>
  );
}
