import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState(`fahrenheit`);
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === `fahrenheit`) {
    return (
      <div className="WeatherTemp">
        <p>
          <span className="currentDegrees font-weight-lighter">
            {Math.round(props.fahrenheit)}
          </span>
          <span className="units">
            °F |{" "}
            <a href="/" className="active" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemp">
        <p>
          <span className="currentDegrees text-center">
            {Math.round(celsius)}
          </span>
          <span className="units">
            <a href="/" className="active" onClick={convertToFahrenheit}>
              °F
            </a>{" "}
            | °C
          </span>
        </p>
      </div>
    );
  }
}
