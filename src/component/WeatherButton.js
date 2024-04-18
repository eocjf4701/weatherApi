import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ getWeatherByCity }) => {
  const handleCityClick = (city) => {
    // App.js 함수
    getWeatherByCity(city);
  };

  return (
    <div>
      <Button variant="warning">Current Location</Button>{' '}
      <Button variant="warning" onClick={() => handleCityClick('paris')} >paris</Button>{' '}
      <Button variant="warning" onClick={() => handleCityClick('new york')} >new york</Button>{' '}
    </div>
  )
}

export default WeatherButton