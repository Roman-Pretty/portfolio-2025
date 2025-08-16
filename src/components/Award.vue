<!--
  Award Component
  
  A reusable component for displaying individual awards with
  consistent styling and responsive design.
-->
<script setup lang="ts">
/**
 * Award component props interface
 */
interface AwardProps {
  /** Award title */
  title: string;
  /** Organization that granted the award */
  awardedBy: string;
  /** Color variant for the award box */
  variant?: 'orange' | 'primary';
  /** Link URL to open when award is clicked */
  link?: string;
}

/**
 * Component props definition
 */
const props = defineProps<AwardProps>();

/**
 * Generate CSS classes for the award based on variant
 * 
 * @returns Combined CSS class string
 */
const getAwardClasses = (): string => {
  const baseClasses = "shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-32 flex items-center justify-center border";
  
  const variantClasses = {
    orange: "bg-primary text-white border-orange-500",
    primary: "bg-white border-gray-200 text-slate-800"
  };
  
  return `${baseClasses} ${variantClasses[props.variant || 'primary']}`;
};

/**
 * Handle award click - open link in new tab if provided
 */
const handleClick = (): void => {
  if (props.link) {
    window.open(props.link, '_blank');
  }
};
</script>

<template>
  <div :class="getAwardClasses()" @click="handleClick">
    <div class="text-center">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="text-sm opacity-70 mt-1">Awarded by {{ awardedBy }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
