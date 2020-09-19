import React from "react";
import "./App.css";
import SearchCityForm from "./SearchCityForm";
import Cities from "./Cities";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchCityForm />
        <Cities />
        <WeatherInformation city="Chicago" />
        <Forecast />
        <Footer />
      </header>
    </div>
  );
}

export default App;
