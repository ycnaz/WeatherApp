<script setup>
</script>

<template>
    <div class="flex flex-col bg-sky-600 bg-opacity-50 p-5 rounded-lg shadow-md text-white mt-5 grow">
        <div class="flex justify-between">
            <h1>AIR CONDITIONS</h1>
            <button class="bg-sky-700 rounded-lg shadow-md py-2 px-3">See more</button>
        </div>
        <div class="flex grow">
            <div class="flex flex-col grow">
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">Real feel</span>
                    <span class="text-3xl">36&deg;</span>
                </div>
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">Chance of rain</span>
                    <span class="text-3xl">0%</span>
                </div> 
            </div>
            <div class="flex flex-col grow">
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">Wind</span>
                    <span class="text-3xl">13 km/h</span>
                </div>
                <div class="flex flex-col grow px-5">
                    <span class="text-gray-300 text-xl">UV index</span>
                    <span class="text-3xl">3</span>
                </div> 
            </div>
        </div>
    </div>
</template>