import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const axiosInstance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
    headers: { 'Content-Type': 'application/json' }
})

export const apiService = {
    async fetchWeatherLocations(query) {
        try {
          const response = await axiosInstance.get(`/search.json?key=${API_KEY}&q=${query}`);
          return response.data;
        } catch (error) {
          console.error('API Error:', error);
          throw error;
        }
    },
    async fetchCurrentWeatherData(location) {
        try {
            const response = await axiosInstance.get(`/current.json?key=${API_KEY}&q=${location}`);
            return response.data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    async fetchForecastWeatherData(location) {
        try {
            const response = await axiosInstance.get(`/forecast.json?key=${API_KEY}&q=${location}&days=3`)
            return response.data
        } catch (error) {
            console.error('API Error:', error)
            throw error;
        }
    }
}