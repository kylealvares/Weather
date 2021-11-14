const kelvinToC = (kelvin) => {
    return Math.round(kelvin - 273.15);
} 

const kelvinToF = (kelvin) => {
    return Math.round((kelvin - 273.15) * 9/5 + 32);
} 

const degrees = (temp, isMetric) => {
    if(isMetric) 
        return kelvinToC(temp);
    return kelvinToF(temp)
}


// wind speed (m/s to km / h)
const windSpeed = (speed) => {
    return Math.round(speed * 3.6 * 10) / 10.0;
} 

export { 
    kelvinToC, 
    kelvinToF, 
    degrees,
    windSpeed 
};