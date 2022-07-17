import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router";
import LoadScript from "vue-plugin-load-script";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(LoadScript).use(VueSweetalert2).mount('#app')
