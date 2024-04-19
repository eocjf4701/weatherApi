import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities }, { getWeatherByCity }) => {
  console.log("cities? ", cities);

  return (
    <div>
      <Button variant="warning">Current Location</Button>{' '}

      {/* <Button variant="warning">paris</Button>{' '} */}
      {cities.map((item) => (
        <Button variant="warning">{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton