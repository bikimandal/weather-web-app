export async function getWeatherDetails(city) {
  if (!city) {
    throw new Error("City parameter is required");
  }

  const API_KEY = "06c921750b9a82d8f5d1294e1586276f";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Convert temperature from Kelvin to Celsius
    const temperatureInCelsius = (data.main.temp - 273.15).toFixed(2);

    // Return only necessary details
    return {
      city: data.name,
      temperature: temperatureInCelsius,
      weather: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  } catch (error) {
    return { error: error.message };
  }
}
