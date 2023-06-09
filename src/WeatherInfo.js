import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  // console.log(props);
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate cityDate={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className=" clearfix">
            <div className=" float-left">
              <WeatherIcon iconCode={props.data.icon} size={52} />
            </div>

            <div className=" temp-data float-left">
              <WeatherTemperature celsiusTemp={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            {/* <li>Precipitation: 0% </li> */}
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
