import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics';

inject()
createApp(App).mount('#app')
