import useFetch from '../hooks/useFetch';
import { degrees } from '../js/converter';
import { defaults, Line } from 'react-chartjs-2';

// https://stackoverflow.com/questions/61129817/change-chart-js-legend-text

const Graph = ({ apiKey, isMetric, current }) => {

    const weekdays = ['Sun', 'Mon', 'Tues', 'Thurs', 'Fri', 'Sat'];
    const date = new Date();
    let labels = [];
    for (let i = date.getDay(); i < 7; i++) labels.push(weekdays[i % 7]);

    console.log(current);

    const { data, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${current ? current.coord.lat : 43.8668}&lon=${current ? current.coord.lon : -79.2663}&exclude={part}&appid=${apiKey}`);

    // chart.js config
    defaults.color = 'black';
    defaults.font.family = "'Satoshi', sans-serif";

    return (
        <div className="graph">
            { (data) &&
                <Line
                    height={400}
                    width={700}
                    data={{
                        labels,
                        datasets: [{
                            label: 'Weekly Forecast',
                            data: [
                                degrees(data.current.temp, isMetric),
                                degrees(data.daily[0].temp.day, isMetric),
                                degrees(data.daily[1].temp.day, isMetric),
                                degrees(data.daily[2].temp.day, isMetric),
                                degrees(data.daily[3].temp.day, isMetric),
                                degrees(data.daily[4].temp.day, isMetric),
                                degrees(data.daily[5].temp.day, isMetric),
                                degrees(data.daily[6].temp.day, isMetric)
                            ],
                            fill: false,
                            borderColor: 'black',
                            tension: 0.1
                        }]
                    }}
                />
            }
        </div>
    );
}

export default Graph;