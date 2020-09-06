import React from "react";
import "./App.css";

export default function SearchCityForm() {
  return (
    <div className="searchCityForm">
      <form>
        <input type="text" placeholder="Enter a city.." autoComplete="off" />

        <button className="btn btn-outline-secondary go-button" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}
