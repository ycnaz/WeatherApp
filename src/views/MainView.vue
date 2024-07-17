<script setup>
import { defineAsyncComponent } from 'vue';

const SearchBar = defineAsyncComponent(() => import('../components/SearchBar.vue'))
</script>

<template>
  <div>
    <SearchBar />
  </div>
</template>