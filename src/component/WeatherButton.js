import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, getWeatherByCity }) => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>{' '}
      {cities.map((item, index) => (
        <Button key={index} onClick={() => getWeatherByCity(item)} variant="warning">{item}</Button>
      ))}
    </div>
  );
}

export default WeatherButton