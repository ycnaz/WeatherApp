<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed } from 'vue';
import { useTempScaleStore } from '@/stores/tempScaleStore';

const weatherStore = useWeatherStore()

const tempStore = useTempScaleStore()
const isCelsius = computed(() => tempStore.celsius)

const data = computed(() => weatherStore.forecast)

const formatDate = (date) => {
    const [, month, day] = date.split('-')
    return `${month}/${day}`
}
</script>

<template>
    <div class="flex grow w-auto max-w-full h-auto bg-sky-600 bg-opacity-35 rounded-lg shadow-md text-white lg:min-w-[384px]">
        <div class="flex flex-col w-full h-full p-5">
            <h1>3-DAY FORECAST</h1>
            <div v-if="data" class="flex flex-col grow">
                <div v-for="(day, index) in data.forecast.forecastday" :key="day.date" :class="['flex justify-between items-center grow px-5 hover:bg-sky-500 max-sm:px-0 transition-all', index < data.forecast.forecastday.length - 1 ? 'border-b border-white' : '']">
                    <span>{{ formatDate(day.date) }}</span>
                    <div class="flex items-center max-sm:flex-col">
                        <img :src="day.day.condition.icon">
                        <span class="min-w-max">{{ day.day.condition.text }}</span>
                    </div>
                    <div>
                        <span>{{ Math.round(isCelsius ? day.day.maxtemp_c : day.day.maxtemp_f) }}&deg;/</span>
                        <span class="text-gray-300">{{ Math.round(isCelsius ? day.day.mintemp_c : day.day.mintemp_f) }}&deg;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>