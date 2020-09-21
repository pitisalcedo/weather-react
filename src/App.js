import React from "react";
import "./App.css";
import Information from "./Information";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Information city="Chicago" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
