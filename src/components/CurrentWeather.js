import { degrees, windSpeed } from '../js/converter';

const CurrentWeather = ({ current, isMetric }) => {
    return (
        <div>
            <p className="temp">{degrees(current.main.temp, isMetric)}°</p>
            <div className="space-between">
                <span className="desc">{current.weather[0].description}</span>
                <span className="range">
                    {degrees(current.main.temp_min, isMetric)}° - {degrees(current.main.temp_max, isMetric)}°
                </span>
            </div>
            <p className="wind">{`Wind Speed: ${windSpeed(current.wind.speed)} km/h`}</p>
        </div>
    );
}

export default CurrentWeather;