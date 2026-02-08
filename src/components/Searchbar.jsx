import React, { useState } from "react";
import { getWeather } from "../services/weatherApi";

export default function SearchBar({ setCity, setWeatherData }) {
  const [input, setInput] = useState("");

  const handleSearch = async () => {
    if (!input) return;
    setCity(input);

    const data = await getWeather(input);
    setWeatherData(data);
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city..."
        className="px-4 py-2 rounded-lg border border-gray-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg  hover:bg-blue-700 hover:scale-105 transition duration-300 "
      >
        Search
      </button>
    </div>
  );
}
