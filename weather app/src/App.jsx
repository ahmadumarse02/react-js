import React, { useState } from "react";

const APIKYE = "34122d2378ae4d9a88072057241711";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${APIKYE}&q=${city}&aqi=yes`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city) {
      getData(city);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 text-white">
      {/* Title Card */}
      <div className="text-center mb-6">
        <p className="text-4xl font-bold text-blue-400">Weather APP</p>
        <p className="text-gray-400 text-sm mt-2">
          Get the weather details of any city
        </p>
      </div>

      {/* Search Card */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 bg-gray-900 rounded-lg mr-4 w-64"
          placeholder="Enter your city"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Search
        </button>
      </div>

      {/* Weather Info Card */}
      {weatherData && (
        <div className="flex flex-col items-center bg-blue-900 p-6 rounded-lg min-w-80 mt-8">
          <div className="flex items-center mb-4">
            <p className="text-xl">
              {weatherData.location.name}, {weatherData.location.region}
            </p>
            <p className="ml-2 bg-orange-600 text-xs text-white px-3 py-1 rounded-full">
              {weatherData.location.country}
            </p>
          </div>

          <div className="flex flex-col items-center mb-4">
            <p className="text-6xl font-bold">
              {weatherData.current.temp_c}
              <sup className="text-xl">°C</sup>
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt={weatherData.current.condition.text}
            />
            <p className="text-center text-xl font-bold">{weatherData.current.condition.text}</p>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-xl font-bold space-x-1">{weatherData.current.wind_mph}<span className="text-lg">mph</span></p>
          </div>
          <p className="italic text-sm">{weatherData.location.localtime}</p>
          {/* <p>{weatherData.current.is_day}</p> */}
        </div>
      )}

      {/* Loading State */}
      {loading && <p className="mt-4 text-lg text-gray-300">Loading...</p>}
    </div>
  );
}

export default App;
