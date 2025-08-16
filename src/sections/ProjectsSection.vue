<!--
  Projects Section Component
  
  Showcases portfolio projects in a grid layout with modal functionality.
-->
<template>
  <div id="projects" class="min-h-[calc(100vh-4rem)] bg-base-200 md:pt-18 pt-6 2xl:px-64 md:px-10 px-4 font-serif pb-20">
    <h1 class="w-full text-center lg:text-end  text-2xl md:text-5xl mb-4">My Projects</h1>
    <h2 class="w-full text-center lg:text-end text-md md:text-2xl text-base-content/50 mb-8 lg:mb-12">Here are some of
      my favourite
      projects</h2>

    <!-- Project Grid -->
    <div class="max-w-6xl mx-auto">
      <!-- Small, Medium, Large and Extra Large screens: Simple responsive grid -->
      <div class="2xl:hidden">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          <div class="aspect-square">
            <ProjectCard title="AI-Chatbot for QMUL Students"
              description="AI-powered web scraping and RAG LLM system built for university module information."
              full-description="An advanced AI system that combines web scraping capabilities with Retrieval-Augmented Generation (RAG) and Large Language Models to provide intelligent responses about university modules and course information."
              image="/qmb.png" :technologies="['Python', 'RAG', 'LLM', 'Web Scraping', 'AI/ML']" variant="blue"
              github-link="https://github.com/Roman-Pretty/module-bot" link="https://qmodulebot.com" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="Neural Network CIFAR-10 Classifier"
              description="Deep learning model for image classification, with over 90% accuracy."
              full-description="A neural network implementation focused on the CIFAR-10 dataset, exploring various architectures and optimization techniques for image classification tasks."
              image="/nn.png" :technologies="['Python', 'Pytorch', 'Torch', 'CIFAR-10', 'Neural Networks']" variant="white"
              github-link="https://github.com/Roman-Pretty/portfolio-2025/blob/main/src/nn/CIFAR10%20Classifier.ipynb" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="SWRPG Datapads"
              description="Figma design project for Star Wars RPG interface with extensive user engagement."
              full-description="A comprehensive UI design project created in Figma for Star Wars RPG, featuring detailed interface designs that have attracted significant user engagement and community feedback."
              image="/datapad.png" :technologies="['Figma', 'UI/UX Design', 'Just for Fun', 'Community Design']"
              variant="white" link="https://swrpgdatapad.com" github-link="https://github.com/Roman-Pretty/swrpg-datapad" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="X-Wing Unlimited"
              description="Massive scale Vue.js web application for the tabletop boardgame X-Wing."
              full-description="A Vue.js-based web application supporting the X-Wing tabletop game community, featuring game management tools and player resources with a growing user base."
              image="/xwu.png" :technologies="['Vue.js', 'TypeScript', 'Web Development', 'Just for Fun', 'Community Design']"
              variant="white" link="https://xwingunlimited.com" github-link="https://github.com/Roman-Pretty/xwingcards"
              @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="Hobby 24 Social Platform"
              description="Team-developed social networking application connecting hobby enthusiasts."
              full-description="A collaborative social networking application developed with a team, designed to connect people with shared hobbies and interests, featuring user profiles, community groups, and activity sharing."
              image="/h24.png"
              :technologies="['Team Development', 'Social Networking', 'Full-Stack', 'Community Features']"
              variant="white" link="https://group24-web-apps-ec221017.apps.a.comp-teach.qmul.ac.uk/login/" github-link="https://github.com/Roman-Pretty/hobby24" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="TourCast Weather App"
              description="Application providing activity recommendations based on the weather."
              full-description="A comprehensive weather forecast application that provides detailed meteorological information for travelers and outdoor enthusiasts, featuring location-based forecasts and weather alerts."
              image="/tc.png"
              :technologies="['Weather APIs', 'Location Services', 'REST', 'Data Visualization']"
              variant="white" github-link="https://github.com/Roman-Pretty/TourCast" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="Enterprise Scale Java Projects"
              description="Massive-scale Minecraft modifications with over 23 million downloads."
              full-description="Complex Minecraft modifications reaching over 23 million downloads worldwide. Built with Java, Minecraft Forge and my own custom API, these projects demonstrate enterprise-level software development with massive user adoption and community engagement. I am on hiatus from these projects whilst studying, but they are still available for download and use."
              image="/ed.png" :technologies="['Java', 'Minecraft Forge', 'Gradle', 'Community Management']"
              variant="blue" github-link="https://github.com/ElenaiDev/ElenaiDodge2.0" link="https://www.curseforge.com/members/elenaidev/projects" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="Sheringham Acupuncture"
              description="Professional landing page for acupuncture practice with appointment booking system."
              full-description="A professional website developed for Sheringham Acupuncture practice to a given specification, featuring appointment booking functionality. The design is specified by the client."
              image="/sha.png"
              :technologies="['Healthcare', 'Appointment System', 'Professional Services', 'Web Development']"
              variant="white" link="http://sheringhamacupuncture.co.uk" github-link="https://github.com/Roman-Pretty/sheringham-acupuncture"
              @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="did my chores!"
              description="React Native application for chore tracking and management."
              full-description="What I am currently working on! A React Native mobile application designed for chore tracking and management, featuring task assignment, progress tracking, and reminders. When published, it will be linked below."
              image="/dmc.png" :technologies="['React Native', 'Mobile Development', 'Task Management']"
              variant="white" @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="Exchange Rate Chrome Extension"
              description="Super-simple browser extension for real-time currency exchange rate monitoring and conversion."
              full-description="A Chrome extension that provides real-time currency exchange rates and conversion tools, featuring quick access to current market rates and conversion calculations for international transactions."
              image="/ce.png" :technologies="['Chrome Extension', 'Just for Fun', 'APIs', 'Financial Data']"
              variant="white" 
              github-link="https://github.com/Roman-Pretty/Exchange-Rate-Chrome-Extension"
              @click="openProjectModal" />
          </div>
          
          <div class="aspect-square">
            <ProjectCard title="Holly-Eva Portfolio Site"
              description="Professional portfolio website for musician with elegant design and media integration."
              full-description="A custom-built portfolio website for musician Holly-Eva, featuring elegant design, media integration, and performance showcases to highlight her musical career and achievements."
              image="/he.png"
              :technologies="['Web Development', 'Media Integration', 'Portfolio Design', 'Music Industry']"
              variant="white" link="https://holly-eva.com" github-link="https://github.com/Roman-Pretty/holly-eva"
              @click="openProjectModal" />
          </div>
        </div>
      </div>

      <!-- 2XL screens and up: Staggered grid layout with offsets -->
      <div class="hidden 2xl:block">
        <!-- Row 1 - Left shifted (4 columns) -->
        <div class="grid grid-cols-4 gap-6 mb-6 transform -translate-x-16">
          <div class="aspect-square">
            <ProjectCard title="AI-Chatbot for QMUL Students"
              description="AI-powered web scraping and RAG LLM system built for university module information."
              full-description="An advanced AI system that combines web scraping capabilities with Retrieval-Augmented Generation (RAG) and Large Language Models to provide intelligent responses about university modules and course information."
              image="/qmb.png" :technologies="['Python', 'RAG', 'LLM', 'Web Scraping', 'AI/ML']" variant="blue"
              github-link="https://github.com/Roman-Pretty/module-bot" link="https://qmodulebot.com" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="Neural Network CIFAR-10 Classifier"
              description="Deep learning model for image classification, with over 90% accuracy."
              full-description="A neural network implementation focused on the CIFAR-10 dataset, exploring various architectures and optimization techniques for image classification tasks."
              image="/nn.png" :technologies="['Python', 'Pytorch', 'Torch', 'CIFAR-10', 'Neural Networks']" variant="white"
              github-link="https://github.com/Roman-Pretty/portfolio-2025/blob/main/src/nn/CIFAR10%20Classifier.ipynb" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="SWRPG Datapads"
              description="Figma design project for Star Wars RPG interface with extensive user engagement."
              full-description="A comprehensive UI design project created in Figma for Star Wars RPG, featuring detailed interface designs that have attracted significant user engagement and community feedback."
              image="/datapad.png" :technologies="['Figma', 'UI/UX Design', 'Just for Fun', 'Community Design']"
              variant="white" link="https://swrpgdatapad.com" github-link="https://github.com/Roman-Pretty/swrpg-datapad" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="X-Wing Unlimited"
              description="Massive scale Vue.js web application for the tabletop boardgame X-Wing."
              full-description="A Vue.js-based web application supporting the X-Wing tabletop game community, featuring game management tools and player resources with a growing user base."
              image="/xwu.png" :technologies="['Vue.js', 'TypeScript', 'Web Development', 'Just for Fun', 'Community Design']"
              variant="white" link="https://xwingunlimited.com" github-link="https://github.com/Roman-Pretty/xwingcards"
              @click="openProjectModal" />
          </div>
        </div>

        <!-- Row 2 - Centered (4 columns) -->
        <div class="grid grid-cols-4 gap-6 mb-6">
          <div class="aspect-square">
            <ProjectCard title="Hobby 24 Social Platform"
              description="Team-developed social networking application connecting hobby enthusiasts."
              full-description="A collaborative social networking application developed with a team, designed to connect people with shared hobbies and interests, featuring user profiles, community groups, and activity sharing."
              image="/h24.png"
              :technologies="['Team Development', 'Social Networking', 'Full-Stack', 'Community Features']"
              variant="white" link="https://group24-web-apps-ec221017.apps.a.comp-teach.qmul.ac.uk/login/" github-link="https://github.com/Roman-Pretty/hobby24" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="TourCast Weather App"
              description="Application providing activity recommendations based on the weather."
              full-description="A comprehensive weather forecast application that provides detailed meteorological information for travelers and outdoor enthusiasts, featuring location-based forecasts and weather alerts."
              image="/tc.png"
              :technologies="['Weather APIs', 'Location Services', 'REST', 'Data Visualization']"
              variant="white" github-link="https://github.com/Roman-Pretty/TourCast" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="Enterprise Scale Java Projects"
              description="Massive-scale Minecraft modifications with over 23 million downloads."
              full-description="Complex Minecraft modifications reaching over 23 million downloads worldwide. Built with Java, Minecraft Forge and my own custom API, these projects demonstrate enterprise-level software development with massive user adoption and community engagement. I am on hiatus from these projects whilst studying, but they are still available for download and use."
              image="/ed.png" :technologies="['Java', 'Minecraft Forge', 'Gradle', 'Community Management']"
              variant="blue" github-link="https://github.com/ElenaiDev/ElenaiDodge2.0" link="https://www.curseforge.com/members/elenaidev/projects" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="Sheringham Acupuncture"
              description="Professional landing page for acupuncture practice with appointment booking system."
              full-description="A professional website developed for Sheringham Acupuncture practice to a given specification, featuring appointment booking functionality. The design is specified by the client."
              image="/sha.png"
              :technologies="['Healthcare', 'Appointment System', 'Professional Services', 'Web Development']"
              variant="white" link="http://sheringhamacupuncture.co.uk" github-link="https://github.com/Roman-Pretty/sheringham-acupuncture"
              @click="openProjectModal" />
          </div>
        </div>

        <!-- Row 3 - Right shifted (3 columns) -->
        <div class="transform translate-x-16">
          <div class="grid grid-cols-4 gap-6">
            <div class="aspect-square">
              <ProjectCard title="did my chores!"
                description="React Native application for chore tracking and management."
                full-description="What I am currently working on! A React Native mobile application designed for chore tracking and management, featuring task assignment, progress tracking, and reminders. When published, it will be linked below."
                image="/dmc.png" :technologies="['React Native', 'Mobile Development', 'Task Management']"
                variant="white" @click="openProjectModal" />
            </div>
            <div class="aspect-square">
              <ProjectCard title="Exchange Rate Chrome Extension"
                description="Super-simple browser extension for real-time currency exchange rate monitoring and conversion."
                full-description="A Chrome extension that provides real-time currency exchange rates and conversion tools, featuring quick access to current market rates and conversion calculations for international transactions."
                image="/ce.png" :technologies="['Chrome Extension', 'Just for Fun', 'APIs', 'Financial Data']"
                variant="white" 
                github-link="https://github.com/Roman-Pretty/Exchange-Rate-Chrome-Extension"
                @click="openProjectModal" />
            </div>
            <div class="aspect-square">
              <ProjectCard title="Holly-Eva Portfolio Site"
                description="Professional portfolio website for musician with elegant design and media integration."
                full-description="A custom-built portfolio website for musician Holly-Eva, featuring elegant design, media integration, and performance showcases to highlight her musical career and achievements."
                image="/he.png"
                :technologies="['Web Development', 'Media Integration', 'Portfolio Design', 'Music Industry']"
                variant="white" link="https://holly-eva.com" github-link="https://github.com/Roman-Pretty/holly-eva"
                @click="openProjectModal" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal :project="selectedProject" modal-id="project_modal" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'

/**
 * Project data interface
 */
interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  link?: string;
  githubLink?: string;
  technologies?: string[];
  variant?: 'white' | 'blue' | 'orange' | 'purple' | 'green';
}

/**
 * Modal state management
 */
const selectedProject = ref<Project | null>(null)

/**
 * Open project modal with selected project data
 * 
 * @param project - Project data to display in modal
 */
const openProjectModal = (project: Project): void => {
  console.log('openProjectModal called with:', project);
  selectedProject.value = project;
  // Use DOM manipulation to open the modal
  const modal = document.getElementById('project_modal') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}
</script>
