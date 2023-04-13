import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    // console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      // icon: response.data.weather[0].icon,
    });
  }
  if (weatherData.ready) {
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

        <h1 className="mt-3">{weatherData.city}</h1>
        <ul>
          <li>Thursday 10:30AM</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather"
                className="float-left"
              ></img>
              <div className=" temp-data float-left">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">ºC</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              {/* <li>Precipitation: 0% </li> */}
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ced3d576b797ba5539e509b6bb239e83";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>"Loading.."</p>;
  }
}
