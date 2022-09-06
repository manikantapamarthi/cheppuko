import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'  
const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");