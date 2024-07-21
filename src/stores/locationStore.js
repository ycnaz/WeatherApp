import { defineStore } from "pinia";
import { ref } from "vue";
import { apiService } from '../api/apiService';

export const useLocationStore = defineStore('locationStore', () => {
    const suggestions = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchLocations = async (query) => {
        if (query.length > 2) {
            loading.value = true
            error.value = null
            try {
                const response = await apiService.fetchWeatherLocations(query)
                suggestions.value = response
            } catch (err) {
                error.value = err
            } finally {
                loading.value = false
            }
        } else {
            suggestions.value = []
        }
    }

    return { suggestions, loading, error, fetchLocations }
})