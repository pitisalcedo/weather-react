import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <h2>
            <CurrentDate date={props.data.date} />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <WeatherTemp fahrenheit={props.data.temperature} />
        </div>
        <div className="WeatherIconMain col">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-6">
          <ul className="list-group-information list-group-flush">
            <li className="list-group-item bg-transparent">
              <span className="text-capitalize">{props.data.description}</span>
            </li>
            <li className="list-group-item bg-transparent">
              Feels like: <span>{Math.round(props.data.feelsLike)}</span>°F
            </li>
            <li className="list-group-item bg-transparent">
              Wind: <span>{Math.round(props.data.wind)}</span>
              mph
            </li>
            <li className="list-group-item bg-transparent">
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
