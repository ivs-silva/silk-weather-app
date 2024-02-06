import React, {useState} from "react";
import "./Centercontainer.css";
import 'bootstrap/dist/css/bootstrap.css';
import './SearchEngine.css';
import axios from "axios";
import "./Cityname.css" ;
import FormatDate from "./FormatDate";
import WeatherInfo from "./WeatherInfo";

export default function Centercontainer(){
    
    const[weatherData, setWeatherData] = useState({ready : false});

    function handleResponse(response){
        console.log(response.data);

        setWeatherData({
            ready:true,
            temperature:response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity:response.data.temperature.humidity,
            city:response.data.city,
            description:response.data.condition.description,
            date:new Date (response.data.time *1000),
            icon:response.data.condition.icon,
            

        });
       
        
    }

    if(weatherData.ready){
        return(
            <div className="row">
                <h1 className="Cityname"> {weatherData.city}</h1>
            <div className="row Centercontainer">
          <div className="col-6">
            <ul className="list-group">
            <li>
    <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`}
        alt={weatherData.description}
        className="float-sm-left"
    />
</li>

                <li>
                    Humidity: {weatherData.humidity}%
                </li>
                <li>
                    Wind: {weatherData.wind} km/h
                </li>
            </ul>
            </div>
            <div className="col-6">
            <ul className="list-group">
                <li>
                    Silky Weather: <span className="text-capitalize"> {weatherData.description} </span>
                </li>
                <li>
                    <FormatDate date={weatherData.date} />
                </li>
                <li className="current-temp">
                {Math.round(weatherData.temperature)} <a className="temp-links" href="https://www.shecodes.io">C°</a> | <a className="temp-links" href="https://www.shecodes.io">F°</a>
                </li>
            </ul>
            </div>
            <form>
                <WeatherInfo />
            <div className="row">
                <div className=" col-6">
            
                <input type="search" placeholder ="Enter a city" className="form-control"/>
                </div>
                <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
            
            </div>
            </div>
            </form>
          </div>  
          </div>
         
        )
    }

    
    else {
    const apiKey = "734273ccf9a2ecd1e07fb3c5t7o319bd";
    let defaultCity = "Vienna";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
    
}
}