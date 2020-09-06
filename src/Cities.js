import React from "react";
import "./App.css";

export default function Cities() {
  return (
    <div className="col col-lg-3">
      <div className="listGroupCities list-group-flush">
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          New York
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent l"
        >
          San Francisco
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action bg-transparent"
        >
          Paris
        </button>
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
