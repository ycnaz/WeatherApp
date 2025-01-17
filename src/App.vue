<script setup>
  import { RouterView } from 'vue-router';
  import { defineAsyncComponent } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useTempScaleStore } from './stores/tempScaleStore';

  const SettingComp = defineAsyncComponent(() => import('./assets/svg/settings.svg'))
  const HomeComp = defineAsyncComponent(() => import('./assets/svg/home.svg'))
  const LocationComp = defineAsyncComponent(() => import('./assets/svg/location.svg'))
  const LogoComp = defineAsyncComponent(() => import('./assets/svg/weather-logo.svg'))

  const toast = useToast()

  const tempStore = useTempScaleStore()

  const errorToast = () => {
    toast.error('Just for the design!')
  }

  const toggleScaleHandler = () => {
    tempStore.toggleScale()
  }
</script>

<template>
  <div class="h-full w-full relative flex">
    <div class="h-full w-full flex p-5 z-10 max-sm:flex-col">
      <nav class="flex sm:flex-col bg-sky-600 bg-opacity-35 rounded-lg shadow-md z-20">
        <div class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg bg-sky-500 transition-all duration-300">
          <LogoComp class="w-10 h-10 group-hover:scale-125 transition-all duration-300" />
        </div>
        <div @click="errorToast" class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg hover:bg-sky-500 relative transition-all duration-300 cursor-pointer">
          <HomeComp class=" w-10 h-10 group-hover:scale-125 transition-all duration-300" />
          <div class="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max sm:left-[70px] max-sm:top-16 bg-sky-500 rounded-lg text-white shadow-md transition-all duration-100 scale-0 origin-left">Home</div>
        </div>
        <div @click="errorToast" class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg hover:bg-sky-500 relative transition-all duration-300 cursor-pointer">
          <LocationComp class="w-10 h-10 group-hover:scale-125 transition-all duration-300" />
          <div class="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max sm:left-[70px] max-sm:top-16 bg-sky-500 rounded-lg text-white shadow-md transition-all duration-100 scale-0 origin-left">Cities</div>
        </div>
        <div @click="toggleScaleHandler" class="group flex justify-center items-center w-16 h-16 m-2 rounded-lg hover:bg-sky-500 relative transition-all duration-300 cursor-pointer">
          <span class="text-white text-5xl font-thin">{{ tempStore.celsius ? 'C' : 'F' }}</span>
          <div class="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max sm:left-[70px] max-sm:top-16 bg-sky-500 rounded-lg text-white shadow-md transition-all duration-100 scale-0 origin-left">{{ tempStore.celsius ? 'Celsius' : 'Fahrenheit' }}</div>
        </div>
        <div @click="errorToast" class="group flex justify-center items-center sm:mt-auto w-16 h-16 m-2 rounded-lg hover:bg-sky-500 relative max-sm:ml-auto transition-all duration-300 cursor-pointer">
          <SettingComp class="w-10 h-10 group-hover:rotate-90 transition-all duration-300" />
          <div class="group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max sm:left-[70px] max-sm:top-16 bg-sky-500 rounded-lg text-white shadow-md transition-all duration-100 scale-0 origin-left">Settings</div>
        </div>
      </nav>
      <RouterView class="z-10 w-auto flex grow shrink min-w-0" />
    </div>
  </div>
</template>
