import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastInfo(props) {
  // console.log(props);
  function forecastDay() {
    let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    day = Days[day];
    return day;
  }
  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return max;
  }

  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return min;
  }

  return (
    <div className="WeatherForecastInfo">
      <h5 className="WeatherForecast-day">{forecastDay()}</h5>
      <WeatherIcon iconCode={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maxTemp()}º</span>
        <span className="WeatherForecast-min">{minTemp()}º</span>
      </div>
    </div>
  );
}
