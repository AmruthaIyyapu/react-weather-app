import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city..."
              autoFocus="on"
              className="p-2 w-100"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="p-2 w-100 btn btn-primary search-button"
            />
          </div>
        </div>
      </form>

      <h1 className="mt-3">Boston</h1>
      <ul>
        <li>Thursday 10:30AM</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather"
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="temperature">26</span>
              <span className="unit">ºC</span>
            </div>
          </div>
        </div>
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
