const API_KEY = "60c1b83a0c1b87f1f17d8a1cc1fda8c5";

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

