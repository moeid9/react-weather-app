import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment';



export default function WeatherCard(
  { temperature, city, sunrise, sunset, humidity }) {

  return (
        <Card className='weather-card-main'>
        <Card.Content className='weather-card'>
          <Card.Header>{city}</Card.Header>

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
  