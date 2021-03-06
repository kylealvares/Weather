import { useState } from 'react';
import CurrentWeather from './CurrentWeather';

const Weather = ({ city, isMetric, handleSubmit, handleClick, current, isPending, error }) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();

    const [input, setInput] = useState(city);
    
    return ( 
        <div className="weather">
            <div className="space-between vertical-align">
                <input type="text" className="city" onChange={e => setInput(e.target.value)} onKeyUp={e => {handleSubmit(e)}} value={input}/>
                <img src="/media/Search.png" alt="search" />
            </div>
            <p className="date">{`${days[date.getDay()]}- ${months[date.getMonth()]} ${date.getDate()}`}</p>
            { isPending && <p>Loading...</p> }
            { error && <p className="invalid-location">Please enter a valid location.</p>}
            { current && <CurrentWeather current={ current } isMetric= { isMetric } /> }
            <ul className="system">
                <li>
                    <button className={ isMetric ? "selectedSystem" : "" }
                            onClick={() => handleClick(true)}>Celsius
                    </button>
                </li>
                <li>
                    <button className={ !isMetric ? "selectedSystem" : "" } 
                            onClick={() => handleClick(false)}>Fahrenheit
                    </button>
                </li>
            </ul>
        </div>
    );
}
 
export default Weather;