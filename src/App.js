import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';

// 1. 앱이 실행되자마자 -> use Effect
function App() {
  const weatherApiKey = process.env.REACT_APP_API_KEY;

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        getWeatherByCurrentLocation(lat, lon);
      });
    } else {
      console.log("not supported");
    }
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;
    let response = await fetch(url);
    let data = await response.json();
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <WeatherBox />
    </div >
  )
}

export default App;
