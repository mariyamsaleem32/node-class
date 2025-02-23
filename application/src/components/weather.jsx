import { useState } from 'react';
import '../index.css'
function WeatherApp() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getWeather = (event) => {
    event.preventDefault();
    fetch(`/${cityName}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setError('');
      })
      .catch(error => {
        console.error('Error:', error);
        setWeatherData(null);
        setError(`City ${cityName} not found`);
      });
  };

  return (
  <div className='main'>
      <h1>Weather App</h1>
      <form onSubmit={getWeather}>
        <label htmlFor="cityName">
          City Name:
          <input
            type="text"
            id="cityName"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>
        <br /><br />
        <button type="submit">Get weather</button>
      </form>
      <div id="result">
        {weatherData ? (
          <>
            <h2>{weatherData.city}</h2>
            <p>Temperature: {weatherData.tempInC}°C</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>High: {weatherData.high}°C</p>
            <p>Low: {weatherData.low}°C</p>
          </>
        ) : error ? (
          <>
            <h2>Error</h2>
            <p>{error}</p>
          </>
        ) : (
          <p>Weather data will be displayed here</p>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
