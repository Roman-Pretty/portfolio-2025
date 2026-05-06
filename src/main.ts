/**
 * Application entry point
 * 
 * This file initializes the Vue.js application and mounts it to the DOM.
 */

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

document.documentElement.setAttribute('data-theme', 'light')

const app = createApp(App)
app.use(MotionPlugin)
app.mount('#app')
