import { defineStore } from "pinia";
import { ref } from "vue";
import { apiService } from '../api/apiService';

export const useWeatherStore = defineStore('weatherStore', () => {
    const current = ref(null)
    const forecast = ref(null)
    const isLoading = ref(false)
    const forecastLoading = ref(false)
    const error = ref(null)
    const forecastError = ref(null)

    const fetchCurrentWeatherData = async (location) => {
        isLoading.value = true
        error.value = null

        try {
            const weatherData = await apiService.fetchCurrentWeatherData(location)
            current.value = weatherData
        } catch (err) {
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    const fetchForecastWeatherData = async (location) => {
        forecastLoading.value = true
        forecastError.value = null

        try {
            const weatherData = await apiService.fetchForecastWeatherData(location)
            forecast.value = weatherData
        } catch (err) {
            forecastError.value = err
        } finally {
            forecastLoading.value = false
        }
    }

    return {
        current,
        forecast,
        isLoading,
        forecastLoading,
        error,
        forecastError,
        fetchCurrentWeatherData,
        fetchForecastWeatherData,
    }
})
/* HTML: <div class="loader"></div> */
// .loader {
//     width: 50px;
//     aspect-ratio: 1;
//     border-radius: 50%;
//     border: 8px solid;
//     border-color: #000 #0000;
//     animation: l1 1s infinite;
//   }
//   @keyframes l1 {to{transform: rotate(.5turn)}}