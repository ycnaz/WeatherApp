<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const SunriseComp = defineAsyncComponent(() => import('../assets/svg/sunrise.svg')) 
const SunsetComp = defineAsyncComponent(() => import('../assets/svg/sunset.svg'))
const MoonriseComp = defineAsyncComponent(() => import('../assets/svg/moonrise.svg'))
const MoonsetComp = defineAsyncComponent(() => import('../assets/svg/moonset.svg'))

const weatherStore = useWeatherStore();

const data = computed(() => weatherStore.forecast)
</script>

<template>
    <div class="bg-sky-600 bg-opacity-35 flex flex-col grow w-auto max-w-[600px] h-auto rounded-lg p-5 shadow-md text-white">
        <span>SUN/MOON</span>
        <div class="flex flex-col h-full justify-around">
            <div class="flex justify-around">
                <div class="flex flex-col items-center">
                    <SunriseComp class="w-16 h-16"/>
                    <span>{{ data.forecast.forecastday[0].astro.sunrise }}</span>
                </div>
                <div class="flex flex-col items-center">
                    <SunsetComp class="w-16 h-16"/>
                    <span>{{ data.forecast.forecastday[0].astro.sunset }}</span>
                </div>
            </div>
            <div class="flex justify-around">
                <div class="flex flex-col items-center">
                    <MoonriseComp class="w-16 h-16"/>
                    <span>{{ data.forecast.forecastday[0].astro.moonset }}</span>
                </div>
                <div class="flex flex-col items-center">
                    <MoonsetComp class="w-16 h-16"/>
                    <span>{{ data.forecast.forecastday[0].astro.moonrise }}</span>
                </div>
            </div>
            <div class="flex justify-center gap-x-2">
                <span class="text-gray-300">Moon Phase:</span>
                <span>{{ data.forecast.forecastday[0].astro.moon_phase }}</span>
            </div>
        </div>
    </div>
</template>