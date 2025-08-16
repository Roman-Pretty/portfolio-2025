/**
 * Application entry point
 * 
 * This file initializes the Vue.js application and mounts it to the DOM.
 */

import { createApp } from 'vue'
import App from './App.vue'

/**
 * Force light theme for DaisyUI
 * Ensures consistent light mode across the application
 */
document.documentElement.setAttribute('data-theme', 'light')

/**
 * Create the main Vue application instance
 */
const app = createApp(App)

/**
 * Mount the application to the DOM element with id 'app'
 */
app.mount('#app')
