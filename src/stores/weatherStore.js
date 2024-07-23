import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { apiService } from '../api/apiService';

export const useWeatherStore = defineStore('weatherStore', () => {
    const current = ref(null)
    const forecast = ref(null)
    const isLoading = ref(false)
    const forecastLoading = ref(false)
    const error = ref(null)
    const forecastError = ref(null)

    const randomize = Math.floor(Math.random() * 9)
    const initFetchCities = ['new-york', 'istanbul', 'tokyo', 'berlin', 'moscow', 'sydney', 'paris', 'barcelona', 'dubai']

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

    const refreshDataWhenError = () => {
        fetchCurrentWeatherData(initFetchCities[randomize])
        fetchForecastWeatherData(initFetchCities[randomize])
    }

    onMounted(() => {
        fetchCurrentWeatherData(initFetchCities[randomize])
        fetchForecastWeatherData(initFetchCities[randomize])
    })

    return {
        current,
        forecast,
        isLoading,
        forecastLoading,
        error,
        forecastError,
        fetchCurrentWeatherData,
        fetchForecastWeatherData,
        refreshDataWhenError,
    }
})
