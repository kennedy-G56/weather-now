import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

// Import background images of your choice
import sunnyBg from "../assets/backgrounds/sunny.jpg";
import cloudyBg from "../assets/backgrounds/cloudy.jpg";
import rainyBg from "../assets/backgrounds/rainy.jpg";
import snowBg from "../assets/backgrounds/snow.jpg";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // Determine background image based on weather your preffrence
  const getBgStyle = () => {
    if (!weatherData) return { backgroundColor: "#99c4e0" };

    const main = weatherData.weather[0].main.toLowerCase();

    if (main.includes("cloud")) return { backgroundImage: `url(${cloudyBg})` };
    if (main.includes("rain")) return { backgroundImage: `url(${rainyBg})` };
    if (main.includes("clear")) return { backgroundImage: `url(${sunnyBg})` };
    if (main.includes("snow")) return { backgroundImage: `url(${snowBg})` };

    return { backgroundColor: "#bfdbfe" };
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 bg-cover bg-center transition-all duration-700"
      style={getBgStyle()}
    >
      <h1 className="text-3xl font-bold mb-6 text-black drop-shadow-lg">
        Weather Now
      </h1>

      <SearchBar setCity={setCity} setWeatherData={setWeatherData} />

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}
