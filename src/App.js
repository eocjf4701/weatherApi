import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 -> use Effect
function App() {
  const weatherApiKey = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState(null);

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
      <div className='container'>
        <WeatherBox />
        <WeatherButton />
      </div>
    </div >
  )
}

export default App;
