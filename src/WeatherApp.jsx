import axios from "axios";
import React, { useState } from "react";


function WeatherApp() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();



    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'9b0d1b64db9ed4a291ec922b31ddf6e0'}`)
            setWeather(response);
        } catch (error) {
            console.log("Error Fetching Weather App data", error);
        }
    }

    const handleClick = () => {
        fetchWeather();
    }
    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const enter = (event) => {
        if (event.key === 'Enter') {
            fetchWeather();
        }
    }

    return (
        <div className="weather-container">
            <h1>ZULFIQAR ALI WEATHER APP</h1>
            <input type="text" placeholder="Enter City Name" value={city} onChange={handleCity} onKeyDown={enter} />
            <button onClick={handleClick}>Get Weather</button>
            {weather &&
                <>
                    <div className="weather-info">
                        <h3>City Name: {weather.data.name}</h3>
                        <p>Temperature is: {weather.data.main.temp}</p>
                        <p>Description: {weather.data.weather[0].description}</p>
                    </div>
                </>}
        </div>
    )
}

export default WeatherApp;