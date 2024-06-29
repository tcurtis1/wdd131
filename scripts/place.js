document.addEventListener("DOMContentLoaded", function() {
    // Simulated weather data
    const weatherData = {
        temperature: -12, // in Celsius
        windSpeed: 5, // in km/h
        conditions: "Partly Cloudy"
    };

    // Calculate wind chill
    function calculateWindChill(temp, windSpeed) {
        if (temp === null || windSpeed === null) {
            return "n/a";
        }
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + " °C";
    }

    // Update the weather information on the page
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    temperatureElement.textContent = weatherData.temperature !== null ? weatherData.temperature + " °C" : "n/a";
    windSpeedElement.textContent = weatherData.windSpeed !== null ? weatherData.windSpeed + " km/h" : "n/a";
    windChillElement.textContent = calculateWindChill(weatherData.temperature, weatherData.windSpeed);

    // Update the conditions
    document.getElementById('conditions').textContent = weatherData.conditions;

    // Update the last modification date
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modification').textContent = lastModified.toLocaleString();
});
