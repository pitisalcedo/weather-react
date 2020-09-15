import React from "react";
import "./App.css";

export default function SearchCityForm() {
  return (
    <div className="searchCityForm">
      <form>
        <div class="form-group w-50">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Search..."
            autoComplete="off"
          />

          <button
            className="btn btn-outline-secondary btn-lg go-button"
            type="submit"
          >
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </div>
      </form>
      <button className="currentLocationButton btn-lg">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
      </button>
    </div>
  );
}
