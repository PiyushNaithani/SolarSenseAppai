// services/weather.ts
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  return response.data;
};
