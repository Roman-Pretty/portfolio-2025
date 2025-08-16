/**
 * Application entry point
 * 
 * This file initializes the Vue.js application and mounts it to the DOM.
 */

import { createApp } from 'vue'
import App from './App.vue'

/**
 * Create the main Vue application instance
 */
const app = createApp(App)

/**
 * Mount the application to the DOM element with id 'app'
 */
app.mount('#app')
