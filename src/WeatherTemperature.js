import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let celsiusTemperature = Math.round(props.celsiusTemp);
  let [unit, setUnit] = useState("celsius");

  function showFahrenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsiusTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature">{celsiusTemperature}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={showFahrenheitTemp}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((celsiusTemperature * 9) / 5 + 32);
    return (
      <div className="weatherTemperature">
        <span className="temperature">{fahrenheitTemp}</span>
        <span className="unit">
          <a href="/" onClick={showCelsiusTemp}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
