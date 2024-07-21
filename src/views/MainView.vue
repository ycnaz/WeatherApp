<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const SearchBar = defineAsyncComponent(() => import('../components/SearchBar.vue'))
const ForecastComp = defineAsyncComponent(() => import('../components/ForecastComp.vue'))
const HeaderData = defineAsyncComponent(() => import('../components/HeaderData.vue'))
const TodayForecast = defineAsyncComponent(() => import('../components/TodayForecast.vue'))
const AirConditions = defineAsyncComponent(() => import('../components/AirConditions.vue'))
const SpinnerComp = defineAsyncComponent(() => import('../assets/svg/spinner.svg'))

const weatherStore = useWeatherStore()

const loading = computed(() => weatherStore.isLoading)
</script>

<template>
    <div v-if="!loading" class="flex grow max-w-screen gap-x-5 ml-5">
      <div class="flex flex-col grow max-w-[1100px]">
        <SearchBar />
        <HeaderData />
        <TodayForecast />
        <AirConditions />
      </div>
      <ForecastComp />
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <SpinnerComp class="animate-spin w-96 h-96"/>
    </div>
</template>