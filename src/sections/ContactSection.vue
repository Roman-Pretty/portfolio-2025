<!--
  Contact Section Component
  
  Contact information, social links, and CV download functionality.
-->
<template>
  <div class="h-[calc(100%-8rem)] w-full bg-base-200">
    <div class="w-full h-full flex flex-col items-center pt-18 font-serif lg:px-64">
      <h1 class="w-full text-center  text-2xl md:text-5xl mb-4">Reach out</h1>
      <h2 class="w-full text-center text-md md:text-2xl text-base-content/50 mb-18 max-w-2/3">Please email me if you
        have any
        enquiries, or
        download my CV</h2>

      <ul class="list bg-base-100 rounded-box border-1 border-base-300 w-2/3 font-sans">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Contact Information</li>

        <!-- Email -->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <Mail :size="24" />
            </div>
          </div>
          <div>
            <div>Email</div>
            <div class="text-xs font-semibold opacity-60">romanjjpretty@gmail.com</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openLink('mailto:romanjjpretty@gmail.com')">
            <ExternalLink :size="20" />
          </button>
          <div class="relative">
            <button class="btn btn-square btn-ghost" @click="copyToClipboard('romanjjpretty@gmail.com', 'email-copy')">
              <Copy :size="20" />
            </button>
            <!-- Tooltip -->
            <div v-if="showTooltip === 'email-copy'"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs whitespace-nowrap z-50">
              Copied!
            </div>
          </div>
        </li>

        <!-- LinkedIn -->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <Linkedin :size="24" />
            </div>
          </div>
          <div>
            <div>LinkedIn</div>
            <div class="text-xs font-semibold opacity-60">roman-pretty-054800209</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openLink('https://linkedin.com/in/roman-pretty-054800209')">
            <ExternalLink :size="20" />
          </button>
          <div class="relative">
            <button class="btn btn-square btn-ghost"
              @click="copyToClipboard('https://www.linkedin.com/in/roman-pretty-054800209/', 'linkedin-copy')">
              <Copy :size="20" />
            </button>
            <!-- Tooltip -->
            <div v-if="showTooltip === 'linkedin-copy'"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs whitespace-nowrap z-50">
              Copied!
            </div>
          </div>
        </li>

        <!-- GitHub -->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <Github :size="24" />
            </div>
          </div>
          <div>
            <div>GitHub</div>
            <div class="text-xs font-semibold opacity-60">Roman-Pretty</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openLink('https://github.com/Roman-Pretty')">
            <ExternalLink :size="20" />
          </button>
          <div class="relative">
            <button class="btn btn-square btn-ghost"
              @click="copyToClipboard('https://github.com/Roman-Pretty', 'github-copy')">
              <Copy :size="20" />
            </button>
            <!-- Tooltip -->
            <div v-if="showTooltip === 'github-copy'"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs whitespace-nowrap z-50">
              Copied!
            </div>
          </div>
        </li>
        <!--        CV-->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <FileUser :size="24" />
            </div>
          </div>
          <div>
            <div>CV</div>
            <div class="text-xs font-semibold opacity-60">Download</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="downloadCV">
            <Download :size="20" />
          </button>
        </li>

      </ul>


    </div>

    <div class="navbar bg-base-content text-base-100 shadow-sm mt-10 md:mt-16 xl:mt-0">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Mail, Copy, ExternalLink, Linkedin, Github, FileUser, Download } from 'lucide-vue-next'
import { ref } from 'vue'

/**
 * Tooltip state management for copy buttons
 */
const showTooltip = ref<string | null>(null)

/**
 * Open external link in new browser tab
 * 
 * @param url - URL to open
 */
const openLink = (url: string): void => {
  window.open(url, '_blank');
};

/**
 * Copy text to system clipboard
 * 
 * @param text - Text to copy to clipboard
 * @param buttonId - Unique identifier for the button to show tooltip
 */
const copyToClipboard = async (text: string, buttonId: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    // Show tooltip for this specific button
    showTooltip.value = buttonId;
    // Hide tooltip after 1 second
    setTimeout(() => {
      showTooltip.value = null;
    }, 1000);
  } catch (err) {
    console.error('Failed to copy text to clipboard: ', err);
  }
};

/**
 * Download CV file
 * Creates a temporary download link and triggers the download
 */
const downloadCV = (): void => {
  const link = document.createElement('a');
  link.href = 'Roman-Pretty-CV.pdf';
  link.download = 'Roman-Pretty-CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
