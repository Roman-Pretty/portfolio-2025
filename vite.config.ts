/**
 * Vite Configuration
 * 
 * Build tool configuration for the Vue.js application.
 * Handles development server, build process, and plugin setup.
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';

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
     * Production: Uses GitHub Pages path for repository
     */
    base: mode == "development" 
        ? "/"
        : "/portfolio-2025/",
    
    /**
     * Build configuration
     */
    build: {
        emptyOutDir: true,
        outDir: "dist",
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
}));
