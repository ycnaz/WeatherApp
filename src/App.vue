<script setup>
  import { RouterView } from 'vue-router';
  import { defineAsyncComponent } from 'vue';

  const SettingComp = defineAsyncComponent(() => import('./assets/svg/settings.svg'))
  const HomeComp = defineAsyncComponent(() => import('./assets/svg/home.svg'))
  const LocationComp = defineAsyncComponent(() => import('./assets/svg/location.svg'))
  const LogoComp = defineAsyncComponent(() => import('./assets/svg/weather-logo.svg'))
</script>

<template>
  <div class="h-full w-full relative">
    <img src="./assets/images/sky.jpg" class="absolute w-full h-full mix-blend-color-burn">
    <div class="h-full w-full flex p-5 z-10">
      <nav class="flex flex-col bg-sky-600 bg-opacity-50 rounded-lg shadow-md z-10">
        <div class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg bg-sky-700 transition-all duration-300">
          <LogoComp class="w-10 h-10 group-hover:scale-125 transition-all duration-300" />
        </div>
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
      <RouterView class="z-10" />
    </div>
  </div>
</template>


<!-- bg -->
<!-- Photo by <a href="https://unsplash.com/@chuttersnap?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">CHUTTERSNAP</a> on <a href="https://unsplash.com/photos/white-clouds-under-blue-sky-w4WU2PZ9bPg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
  
