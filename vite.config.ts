/**
 * Vite Configuration
 * 
 * Build tool configuration for the Vue.js application.
 * Handles development server, build process, and plugin setup.
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

/**
 * Vite configuration with environment-specific settings
 * 
 * @param mode - Current build mode (development/production)
 * @returns Vite configuration object
 */
export default defineConfig(({ mode }) => ({
    /**
     * Base URL configuration
     * Development: Uses local dev server
     * Production: Uses static API path
     */
    base: mode == "development" 
        ? "http://localhost:5173/"
        : "/static/api/spa/",
    
    /**
     * Build configuration
     */
    build: {
        emptyOutDir: true,
        outDir: "../api/static/api/spa",
    },
    
    /**
     * Plugin configuration
     * - Vue: Enables Vue.js single file component support
     * - TailwindCSS: Integrates Tailwind CSS processing
     */
    plugins: [
        vue(),
        tailwindcss(),
    ],
    
    /**
     * Module resolution configuration
     * Sets up path aliases for cleaner imports
     */
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
}));
