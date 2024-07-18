<script setup>
import { ref } from 'vue';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const city_name = ref('');
const data = ref(null)

async function search() {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city_name.value}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json()
    data.value = result
  } catch (error) {
    console.log(error)
  }
}
</script>

<!-- //cdn.weatherapi.com/weather/64x64/day/113.png -->

<template>
    <div class="w-full">
        <form @submit.prevent="search()" class="w-full">
            <input type="text" v-model="city_name" placeholder="Search for cities..." class="bg-sky-600 bg-opacity-50 py-3 text-xl text-white placeholder:text-gray-200 border-none rounded-lg shadow-md w-full">
        </form>
    </div>
</template>