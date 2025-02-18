"use client";

import React, { useState } from "react";
import { getWeatherDetails } from "@/utils/WeatherDetails";

export default function MainScreen() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [previousCity, setPreviousCity] = useState(null);

  async function fetchWeather() {
    if (city.trim() === "" || city === previousCity) return;
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const weatherData = await getWeatherDetails(city);
      if (weatherData.error) throw new Error(weatherData.error);
      setData(weatherData);
      setPreviousCity(city);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
        🌤️ Weather App
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-96">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          className="flex-1 p-3 text-lg text-white bg-white/30 backdrop-blur-md border border-white/20 rounded-xl outline-none focus:ring-4 focus:ring-white/50 placeholder-white text-center w-full sm:w-auto"
        />
        <button
          onClick={fetchWeather}
          className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition hover:bg-white/30 transform transition duration-200 hover:scale-105 active:scale-95 p-4 bg-blue-500 text-white rounded-lg focus:outline-none"
        >
          Search 🔍
        </button>
      </div>
      {loading && (
        <div className="mt-4 flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-t-4 border-transparent border-t-white border-solid rounded-full animate-spin"></div>
        </div>
      )}
      {error && <p className="text-red-300 mt-4">{error}</p>}
      {data && (
        <div className="mt-8 bg-white/20 p-6 rounded-xl shadow-lg backdrop-blur-lg w-full md:w-96 text-center text-white">
          <h2 className="text-2xl font-semibold">{data.city}</h2>
          <p className="text-lg mt-1">{data.weather}</p>
          <h3 className="text-5xl font-bold mt-2">{data.temperature}°C</h3>
          <p className="mt-3">Humidity: {data.humidity}%</p>
          <p>Wind Speed: {data.windSpeed} m/s</p>
        </div>
      )}
    </div>
  );
}
