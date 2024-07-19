<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { useToast } from 'vue-toastification';

const weatherStore = useWeatherStore();
const toast = useToast();
const city_name = ref('');

const fetchHandler = () => {
  if (city_name.value.trim()) {
    weatherStore.fetchCurrentWeatherData(city_name.value)
    weatherStore.fetchForecastWeatherData(city_name.value)
    city_name.value = ''
  } else {
    toast.error('Please enter a city name!')
  }
}
</script>

<template>
    <div class="w-full">
        <form @submit.prevent="fetchHandler" class="w-full">
            <input type="text" v-model="city_name" placeholder="Search for cities..." class="bg-sky-600 bg-opacity-50 py-3 text-xl text-white placeholder:text-gray-200 border-none rounded-lg shadow-md w-full">
        </form>
    </div>
</template>