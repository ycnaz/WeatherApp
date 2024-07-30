<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const SearchBar = defineAsyncComponent(() => import('../components/SearchBar.vue'))
const ForecastComp = defineAsyncComponent(() => import('../components/ForecastComp.vue'))
const HeaderData = defineAsyncComponent(() => import('../components/HeaderData.vue'))
const TodayForecast = defineAsyncComponent(() => import('../components/TodayForecast.vue'))
const AirConditions = defineAsyncComponent(() => import('../components/AirConditions.vue'))
const AstroComp = defineAsyncComponent(() => import('../components/AstroComp.vue'))
const SpinnerComp = defineAsyncComponent(() => import('../assets/svg/spinner.svg'))
const DangerComp = defineAsyncComponent(() => import('../assets/svg/danger.svg'))

const weatherStore = useWeatherStore()

const loading = computed(() => weatherStore.isLoading)
const data = computed(() => weatherStore.current)
const error = computed(() => weatherStore.error)
const forecastError = computed(() => weatherStore.forecastError)

const refreshData = () => {
  weatherStore.refreshDataWhenError()
}
</script>

<template>
    <div v-if="data && !loading && !error" class="flex grow w-auto max-w-screen gap-x-5 sm:ml-5 max-lg:flex-col max-lg:gap-y-5 max-sm:mt-5">
      <div class="flex flex-col grow min-w-0 w-auto max-w-[1100px]">
        <SearchBar />
        <HeaderData />
        <TodayForecast />
        <AirConditions />
      </div>
      <div class="flex flex-col grow gap-y-5 lg:max-w-[500px]">
        <ForecastComp />
        <AstroComp />
      </div>
    </div>
    <div v-else-if="loading" class="w-full h-full flex justify-center items-center">
      <SpinnerComp class="animate-spin w-96 h-96"/>
    </div>
    <div v-else-if="(error || forecastError) && !loading" class="flex flex-col h-full w-full justify-center items-center">
      <div class="bg-red-500 flex flex-col items-center justify-center h-64 w-96 rounded-lg text-white p-5">
        <DangerComp class="w-32 h-32" />
        <span>{{ error }}</span>
        <span>{{ forecastError }}</span>
        <button @click="refreshData" class="bg-sky-600 rounded-lg py-2 px-5 mt-auto">Refresh</button>
      </div>
    </div>
</template>
