import { defineStore } from "pinia";
import { ref } from "vue";

export const useTempScaleStore = defineStore('tempScaleStore', () => {
    const celsius  = ref(true)

    const toggleScale = () => {
        celsius.value = !celsius.value
    }

    return { celsius, toggleScale }
})