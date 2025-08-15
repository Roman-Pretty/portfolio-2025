<!--
  Project Modal Component
  
  A DaisyUI modal dialog for displaying detailed project information
  including images, descriptions, technologies, and action links.
  Uses HTML dialog element with direct DOM manipulation.
-->
<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next';

/**
 * Project data interface
 */
interface Project {
  /** Project title */
  title: string;
  /** Short project description */
  description: string;
  /** Extended project description */
  fullDescription?: string;
  /** Project image URL */
  image: string;
  /** Live demo/preview link */
  link?: string;
  /** GitHub repository link */
  githubLink?: string;
  /** List of technologies used */
  technologies?: string[];
}

/**
 * Component props interface
 */
interface ProjectModalProps {
  /** Project data to display */
  project: Project | null;
  /** Modal ID for DOM manipulation */
  modalId: string;
}

/**
 * Component props definition
 */
const props = defineProps<ProjectModalProps>();

/**
 * Open external link in new tab
 * 
 * @param url - URL to open
 */
const openLink = (url: string): void => {
  window.open(url, '_blank');
};
</script>

<template>
  <dialog :id="modalId" class="modal">
    <div class="modal-box max-w-2xl w-full max-h-[90vh]">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">{{ project?.title || 'Project Details' }}</h2>
        <form method="dialog">
          <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>
      </div>
      
      <!-- Content -->
      <div class="space-y-6" v-if="project">
        <!-- Image -->
        <div>
          <img 
            :src="project.image || '/api/placeholder/600/300'" 
            :alt="project.title"
            class="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <!-- Description -->
        <div>
          <h3 class="text-lg font-semibold mb-3">About this project</h3>
          <p class="text-base-content/70 leading-relaxed">
            {{ project.fullDescription || project.description }}
          </p>
        </div>
        
        <!-- Technologies -->
        <div v-if="project.technologies && project.technologies.length > 0">
          <h3 class="text-lg font-semibold mb-3">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="badge badge-primary"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <!-- Links -->
        <div class="modal-action">
          <button 
            v-if="project.link"
            @click="openLink(project.link)"
            class="btn btn-primary gap-2"
          >
            <ExternalLink :size="18" />
            View Project
          </button>
          <button 
            v-if="project.githubLink"
            @click="openLink(project.githubLink)"
            class="btn btn-outline gap-2"
          >
            <Github :size="18" />
            View Code
          </button>
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </div>
  </dialog>
</template>
