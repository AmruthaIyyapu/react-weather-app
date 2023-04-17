import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">Thu</div>
      <WeatherIcon iconCode="01d" size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">19º</span>
        <span className="WeatherForecast-min">10º</span>
      </div>
    </div>
  );
}
