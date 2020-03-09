import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDetails = ({ filteredCountryObj }) => {
  const [weather, setWeather] = useState();
  const weatherStackURL = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_API}`

  useEffect(() => {
    axios.get(`${weatherStackURL}&query=${filteredCountryObj.name}`)
      .then(response => setWeather(response.data))
  }, [])

  return (
    <div>
      {weather && (
        <div>
          <h2>Weather in {weather.location.name}</h2>
          <p>
            <b>Temperature: </b> {weather.current.temperature} Celcius 
            <br />
            <img src={weather.current.weather_icons} alt={weather.current.weather_descriptions}/>
            <br />
            <b>Wind: </b> {weather.current.wind_speed} kph direction {weather.current.wind_dir} 
          </p>
        </div>
      )}
    </div>
  )
}

export default WeatherDetails;
