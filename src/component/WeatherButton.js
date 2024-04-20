import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, getWeatherByCity, getCurrentLocation }) => {
  return (
    <div>
      <Button variant="warning" onClick={() => getCurrentLocation()} className='button-child'>Current Location</Button>
      {cities.map((item, index) => (
        <Button key={index} onClick={() => getWeatherByCity(item)} variant="warning" className='button-child'>{item}</Button>
      ))}
    </div>
  );
}

export default WeatherButton