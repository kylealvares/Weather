import { useState } from 'react';

import Weather from './Weather';
import Graph from './Graph';
import Table from './Table';

const Home = () => {

    const API_KEY = '89498a736c4173f3b201f336d0959e19'; 

    const [city, setCity] = useState('Toronto');
    const [isMetric, setIsMetric] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.keyCode === 13) 
            setCity(e.target.value);
    }

    const handleClick = (value) => {
        setIsMetric(value);
    }

    return (
        <div className="content">
            <div className="home">
                <Weather 
                    apiKey={ API_KEY } 
                    city={ city }
                    isMetric = { isMetric }
                    handleSubmit={ handleSubmit }
                    handleClick={ handleClick } 
                />
                <Graph apiKey={ API_KEY } isMetric={ isMetric } />
            </div>
            <Table 
                apiKey={ API_KEY } 
                city={ city }
                isMetric={ isMetric }
            />
        </div>
    );
}
 
export default Home;