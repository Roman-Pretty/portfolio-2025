<!--
  Project Card Component
  
  A reusable card component for displaying project information
  with hover effects, color variants, and action buttons.
-->
<script setup lang="ts">
import { ref } from 'vue';
import { Github, Eye } from 'lucide-vue-next';

/**
 * Project card component props interface
 */
interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Short project description */
  description: string;
  /** Extended project description for modal */
  fullDescription?: string;
  /** Project image URL */
  image: string;
  /** Live demo/preview link */
  link?: string;
  /** GitHub repository link */
  githubLink?: string;
  /** List of technologies used */
  technologies?: string[];
  /** Visual style variant */
  variant?: 'white' | 'blue' | 'orange' | 'purple' | 'green';
  /** Card size variant */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Component props definition
 */
const props = defineProps<ProjectCardProps>();

/**
 * Component events definition
 */
const emit = defineEmits<{
  /** Emitted when card is clicked */
  click: [project: ProjectCardProps];
}>();

/**
 * Hover state tracking
 */
const isHovered = ref(false);

/**
 * Generate CSS classes for the card based on variant
 * 
 * @returns Combined CSS class string
 */
const getCardClasses = (): string => {
  const baseClasses = "shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full h-full";
  
  const variantClasses = {
    white: "bg-white text-gray-800 border border-gray-200",
    blue: "bg-blue-500 text-white",
    orange: "bg-orange-500 text-white",
    purple: "bg-purple-500 text-white",
    green: "bg-green-500 text-white"
  };
  
  return `${baseClasses} ${variantClasses[props.variant || 'white']}`;
};

/**
 * Handle card click event
 * Emits the click event with project data
 */
const handleClick = (): void => {
  emit('click', props);
};

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
  <div 
    :class="getCardClasses()" 
    @click="handleClick"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="p-4 h-full flex flex-col justify-between font-sans">
      <div>
        <h3 class="text-lg font-bold mb-2" 
            :class="variant === 'white' ? 'text-gray-800' : 'text-white'">
          {{ title }}
        </h3>
        <p class="text-sm opacity-80 line-clamp-3">
          {{ description }}
        </p>
      </div>
      
      <div class="mt-4">
        <div class="flex gap-2">
          <button 
            v-if="link"
            @click.stop="openLink(link)"
            class="btn btn-sm"
            :class="variant === 'white' ? 'btn-outline/50' : 'btn-outline/50'"
          >
            <Eye :size="16" />
          </button>
          <button 
            v-if="githubLink"
            @click.stop="openLink(githubLink)"
            class="btn btn-sm"
            :class="variant === 'white' ? 'btn-outline/50' : 'btn-outline/50'"
          >
            <Github :size="16" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>