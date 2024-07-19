<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed } from 'vue';

const weatherStore = useWeatherStore()

const loading = computed(() => weatherStore.isLoading)
const error = computed(() => weatherStore.error)
const data = computed(() => weatherStore.current)
</script>

<template>
    <div class="flex flex-col bg-sky-600 bg-opacity-50 p-5 rounded-lg shadow-md text-white mt-5 grow">
        <div class="flex">
            <h1>AIR CONDITIONS</h1>
        </div>
        <div v-if="data && !loading && !error" class="flex grow mt-5">
            <div class="flex flex-col grow">
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">Real feel</span>
                    <span class="text-3xl">{{ data.current.feelslike_c }}&deg;</span>
                </div>
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">Humidity</span>
                    <span class="text-3xl">{{ data.current.humidity }}%</span>
                </div> 
            </div>
            <div class="flex flex-col grow">
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">Wind</span>
                    <span class="text-3xl">{{ data.current.wind_kph }} km/h</span>
                </div>
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">UV index</span>
                    <span class="text-3xl">{{ data.current.uv }}</span>
                </div> 
            </div>
        </div>
        <div v-if="loading">Loading</div>
        <div v-if="error && !loading">ERR</div>
    </div>
</template>
