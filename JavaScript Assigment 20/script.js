document.addEventListener("DOMContentLoaded", function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherByCoords(latitude, longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});

function getWeatherByCoords(latitude, longitude) {
    const apiKey = 'c153479685c47f1b34a83591f3b1acbe';
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
    const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

    fetch(weatherEndpoint)
        .then(response => response.json())
        .then(data => {
            updateCurrentWeather(data);
        })
        .catch(error => console.error('Error fetching current weather:', error));

    fetch(forecastEndpoint)
        .then(response => response.json())
        .then(data => {
            updateHourlyForecast(data);
        })
        .catch(error => console.error('Error fetching hourly forecast:', error));
}

function getWeatherByLocation() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'c153479685c47f1b34a83591f3b1acbe';
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
    const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

    fetch(weatherEndpoint)
        .then(response => response.json())
        .then(data => {
            updateCurrentWeather(data);
        })
        .catch(error => console.error('Error fetching current weather:', error));

    fetch(forecastEndpoint)
        .then(response => response.json())
        .then(data => {
            updateHourlyForecast(data);
        })
        .catch(error => console.error('Error fetching hourly forecast:', error));
}

function updateCurrentWeather(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const temperatureFahrenheit = Math.round(data.main.temp);
    const temperatureCelsius = Math.round((temperatureFahrenheit - 32) * 5 / 9);
    const feelsLikeFahrenheit = Math.round(data.main.feels_like);
    const feelsLikeCelsius = Math.round((feelsLikeFahrenheit - 32) * 5 / 9);
    const description = data.weather[0].main;
    const highFahrenheit = Math.round(data.main.temp_max);
    const highCelsius = Math.round((highFahrenheit - 32) * 5 / 9);
    const lowFahrenheit = Math.round(data.main.temp_min);
    const lowCelsius = Math.round((lowFahrenheit - 32) * 5 / 9);
    const wind = `${Math.round(data.wind.speed)} mph`;
    const humidity = `${data.main.humidity}%`;
    const uvIndex = 'N/A'; 

    document.querySelector(".header h2").textContent = location;
    document.querySelector(".header p").textContent = date;
    document.querySelector(".current-weather .temperature").innerHTML = `${temperatureCelsius}°C <i class="fas fa-sun"></i>`;
    document.querySelector(".current-weather .feels-like").textContent = `Feels Like: ${feelsLikeCelsius}°C`;
    document.querySelector(".current-weather .description").textContent = description;
    document.querySelector(".current-weather .details").textContent = `High: ${highCelsius}°C / Low: ${lowCelsius}°C`;
    document.querySelector(".current-weather .additional-details").textContent = `Wind: ${wind} | Humidity: ${humidity} | UV Index: ${uvIndex}`;
}

function updateHourlyForecast(data) {
    const hourlyData = data.list.slice(0, 7);
    const hourlyForecastContainer = document.querySelector(".hourly-forecast");

    hourlyForecastContainer.innerHTML = "";

    hourlyData.forEach(hour => {
        const time = new Date(hour.dt * 1000);
        const hourFormatted = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        const temperatureFahrenheit = Math.round(hour.main.temp);
        const temperatureCelsius = Math.round((temperatureFahrenheit - 32) * 5 / 9);
        const icon = getWeatherIcon(hour.weather[0].icon);

        const hourCard = document.createElement("div");
        hourCard.classList.add("hour-card");
        hourCard.innerHTML = `
            <div>${hourFormatted}</div>
            <div>${temperatureCelsius}°C</div>
            <div><i class="fas ${icon}"></i></div>
        `;
        hourlyForecastContainer.appendChild(hourCard);
    });
}

function getWeatherIcon(iconCode) {
    const iconMap = {
        "01d": "fa-sun",
        "01n": "fa-moon",
        "02d": "fa-cloud-sun",
        "02n": "fa-cloud-moon",
        "03d": "fa-cloud",
        "03n": "fa-cloud",
        "04d": "fa-cloud",
        "04n": "fa-cloud",
        "09d": "fa-cloud-showers-heavy",
        "09n": "fa-cloud-showers-heavy",
        "10d": "fa-cloud-sun-rain",
        "10n": "fa-cloud-moon-rain",
        "11d": "fa-bolt",
        "11n": "fa-bolt",
        "13d": "fa-snowflake",
        "13n": "fa-snowflake",
        "50d": "fa-smog",
        "50n": "fa-smog"
    };

    return iconMap[iconCode] || "fa-question";
}