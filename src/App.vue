<script setup>
  import { RouterView } from 'vue-router';
  import { defineAsyncComponent } from 'vue';

  const SettingComp = defineAsyncComponent(() => import('./assets/svg/settings.svg'))
  const HomeComp = defineAsyncComponent(() => import('./assets/svg/home.svg'))
  const LocationComp = defineAsyncComponent(() => import('./assets/svg/location.svg'))
</script>

<template>
  <div class="h-full w-full flex p-5">
    <nav class="flex flex-col bg-sky-600 bg-opacity-50 rounded-lg shadow-md">
      <div class="flex justify-center items-center w-16 h-16 m-2 rounded-lg hover:bg-sky-700 transition-all duration-300 cursor-pointer">Logo</div>
      <div class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg hover:bg-sky-700 transition-all duration-300 cursor-pointer">
        <HomeComp class="w-10 h-10 group-hover:scale-125 transition-all duration-300" />
      </div>
      <div class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg hover:bg-sky-700 transition-all duration-300 cursor-pointer">
        <LocationComp class="w-10 h-10 group-hover:scale-125 transition-all duration-300" />
      </div>
      <div class="group flex justify-center items-center mt-auto w-16 h-16 m-2 rounded-lg hover:bg-sky-700 transition-all duration-300 cursor-pointer">
        <SettingComp class="w-10 h-10 group-hover:rotate-90 transition-all duration-300" />
      </div>
    </nav>
    <RouterView />
  </div>
</template>
