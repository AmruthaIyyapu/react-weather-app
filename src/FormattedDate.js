import React from "react";

export default function FormattedDate(props) {
  console.log(props.cityDate);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.cityDate.getDay()];
  let hours = props.cityDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.cityDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
