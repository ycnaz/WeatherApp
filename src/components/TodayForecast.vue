<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed, defineAsyncComponent } from 'vue';
import { useTempScaleStore } from '@/stores/tempScaleStore';

const DropComp = defineAsyncComponent(() => import('../assets/svg/drop.svg'))

const tempStore = useTempScaleStore()
const isCelsius = computed(() => tempStore.celsius)

const weatherStore = useWeatherStore()

const data = computed(() => weatherStore.forecast)

const formatHour = (rawTime) => {
    const [, time] = rawTime.split(' ')
    return `${time}`
}
</script>

<template>
    <div class="flex flex-col bg-sky-600 bg-opacity-35 w-full overflow-y-hidden h-56 px-5 rounded-lg shadow-md pt-5 shrink-0 text-white scroll-smooth">
        <h1>TODAY'S FORECAST</h1>
        <div v-if="data" class="flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-thumb-sky-200 pb-3">
            <div v-for="(hour, index) in data.forecast.forecastday[0].hour" :key="hour.time_epoch" :class="['flex flex-col w-32 h-40 shrink-0 items-center justify-center hover:bg-sky-500 transition-all', index < data.forecast.forecastday[0].hour.length - 1 ? 'border-r border-white' : '']">
                <span class="text-gray-300">{{ formatHour(hour.time) }}</span>
                <img loading="lazy" :src="hour.condition.icon">
                <span class="text-4xl">{{ Math.round(isCelsius ? hour.temp_c : hour.temp_f) }}&deg;</span>
                <div class="group flex items-center relative">
                    <DropComp class="w-5 h-5" />
                    <span>{{ hour.chance_of_rain }}%</span>
                    <span class="group-hover:scale-100 absolute -top-2 left-20 scale-0 p-2 min-w-max z-30 bg-yellow-500 rounded-lg transition-all duration-100 origin-left">Chance of rain</span>
                </div>
            </div>
        </div>
    </div>
</template>
