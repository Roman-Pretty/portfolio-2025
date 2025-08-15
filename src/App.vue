<!--
  Root App Component
  
  The main application component that provides the layout structure
  with a header and router view for page navigation.
-->
<template>
  <main class="h-[100dvh] w-screen overflow-x-hidden overflow-y-auto">
    <Header/>
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";

/**
 * Root application component
 * 
 * Defines the main layout structure with navigation header
 * and dynamic content area for routed pages.
 */
export default defineComponent({
  name: 'App',
  components: { 
    Header, 
    RouterView 
  },
});
</script>

<style>
@import './app.css';
</style>
