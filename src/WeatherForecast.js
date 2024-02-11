import React, { useState } from "react";
import './WeatherForecast.css'; 
import axios from "axios";

export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
    
    setForecast (response.data.daily);
    setLoaded(true);
}


    

    if (loaded){
        console.log(forecast);

        return ( <div className="WeatherForecast"> 
        <div className="row">
        <div className="col"> 
        <div className="WeatherForecast-day">{forecast[0].temperature.day}</div>
        <div className="Icon"><img
                src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecast[0].condition.icon}.png`}
                alt={forecast[0].description}
                                
                            /></div>
        <div className="WeatherForecast-temps">
            <span>{Math.round(forecast[0].temperature.minimum)}° | </span>
            <span className="WeatherForecast-mintemp"> {Math.round(forecast[0].temperature.maximum)}°</span>
        </div>
        </div> 
        </div>
    </div>);
        
    } else {let apiKey="734273ccf9a2ecd1e07fb3c5t7o319bd";
    let city="vienna";
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
   
    
    axios.get(apiUrl).then(handleResponse);
    return null;}
    
}