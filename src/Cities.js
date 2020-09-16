import React from "react";
import "./App.css";

export default function Cities() {
  return (
    <div className="row listGroupCities">
      <div className="btn-group">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          New York
        </button>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          San Francisco
        </button>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          Paris
        </button>
      </div>
      <div className="btn-group">
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
