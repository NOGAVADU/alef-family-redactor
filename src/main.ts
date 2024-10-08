import {createApp} from 'vue'
import router from "./router";
import App from './App.vue'
import './assets/styles/index.css'
import {createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia)

app.mount('#app')


