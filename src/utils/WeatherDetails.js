export async function getWeatherDetails(city) {
    if (!city) {
        throw new Error("City parameter is required");
    }

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Return only necessary details
        return {
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };
    } catch (error) {
        return { error: error.message };
    }
}
