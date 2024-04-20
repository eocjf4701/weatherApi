import { useEffect, useState, CSSProperties } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 -> use Effect
function App() {
  const weatherApiKey = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState(null);
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

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
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async (city) => {
    console.log("city : ", city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  };


  useEffect(() => {
    setLoading(true);
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className='container'>
        {loading ? (
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <WeatherBox weather={weather} />
            <WeatherButton cities={cities} getWeatherByCity={getWeatherByCity} getCurrentLocation={getCurrentLocation} />
          </>
        )}
      </div>
    </div >
  )
}

export default App;
