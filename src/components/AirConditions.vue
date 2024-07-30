<script setup>
import { useWeatherStore } from '@/stores/weatherStore';
import { computed, defineAsyncComponent } from 'vue';
import { useTempScaleStore } from '@/stores/tempScaleStore';

const HumidityComp = defineAsyncComponent(() => import('../assets/svg/humidity.svg'))
const TemperatureComp = defineAsyncComponent(() => import('../assets/svg/temperature.svg'))
const SunComp = defineAsyncComponent(() => import('../assets/svg/sun.svg'))
const WindComp = defineAsyncComponent(() => import('../assets/svg/wind.svg'))

const tempStore = useTempScaleStore()
const isCelsius = computed(() => tempStore.celsius)

const weatherStore = useWeatherStore()

const data = computed(() => weatherStore.current)
</script>

<template>
    <div class="flex flex-col w-auto shrink bg-sky-600 bg-opacity-35 p-5 rounded-lg shadow-md text-white mt-5 grow sm:max-h-[278px]">
        <div class="flex self-start">
            <h1>AIR CONDITIONS</h1>
        </div>
        <div v-if="data" class="flex grow mt-5 max-[400px]:flex-col max-[400px]:items-center">
            <div class="flex flex-col grow">
                <div class="flex flex-col px-5">
                    <div class="flex items-center gap-x-2">
                        <TemperatureComp class="w-7 h-7" />
                        <span class="text-gray-300 text-xl">Real feel</span>
                    </div>
                    <span class="text-3xl pl-9 max-sm:text-xl">{{ Math.round(isCelsius ? data.current.feelslike_c : data.current.feelslike_f) }}&deg;</span>
                </div>
                <div class="flex flex-col px-5">
                    <div class="flex items-center gap-x-2">
                        <HumidityComp class="w-7 h-7" />
                        <span class="text-gray-300 text-xl">Humidity</span>
                    </div>
                    <span class="text-3xl pl-9 max-sm:text-xl">{{ data.current.humidity }}%</span>
                </div> 
            </div>
            <div class="flex flex-col grow">
                <div class="flex flex-col px-5">
                    <div class="flex items-center gap-x-2">
                        <WindComp class="w-7 h-7" />
                        <span class="text-gray-300 text-xl">Wind</span>
                    </div>
                    <span class="text-3xl pl-9 max-sm:text-xl min-w-max">{{ isCelsius ? data.current.wind_kph : data.current.wind_mph }} {{ tempStore.celsius ? 'km/h' : 'mi/h' }}</span>
                </div>
                <div class="flex flex-col px-5">
                    <div class="flex items-center gap-x-2">
                        <SunComp class="w-7 h-7" />
                        <span class="text-gray-300 text-xl">UV</span>
                    </div>
                    <span class="text-3xl pl-9 max-sm:text-xl">{{ data.current.uv }}</span>
                </div> 
            </div>
        </div>
    </div>
</template>
