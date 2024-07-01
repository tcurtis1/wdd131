document.addEventListener("DOMContentLoaded", function() {
    // static weather data
    const weatherData = {
        temperature: -12, // in Celsius because it's s.america
        windSpeed: 5, // in km/h to match country
        conditions: "Partly Cloudy"
    };

    // Calculate wind chill - hope i got this righto
    function calculateWindChill(temp, windSpeed) {
        if (temp === null || windSpeed === null) {
            return "n/a";
        }
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + " °C";
    }

   
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    temperatureElement.textContent = weatherData.temperature !== null ? weatherData.temperature + " °C" : "n/a";
    windSpeedElement.textContent = weatherData.windSpeed !== null ? weatherData.windSpeed + " km/h" : "n/a";
    windChillElement.textContent = calculateWindChill(weatherData.temperature, weatherData.windSpeed);

    // Update the conditions from weatherData array above
    document.getElementById('conditions').textContent = weatherData.conditions;

    // Update the last modification date - using this instead of existing js
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modification').textContent = lastModified.toLocaleString();
});
