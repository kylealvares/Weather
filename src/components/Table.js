import { useState } from "react";
import useFetch from '../hooks/useFetch';
import { degrees } from '../js/converter';

const Table = ({ apiKey, city, isMetric }) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const { data: current, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    const [input, setInput] = useState(city);

    function getTime(date) {
        if(date.getHours() < 12) {
            return date.getHours() === 0 ? '12 AM' : date.getHours() + ' AM'; 
        } else {
            let hour = date.getHours() - 12;
            return hour === 0 ? '12 PM' : hour + ' PM';
        }
    }

    return (
        <div className="table">
            <hr />
            {
                current && 
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Weather</th>
                            <th>Description</th>
                            <th>Temp</th>
                        </tr>
                    </thead>
                    <tbody>
                        { current.list.map((day, index) => (
                            <tr key={index}>
                                <td>{`${months[new Date(day.dt_txt).getMonth()]} ${new Date(day.dt_txt).getDate()}`}</td>
                                <td>{`${getTime(new Date(day.dt_txt))}`}</td>
                                <td>{ day.weather[0].main }</td>
                                <td>{ day.weather[0].description }</td>
                                <td>{ degrees(day.main.temp, isMetric) }°</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Table;