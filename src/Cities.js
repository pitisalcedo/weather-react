import React from "react";
import "./App.css";

export default function Cities() {
  return (
    <div className="row listGroupCities">
      <div className="col-4">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          New York
        </button>
      </div>
      <div className="col-4">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          Los Angeles
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          Paris
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          Tokyo
        </button>
      </div>
    </div>
  );
}
