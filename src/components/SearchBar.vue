<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { useLocationStore } from '@/stores/locationStore';

const weatherStore = useWeatherStore();
const locationStore = useLocationStore();

const suggestionListOpen = ref(false)

const city_name = ref('');

const suggestions = computed(() => locationStore.suggestions) || []
const loading = computed(() => locationStore.loading)
const error = computed(() => locationStore.error)

const isSmallScreen = ref(false);

const checkScreenSize = () => {
  isSmallScreen.value = window.matchMedia('(max-width: 640px)').matches;
};

const fetchLocationHandler = () => {
  locationStore.fetchLocations(city_name.value)
  if (city_name.value.length > 2) {
    suggestionListOpen.value = true
  } else {
    suggestionListOpen.value = false
  }
}

const selectLocation = (location) => {
    weatherStore.fetchCurrentWeatherData(location)
    weatherStore.fetchForecastWeatherData(location)
    city_name.value = ''
    locationStore.suggestions = []
    suggestionListOpen.value = false
}

const computedClasses = computed(() => {
  return {
    'rounded-es-none': suggestionListOpen.value,
    'rounded-ee-none': suggestionListOpen.value && isSmallScreen.value
  }
})

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
    <div class="w-auto relative">
      <input @input="fetchLocationHandler" type="text" v-model="city_name" placeholder="Search for cities..." :class="['peer bg-sky-600 bg-opacity-35 py-3 text-xl text-white placeholder:text-gray-200 border-none focus:border-none focus:ring-0 rounded-lg shadow-md w-full max-h-14 transition-all', computedClasses]">
      <ul v-if="suggestions.length && !loading" class="peer-focus:flex hidden flex-col overflow-x-hidden bg-white rounded-b-lg shadow-md absolute max-sm:w-full">
        <li v-for="location in suggestions" :key="location.id" class="p-2 cursor-pointer hover:bg-gray-100 max-sm:w-full" @mousedown.prevent="selectLocation(location.name)">
          {{ location.name }}, {{ location.region }}, {{ location.country }}
        </li>
      </ul>
      <div v-if="loading" class="flex items-center w-96 h-10 bg-white rounded-b-lg shadow-md absolute">
        <span class="p-2">
          Loading...
        </span>
      </div>
      <div v-if="error && !loading" class="flex items-center w-96 h-10 bg-white rounded-b-lg shadow-md absolute">
        <span class="p-2">
          {{ error }}
        </span>
      </div>
    </div>
</template>