<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed } from 'vue';

const weatherStore = useWeatherStore()

const data = computed(() => weatherStore.forecast)

const formatHour = (rawTime) => {
    const [date, time] = rawTime.split(' ')
    return `${time}`
}
</script>

<template>
    <div class="flex flex-col bg-sky-600 bg-opacity-50 max-w-[900px] overflow-x-auto h-auto max-h-56 rounded-lg shadow-md p-5 text-white">
        <h1>TODAY'S FORECAST</h1>
        <div v-if="data" class="flex gap-x-5 grow">
            <div v-for="hour in data.forecast.forecastday[0].hour" :key="hour.time_epoch" class="flex flex-col items-center justify-center grow rounded-lg hover:bg-sky-700 transition-all">
                <span class="text-gray-300">{{ formatHour(hour.time) }}</span>
                <img :src="hour.condition.icon">
                <span class="text-4xl">{{ hour.temp_c }}&deg;</span>
            </div>
        </div>
    </div>
</template>