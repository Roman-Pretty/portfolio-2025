<!--
  Project Card — editorial card with color hover
-->
<script setup lang="ts">
import { Github, ArrowUpRight } from 'lucide-vue-next';

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  link?: string;
  githubLink?: string;
  technologies?: string[];
  variant?: 'white' | 'blue' | 'orange' | 'purple' | 'green';
  size?: 'small' | 'medium' | 'large';
  index?: number;
}

const props = defineProps<ProjectCardProps>();

const emit = defineEmits<{
  click: [project: ProjectCardProps];
}>();

const handleClick = (): void => emit('click', props);

const openLink = (e: Event, url: string): void => {
  e.stopPropagation();
  window.open(url, '_blank');
};
</script>

<template>
  <article
    class="group relative cursor-pointer flex flex-col h-full"
    @click="handleClick"
  >
    <!-- Image -->
    <div class="relative w-full aspect-[4/3] overflow-hidden bg-[var(--canvas-2)] border border-[var(--rule)] rounded-sm">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div v-else class="absolute inset-0 halftone-soft opacity-60"></div>

      <!-- Index badge -->
      <div v-if="index !== undefined" class="absolute top-3 left-3 eyebrow numeric glass-strong px-2 py-1 rounded-sm">
        {{ String(index).padStart(2, '0') }}
      </div>

      <!-- Hover arrow -->
      <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--accent-orange)] text-white flex items-center justify-center opacity-0 translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-md">
        <ArrowUpRight :size="16" />
      </div>
    </div>

    <!-- Caption -->
    <div class="pt-4 flex flex-col gap-2 flex-1">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-[15px] font-medium leading-snug text-[var(--ink)] group-hover:text-[var(--accent-orange)] transition">
          {{ title }}
        </h3>
        <div class="flex items-center gap-1 shrink-0 mt-0.5">
          <button
            v-if="githubLink"
            @click="openLink($event, githubLink)"
            class="p-1 muted hover:text-[var(--ink)] transition"
            :aria-label="`${title} on GitHub`"
          >
            <Github :size="14" />
          </button>
        </div>
      </div>
      <p class="text-xs muted leading-relaxed line-clamp-2">{{ description }}</p>
      <div v-if="technologies && technologies.length" class="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] uppercase tracking-wider faint">
        <span v-for="(t, i) in technologies.slice(0, 3)" :key="t">
          {{ t }}<span v-if="i < Math.min(technologies.length, 3) - 1" class="ml-3 text-[var(--rule)]">·</span>
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
