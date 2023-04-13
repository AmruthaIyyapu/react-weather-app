import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="text" placeholder="Enter a city..." />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>

      <h1 className="mt-3">Boston</h1>
      <ul>
        <li>Thursday 10:30AM</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">26ºC</div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 32%</li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
