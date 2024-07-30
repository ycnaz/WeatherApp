<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { useTempScaleStore } from '@/stores/tempScaleStore';

const tempStore = useTempScaleStore()
const isCelsius = computed(() => tempStore.celsius)

const weatherStore = useWeatherStore();
const data = computed(() => weatherStore.current)
</script>

<template>
    <div v-if="data" class="flex justify-between w-auto grow shrink items-center py-5">
        <div class="flex flex-col">
            <h1 class="text-6xl min-w-max max-sm:text-5xl">{{ data.location.name }}</h1>
            <h2 class="mt-1">{{ data.location.country }}</h2>
            <img class="w-24 h-24" :src="data.current.condition.icon">
        </div>
        <span class="text-8xl max-sm:text-7xl">{{ Math.round(isCelsius ? data.current.temp_c : data.current.temp_f) }}&deg;</span>
    </div>
</template>