import './assets/input.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const pinia = createPinia()


createApp(App).use(pinia).use(router).use(VueDatePicker).mount('#app')
