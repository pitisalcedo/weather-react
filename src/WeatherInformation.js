import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherInformation(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
    });
  }

  if (ready) {
    return (
      <div className="weatherInformation">
        <div className="row">
          <div className="col">
            <h1>{weatherData.city}</h1>
            <h2>Monday, August 17</h2>
            <h3>17:00</h3>
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
