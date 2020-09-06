import React from "react";
import "./App.css";
import SearchCityForm from "./SearchCityForm";
import Cities from "./Cities";
import CurrentInformation from "./CurrentInformation";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchCityForm />
        <button className="currentLocationButton">Current Location</button>
        <Cities />
        <CurrentInformation />
        <WeatherInformation />
        <Forecast />
        <Footer />
      </header>
    </div>
  );
}

export default App;
