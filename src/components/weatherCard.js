import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudRain, faSmog, faSnowman, faSun } from '@fortawesome/free-solid-svg-icons';



export default function WeatherCard(
  { temperature, city, sunrise, sunset, humidity, icon }) {
  let weatherIcons = null;

  if (icon === 'Haze') {
    weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" />
  }
  else if (icon === 'Thunderstorm') {
    weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" />
  }
  else if (icon === 'Drizzle') {
    weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" />
  }
  else if (icon === 'Rain') {
    weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" />
  }
  else if (icon === 'Snow') {
    weatherIcons = <FontAwesomeIcon icon={faSnowman} size="lg" />
  }
  else if (icon === 'Mist') {
    weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" />
  }
  else if (icon === 'Clear') {
    weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" />
  }
  else if (icon === 'Clouds') {
    weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" />
  }
  return (
        <Card className='weather-card-main'>
        <Card.Content className='weather-card'>
          <Card.Header>{city}</Card.Header>
          <div className='icon-container'>
            {weatherIcons}
          </div>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <h5 className='weather-card' >
                {moment().format('MMMM Do, h:mm a')}
                </h5>
                <div className='weather-card'>
                  <div className='weather-card-child'>
                    Temperature: {Math.floor(temperature)} °C
                  </div>
                  <div className='weather-card-child'>
                    Humidity: {humidity} %
                  </div>
                </div>
                <div className='weather-card'>
                  <div className='weather-card-child'>
                   Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                  </div>
                  <div className='weather-card-child'>
                  </div>
                </div>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    )

  }
  