<!--
  Root App Component
  
  The main application component that provides the layout structure
  with a header and individual sections.
-->
<template>
  <main class="h-[100dvh] w-screen overflow-x-hidden overflow-y-auto">
    <Header/>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <AwardsSection />
    <TimelineSection />
    <ContactSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import HeroSection from "./sections/HeroSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import ProjectsSection from "./sections/ProjectsSection.vue";
import AwardsSection from "./sections/AwardsSection.vue";
import TimelineSection from "./sections/TimelineSection.vue";
import ContactSection from "./sections/ContactSection.vue";

/**
 * Root application component
 * 
 * Defines the main layout structure with navigation header
 * and individual sections.
 */
export default defineComponent({
  name: 'App',
  components: { 
    Header, 
    HeroSection,
    AboutSection,
    ProjectsSection,
    AwardsSection,
    TimelineSection,
    ContactSection
  },
});
</script>

<style>
@import './app.css';
</style>
