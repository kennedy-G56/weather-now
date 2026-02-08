import React from "react";

export default function WeatherCard({ data }) {
  // Get icon code from API
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="mt-6 shadow-lg rounded-2xl p-6 w-80 text-center bg-white">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>

      <img src={iconUrl} alt={data.weather[0].description} className="mx-auto" />

      <p className="text-lg text-gray-600 mb-2">
        {data.weather[0].main} - {data.weather[0].description}
      </p>

      <p className="text-5xl font-bold mb-4">{Math.round(data.main.temp)}°C</p>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>

        <div>
          <p className="font-semibold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>

        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(data.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
}
