import { useState, useEffect } from 'react';

import Weather from './Weather';
import Graph from './Graph';

const Home = () => {

    // const [city, setCity] = useState('Toronto');

    // useEffect()

    return (
        <div className="home">
            <Weather />
            <Graph />
        </div>
    );
}
 
export default Home;