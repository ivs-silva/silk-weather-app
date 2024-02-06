import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
    <h1 className="Cityname"> {props.data.city}</h1>
    <div className="row Centercontainer">
  <div className="col-6">
    <ul className="list-group">
    <li>
<img
src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.icon}.png`}
alt={props.data.description}
className="float-sm-left"
/>
</li>

        <li>
            Humidity: {props.data.humidity}%
        </li>
        <li>
            Wind: {props.data.wind} km/h
        </li>
    </ul>
    </div>
    <div className="col-6">
    <ul className="list-group">
        <li>
            Silky Weather: <span className="text-capitalize"> {props.data.description} </span>
        </li>
        <li>
            <FormatDate date={props.data.date} />
        </li>
        <li className="current-temp">
        {Math.round(props.data.temperature)} <a className="temp-links" href="https://www.shecodes.io">C°</a> | <a className="temp-links" href="https://www.shecodes.io">F°</a>
        </li>
    </ul>
    </div>
    </div>
    </div>)
}