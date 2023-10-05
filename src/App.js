import axios from 'axios';
import { useEffect , useState } from 'react';
import './App.css';
import Header from './components/header';

const URL = `https://api.openweathermap.org/data/3.0/onecall`;
const API_KEY = `94b99d4e2b4ad32bc3ad2a92fd802c7e`

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`)
    .then((weatherData) => {
      console.log(weatherData.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  } , [latitude, longitude])
  return (
    <div className='main'>
     <Header/>

    </div>
  );
}

export default App;
