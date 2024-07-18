<script setup>
import { defineAsyncComponent } from 'vue';

const SearchBar = defineAsyncComponent(() => import('../components/SearchBar.vue'))
const ForecastComp = defineAsyncComponent(() => import('../components/ForecastComp.vue'))
const HeaderData = defineAsyncComponent(() => import('../components/HeaderData.vue'))
const TodayForecast = defineAsyncComponent(() => import('../components/TodayForecast.vue'))
const AirConditions = defineAsyncComponent(() => import('../components/AirConditions.vue'))
</script>

<template>
  <div class="flex gap-x-5 ml-5 w-full">
    <div class="flex flex-col w-full h-full">
      <SearchBar />
      <HeaderData />
      <TodayForecast />
      <AirConditions />
    </div>
    <ForecastComp />
  </div>
</template>