import React, { useState } from 'react';

export default function Dashboard() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const getData = async () => {
    if (!cityName) {
      setError('Please enter a city name');
      return;
    }
    
    try {
      const response = await fetch(`http://192.168.100.18:3000/weather/${cityName.toLowerCase()}`);
      
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(''); // Clear any previous errors
      } else {
        const data = await response.json();
        setError(data.message);
        setWeatherData(null);
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      setWeatherData(null);
    }
  };

  return (
    <>
      <h1>WeatherNow</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button type="button" onClick={getData}>Get Weather</button>
      
      <div className="data">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weatherData && (
          <div>
            <h2>{weatherData.city}</h2>
            <p>Temperature: {weatherData.tempInC}°C</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>High: {weatherData.high}°C</p>
            <p>Low: {weatherData.low}°C</p>
          </div>
        )}
      </div>
    </>
  );
}
