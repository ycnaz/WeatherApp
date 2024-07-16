<script setup>
import { ref } from 'vue';

const API_KEY = 'acf241c8159f484bbd5165255241007'
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

<template>
    <div class="p-5">
        <form @submit.prevent="search()">
            <input type="text" v-model="city_name" class="bg-indigo-300 border-none rounded-lg">
        </form>
        <div>
            <div v-if="data">
                <span>
                    {{ data.location.name }}
                </span>
                <span>
                    {{ data.current.temp_c }}
                </span>
            </div>
            <span v-else>No data</span>
        </div>
    </div>
</template>