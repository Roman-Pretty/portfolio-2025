<!--
  Root App Component
-->
<template>
  <main class="min-h-screen w-full overflow-x-hidden bg-[var(--canvas)] text-[var(--ink)]">
    <Header />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <AwardsSection />
    <TimelineSection />
    <ContactSection />
    <Footer />
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
import Footer from "./sections/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    HeroSection,
    AboutSection,
    ProjectsSection,
    AwardsSection,
    TimelineSection,
    ContactSection,
    Footer
  },
});
</script>

<style>
@import './app.css';
</style>
