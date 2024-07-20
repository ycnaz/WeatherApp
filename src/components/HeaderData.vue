<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { useTempScaleStore } from '@/stores/tempScaleStore';

const tempStore = useTempScaleStore()
const isCelsius = computed(() => tempStore.celsius)

const weatherStore = useWeatherStore();
const loading = computed(() => weatherStore.isLoading)
const error = computed(() => weatherStore.error)
const data = computed(() => weatherStore.current)
</script>

<template>
    <div>
        <div v-if="data" class="flex justify-between items-center py-5">
            <div class="flex flex-col">
                <h1 class="text-6xl">{{ data.location.name }}</h1>
                <h2>{{ data.location.country }}</h2>
                <img class="w-24 h-24" :src="data.current.condition.icon">
            </div>
            <span class="text-8xl">{{ isCelsius ? data.current.temp_c : data.current.temp_f }}&deg;</span>
        </div>
        <div v-else-if="!data && !loading && !error" class="flex justify-between items-center py-5">
            <div class="flex flex-col">
                <h1 class="text-6xl">Barcelona</h1>
                <span class="text-left">Chance of rain: 0%</span><br>
                <img class="w-24 h-24" src="//cdn.weatherapi.com/weather/64x64/day/113.png">
            </div>
        </div> <!-- remove after development -->
    </div>
</template>