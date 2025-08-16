<!--
  Message Component
  
  A chat message component that displays messages from both
  bot and user perspectives with appropriate styling and avatars.
-->
<script setup lang="ts">
/**
 * Message component props interface
 */
interface MessageProps {
  /** The message text content */
  message: string;
  /** Whether this message is from a bot/assistant */
  isBot: boolean;
}

/**
 * Component props definition
 */
defineProps<MessageProps>();
</script>

<template>
  <!-- Bot message layout -->
  <div v-if="isBot" class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img
            alt="Roman Pretty"
            src="../assets/roman.jpeg"/>
      </div>
    </div>
    <div class="chat-bubble">{{ message }}</div>
  </div>
  
  <!-- User message layout -->
  <div v-else class="chat chat-end">
    <div class="chat-bubble bg-neutral-700 text-base-300">{{ message }}</div>
  </div>
</template>

<style scoped>
/**
 * Message Component Styles
 * 
 * Defines styling for bot message content including
 * paragraph spacing, list formatting, and link appearance.
 */

/* Bot message content formatting */
:deep(.bot p), 
:deep(.bot ol) {
  padding-top: 1rem;
}

:deep(.bot li) {
  margin-left: 2rem;
  list-style-type: disc;
}

:deep(.bot a) {
  color: #0d3273;
  text-decoration: underline;
}
</style>