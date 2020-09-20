import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./App.css";

export default function Information(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "87674b91999873f45e8ffe2337e0d7e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Information">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div class="form-group w-100">
              <input
                class="form-control form-control-lg"
                type="text"
                onChange={handleChange}
                placeholder="Search..."
                autoComplete="off"
                autoFocus="on"
              />

              <button
                className="btn btn-outline-secondary btn-lg go-button"
                type="submit"
              >
                <span
                  class="glyphicon glyphicon-search"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </form>
        </div>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
