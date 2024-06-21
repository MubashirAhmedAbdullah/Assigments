document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'c153479685c47f1b34a83591f3b1acbe';
    const citySelect = document.getElementById('city');
    const weatherDescription = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feels-like');
    const minTemp = document.getElementById('min-temp');
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');
    const windSpeed = document.getElementById('wind-speed');
    const windDirection = document.getElementById('wind-direction');
    const visibility = document.getElementById('visibility');
    const cloudiness = document.getElementById('cloudiness');
    const weatherIcon = document.getElementById('weather-icon');

    const cities = {
        "Makkah al Mukarramah": { lat: 21.4225, lon: 39.8262 },
        "Medina": { lat: 24.47498, lon: 39.6152},
        "Tokyo": { lat: 35.682839, lon: 139.759455 },
        "Beijing": { lat: 39.9042, lon: 116.4074 },
        "Mumbai": { lat: 19.0760, lon: 72.8777 },
        "Bangkok": { lat: 13.7563, lon: 100.5018 },
        "Jakarta": { lat: -6.2088, lon: 106.8456 },
        "Seoul": { lat: 37.5665, lon: 126.9780 },
        "Manila": { lat: 14.5995, lon: 120.9842 },
        "Karachi": { lat: 24.8607, lon: 67.0011 },
        "Kuala Lumpur": { lat: 3.1390, lon: 101.6869 },
        "Singapore": { lat: 1.3521, lon: 103.8198 },
        "Dhaka": { lat: 23.8103, lon: 90.4125 },
        "Hanoi": { lat: 21.0285, lon: 105.8542 },
        "Yangon": { lat: 16.8661, lon: 96.1951 },
        "Taipei": { lat: 25.0330, lon: 121.5654 },
        "Istanbul": { lat: 41.0082, lon: 28.9784 },
        "Tehran": { lat: 35.6892, lon: 51.3890 },
        "Baghdad": { lat: 33.3152, lon: 44.3661 },
        "Riyadh": { lat: 24.7136, lon: 46.6753 },
        "Jerusalem": { lat: 31.7683, lon: 35.2137 },
        "Lahore": { lat: 31.5497, lon: 74.3436 },
        "Islamabad": { lat: 33.6844, lon: 73.0479 },
        "Faisalabad": { lat: 31.4504, lon: 73.1350 },
        "Rawalpindi": { lat: 33.6007, lon: 73.0679 },
        "Multan": { lat: 30.1575, lon: 71.5249 },
        "Peshawar": { lat: 34.0151, lon: 71.5249 },
        "Quetta": { lat: 30.1798, lon: 66.9750 },
        "Sialkot": { lat: 32.4945, lon: 74.5229 },
        "Gujranwala": { lat: 32.1877, lon: 74.1945 },
        "Sargodha": { lat: 32.0836, lon: 72.6711 },
        "Bahawalpur": { lat: 29.3956, lon: 71.6836 },
        "Sukkur": { lat: 27.7032, lon: 68.8583 },
        "Larkana": { lat: 27.5551, lon: 68.2141 },
        "Sheikhupura": { lat: 31.7131, lon: 73.9783 },
        "Jhang": { lat: 31.2698, lon: 72.3189 },
        "Sahiwal": { lat: 30.6769, lon: 73.1068 },
        "Hyderabad": { lat: 25.3960, lon: 68.3578 },
        "Mardan": { lat: 34.1979, lon: 72.0409 },
        "Kasur": { lat: 31.1165, lon: 74.4460 }
    };

    const getWeatherIcon = (iconCode) => {
        return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    const updateWeather = (data) => {
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp}°C`;
        feelsLike.textContent = `${data.main.feels_like}°C`;
        minTemp.textContent = `${data.main.temp_min}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        pressure.textContent = `${data.main.pressure} hPa`;
        windSpeed.textContent = `${data.wind.speed} km/h`;
        windDirection.textContent = `${data.wind.deg}°`;
        visibility.textContent = `${data.visibility / 1000} km`;
        cloudiness.textContent = `${data.clouds.all}%`;
        weatherIcon.innerHTML = `<img src="${getWeatherIcon(data.weather[0].icon)}" alt="Weather Icon">`;
    };

    const fetchWeather = (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => updateWeather(data))
            .catch(err => console.error('Error fetching weather data:', err));
    };

    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        const { lat, lon } = cities[selectedCity];
        fetchWeather(lat, lon);
    });
    const defaultCity = citySelect.value;
    const { lat, lon } = cities[defaultCity];
    fetchWeather(lat, lon);
});
