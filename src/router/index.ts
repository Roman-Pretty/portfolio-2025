/**
 * Vue Router Configuration
 * 
 * Defines the application's routing structure and navigation rules.
 * Sets up client-side routing for single-page application navigation.
 */

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue';
import OtherPage from '../pages/OtherPage.vue';

/**
 * Base URL configuration for different environments
 * Uses Vite's environment variables to determine the correct base path
 */
const base = (import.meta.env.MODE == 'development') ? import.meta.env.BASE_URL : ''

/**
 * Route definitions
 * Maps URL paths to their corresponding Vue components
 */
const router = createRouter({
    history: createWebHistory(base),
    routes: [
        { 
            path: '/', 
            name: 'Main Page', 
            component: MainPage 
        },
        { 
            path: '/other/', 
            name: 'Other Page', 
            component: OtherPage 
        },
    ]
})

export default router
