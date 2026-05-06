<!--
  Header — minimal, glassy on scroll
-->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowRight, Menu, X } from 'lucide-vue-next'

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 12 }
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-40 print:hidden transition-[background,backdrop-filter] duration-500',
      scrolled ? 'glass-strong' : 'bg-transparent'
    ]"
  >
    <!-- Hairline underline that fades in (no harsh black border) -->
    <div
      class="absolute left-0 right-0 bottom-0 h-px transition-opacity duration-500 pointer-events-none"
      :class="scrolled ? 'opacity-100' : 'opacity-0'"
      style="background: var(--rule);"
    ></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-3 group">
        <svg viewBox="0 0 32 32" class="w-6 h-6 opacity-80 group-hover:opacity-100 transition" aria-hidden="true">
          <g fill="currentColor">
            <circle cx="7"  cy="7"  r="2"/><circle cx="14" cy="7"  r="2"/><circle cx="21" cy="7"  r="2"/><circle cx="28" cy="7"  r="2"/>
            <circle cx="7"  cy="14" r="2"/><circle cx="14" cy="14" r="2"/><circle cx="21" cy="14" r="2"/><circle cx="28" cy="14" r="2"/>
            <circle cx="7"  cy="21" r="2"/><circle cx="14" cy="21" r="2"/><circle cx="21" cy="21" r="2"/><circle cx="28" cy="21" r="2"/>
            <circle cx="7"  cy="28" r="2"/><circle cx="14" cy="28" r="2"/><circle cx="21" cy="28" r="2"/><circle cx="28" cy="28" r="2"/>
          </g>
        </svg>
        <span class="text-[15px] font-medium tracking-tight">Roman Pretty</span>
      </a>

      <ul class="hidden lg:flex items-center gap-10 text-sm muted">
        <li><a href="#about" class="link-quiet">About</a></li>
        <li><a href="#work" class="link-quiet">Work</a></li>
        <li><a href="#awards" class="link-quiet">Awards</a></li>
        <li><a href="#timeline" class="link-quiet">Timeline</a></li>
      </ul>

      <div class="flex items-center gap-3">
        <a href="#contact" class="hidden lg:inline-flex items-center gap-2 text-sm muted link-quiet">
          Get in touch <ArrowRight :size="16" />
        </a>
        <button class="lg:hidden p-2 -mr-2" @click="open = !open" aria-label="Toggle menu">
          <X v-if="open" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <div v-if="open" class="lg:hidden glass-strong border-t border-[var(--rule)]">
      <ul class="px-6 py-4 flex flex-col gap-4 text-base">
        <li><a @click="open = false" href="#about" class="link-quiet">About</a></li>
        <li><a @click="open = false" href="#work" class="link-quiet">Work</a></li>
        <li><a @click="open = false" href="#awards" class="link-quiet">Awards</a></li>
        <li><a @click="open = false" href="#timeline" class="link-quiet">Timeline</a></li>
        <li><a @click="open = false" href="#contact" class="link-quiet">Get in touch</a></li>
      </ul>
    </div>
  </nav>
</template>
