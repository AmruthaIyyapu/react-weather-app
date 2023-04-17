import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
