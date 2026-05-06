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
defineProps<ProjectModalProps>();

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
    <div class="modal-box max-w-3xl w-full max-h-[90vh] bg-[var(--canvas)] text-[var(--ink)] rounded-sm border border-[var(--rule)] shadow-2xl p-0 overflow-hidden">
      <div class="p-8 lg:p-10" v-if="project">
        <!-- Header -->
        <div class="flex justify-between items-start mb-8 gap-4">
          <div>
            <div class="eyebrow mb-2">Project</div>
            <h2 class="display text-3xl lg:text-4xl">{{ project.title }}</h2>
          </div>
          <form method="dialog">
            <button class="p-2 -m-2 muted hover:text-[var(--ink)]" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </form>
        </div>

        <!-- Image -->
        <div class="aspect-[16/9] overflow-hidden bg-[var(--canvas-2)] border border-[var(--rule)] mb-8">
          <img
            :src="project.image || '/api/placeholder/600/300'"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Description -->
        <div class="mb-8">
          <div class="eyebrow mb-3">About</div>
          <p class="muted leading-relaxed text-[15px]">
            {{ project.fullDescription || project.description }}
          </p>
        </div>

        <!-- Technologies -->
        <div v-if="project.technologies && project.technologies.length" class="mb-8">
          <div class="eyebrow mb-3">Stack</div>
          <div class="flex flex-wrap gap-x-2 gap-y-2 text-xs">
            <span v-for="tech in project.technologies" :key="tech"
              class="px-3 py-1 border border-[var(--rule)] rounded-full muted">{{ tech }}</span>
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--rule)]">
          <button v-if="project.link" @click="openLink(project.link)"
            class="inline-flex items-center gap-2 text-sm link-quiet">
            <ExternalLink :size="16" /> View project
          </button>
          <button v-if="project.githubLink" @click="openLink(project.githubLink)"
            class="inline-flex items-center gap-2 text-sm link-quiet">
            <Github :size="16" /> Source
          </button>
          <form method="dialog" class="ml-auto">
            <button class="text-sm muted hover:text-[var(--ink)]">Close</button>
          </form>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop"><button>close</button></form>
  </dialog>
</template>
