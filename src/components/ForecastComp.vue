<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed } from 'vue';

const weatherStore = useWeatherStore()

const data = computed(() => weatherStore.forecast)

const formatDate = (date) => {
    const [year, month, day] = date.split('-')
    return `${month}/${day}`
}
</script>

<template>
    <div class="w-[600px] h-auto max-h-96 bg-sky-600 bg-opacity-50 rounded-lg shadow-md text-white">
        <div class="flex flex-col w-full h-full p-5">
            <h1>3-DAY FORECAST</h1>
            <div v-if="data" class="flex flex-col grow">
                <div v-for="day in data.forecast.forecastday" :key="day.date" class="flex justify-between items-center grow px-5 hover:bg-sky-700 transition-all">
                    <span>{{ formatDate(day.date) }}</span>
                    <div class="flex items-center">
                        <img :src="day.day.condition.icon">
                        <span>{{ day.day.condition.text }}</span>
                    </div>
                    <div>
                        <span>{{ day.day.maxtemp_c }}/</span>
                        <span class="text-gray-300">{{ day.day.mintemp_c }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>