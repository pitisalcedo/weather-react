import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";
import "./App.css";

export default function WeatherInformation(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weatherInformation">
        <div className="row">
          <div className="col">
            <h1>{weatherData.city}</h1>
            <h2>
              <CurrentDate date={weatherData.date} />
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>
              <span className="currentDegrees text-center">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" className="active">
                  °F
                </a>{" "}
                | <a href="/">°C</a>
              </span>
            </p>
          </div>
          <div className="col">
            <img
              src={weatherData.icon}
              className="main-icon"
              alt="description"
            />
          </div>
          <div className="col-6">
            <ul className="list-group-information list-group-flush">
              <li className="list-group-item bg-transparent">
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </li>
              <li className="list-group-item bg-transparent">
                Feels like: <span>{Math.round(weatherData.feelsLike)}</span>°F
              </li>
              <li className="list-group-item bg-transparent">
                Wind: <span>{Math.round(weatherData.wind)}</span>
                mph
              </li>
              <li className="list-group-item bg-transparent">
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "87674b91999873f45e8ffe2337e0d7e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
