// Predefined weather data for some cities
const weatherData = {
    hyderabad: {
        temp: 28,
        humidity: 70,
        wind: 4,
        condition: "Clear Sky"
    },
    mumbai: {
        temp: 31,
        humidity: 85,
        wind: 3,
        condition: "Humid & Cloudy"
    },
    delhi: {
        temp: 24,
        humidity: 55,
        wind: 5,
        condition: "Sunny"
    },
    bengaluru: {
        temp: 22,
        humidity: 65,
        wind: 2,
        condition: "Light Breeze"
    },
    chennai: {
        temp: 30,
        humidity: 80,
        wind: 4,
        condition: "Hot & Humid"
    }
};

function getWeather() {
    const cityInput = document.getElementById("city").value.trim().toLowerCase();

    if (cityInput === "") {
        alert("Enter a city name");
        return;
    }

    const cityWeather = weatherData[cityInput];

    if (!cityWeather) {
        document.getElementById("weatherResult").innerHTML =
            `<p style="color:red;">City not found in the list</p>`;
        return;
    }

    document.getElementById("weatherResult").innerHTML = `
        <h2>${cityInput.charAt(0).toUpperCase() + cityInput.slice(1)}</h2>
        <p>Temperature: <b>${cityWeather.temp}°C</b></p>
        <p>Humidity: <b>${cityWeather.humidity}%</b></p>
        <p>Wind: <b>${cityWeather.wind} m/s</b></p>
        <p>Condition: <b>${cityWeather.condition}</b></p>
    `;
}
