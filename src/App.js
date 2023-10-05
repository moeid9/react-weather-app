import axios from 'axios';
import { useEffect , useState } from 'react';
import './App.css';
import Header from './components/header';
import WeatherCard from './components/weatherCard';
import Forecast from './components/forecast';

const URL = `https://api.openweathermap.org/data/3.0/onecall`;
const API_KEY = `94b99d4e2b4ad32bc3ad2a92fd802c7e`

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [icon, setIcon] = useState('');
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`)
    .then((weatherData) => {
      console.log(weatherData.data);
      setTemperature(weatherData.data.current.temp)
      setSunset(weatherData.data.current.sunset)
      setSunrise(weatherData.data.current.sunrise)
      setHumidity(weatherData.data.current.humidity)
      setCity(weatherData.data.timezone)
      setIcon(weatherData.data.current.weather[0].main)
      setForecast(weatherData.data.daily)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  } , [latitude, longitude])
  return (
    <div className='main'>
     <Header/>
     <WeatherCard 
      temperature={temperature}
      sunrise={sunrise}
      sunset={sunset}
      humidity={humidity}
      city={city}
      icon={icon}
     />
     <Forecast forecast={forecast}/>
    </div>
  );
}

export default App;
