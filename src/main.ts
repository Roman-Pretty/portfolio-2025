/**
 * Application entry point
 * 
 * This file initializes the Vue.js application with the necessary plugins
 * and mounts it to the DOM.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Create the main Vue application instance
 */
const app = createApp(App)

/**
 * Configure Vue Router for client-side routing
 */
app.use(router)

/**
 * Mount the application to the DOM element with id 'app'
 */
app.mount('#app')
