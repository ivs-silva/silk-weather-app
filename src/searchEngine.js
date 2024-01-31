import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6643c7326a4c2a38838264a28531d97e&units=metric`;
    axios.get(url).then(showWeatherData);
  }

  function showWeatherData(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather.main);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleFormClick() {
    setTemperature(null);
    setDescription(null);
    setHumidity(null);
    setWind(null);
    setIcon(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onClick={handleFormClick}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {temperature ? (
        <p>
          <li>Temperature: {temperature}° </li>
          <li>Description: {description}° </li>
          <li>Humidity: {humidity}% </li>
          <li>Wind: {wind}Km/h </li>
          <p>
            {" "}
            <img src={icon} />{" "}
          </p>
        </p>
      ) : (
        <p>Please type a city </p>
      )}
    </div>
  );
}