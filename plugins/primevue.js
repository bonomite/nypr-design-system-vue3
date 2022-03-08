import { defineNuxtPlugin } from "#app"
import PrimeVue from "primevue/config/config.cjs.js"
import Button from "primevue/button/button.cjs.js"
import Toast from "primevue/toast/toast.cjs.js"
import Image from "primevue/image/image.cjs.js"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Image', Image)
    //other components that you need
})