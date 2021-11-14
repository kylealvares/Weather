import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { degrees, windSpeed } from './converter';

const Weather = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const API_KEY = '89498a736c4173f3b201f336d0959e19'; 
    let [city, setCity] = useState('Toronto');
    const { data: current, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    const [isMetric, setIsMetric] = useState(true);
    const [input, setInput] = useState('Toronto');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.keyCode === 13) setCity(e.target.value);
    }

    return ( 
        <div className="weather">
            <div className="space-between vertical-align">
                <input type="text" className="city" onChange={e => setInput(e.target.value)} onKeyUp={handleSubmit} value={input}/>
                <img src="/media/Search.png" alt="search" />
            </div>
            <p className="date">{`${days[date.getDay()]}- ${months[date.getMonth()]} ${date.getDate()}`}</p>
            { current && <p className="temp">{ degrees(current.main.temp, isMetric) }°</p> }
            <div className="space-between">
                { current && <span className="desc">{current.weather[0].description}</span> }
                { current && <span className="range">
                    {`${ degrees(current.main.temp_min, isMetric)}° - ${ degrees(current.main.temp_max, isMetric)}°`}</span> }
            </div>
            { current && <p className="wind">{`Wind Speed: ${windSpeed(current.wind.speed)} km/h`}</p> }
            <ul className="system">
                <li>
                    <button className={ isMetric ? "selectedSystem" : "" }
                            onClick={() => setIsMetric(true)}>Celsius
                    </button>
                </li>
                <li>
                    <button className={ !isMetric ? "selectedSystem" : "" } 
                            onClick={() => setIsMetric(false)}>Fahrenheit
                    </button>
                </li>
            </ul>
        </div>
    );
}
 
export default Weather;