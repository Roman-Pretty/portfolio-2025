<!--
  Other Page Component
  
  A simple secondary page demonstrating routing functionality.
  Currently displays a basic title but can be expanded for additional content.
-->
<template>
  <div class="h3">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * Other Page component
 * 
 * Secondary page component used to demonstrate Vue Router navigation.
 * Can be extended to showcase additional features or content.
 */
export default defineComponent({
  name: 'OtherPage',
  
  /**
   * Component data properties
   * 
   * @returns Object containing component state
   */
  data() {
    return {
      /** Page title displayed in template */
      title: "Other Page",
    }
  }
})
</script>

<style scoped>
/* Component-specific styles */
</style>
  