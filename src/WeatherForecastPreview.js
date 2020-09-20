import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°F`;
  }

  return (
    <div className="WeatherForecastPreview border-left col">
      <div className="WeatherForecastHour">{hours()}</div>
      <div className="WeatherForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="WeatherForecastTemp">{temperature()}</div>
    </div>
  );
}
