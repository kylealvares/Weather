import { useState } from 'react';

import Weather from './Weather';
import Graph from './Graph';

const Home = () => {

    const API_KEY = '89498a736c4173f3b201f336d0959e19'; 
    const [city, setCity] = useState('Toronto');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.keyCode === 13) 
            setCity(e.target.value);
    }

    return (
        <div className="home">
            <Weather 
                apiKey={ API_KEY } 
                city={ city }
                handleSubmit={ handleSubmit } 
            />
            <Graph 
                apiKey={ API_KEY } 
                city={ city }
            />
        </div>
    );
}
 
export default Home;