import React from "react";
import "./App.css";
import Cities from "./Cities";
import Information from "./Information";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cities />
        <Information city="Chicago" />
        <Forecast />
        <Footer />
      </header>
    </div>
  );
}

export default App;
