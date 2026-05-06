<!--
  Footer — minimal sign-off
-->
<template>
  <footer class="bg-[var(--canvas)] border-t border-[var(--rule)] py-12 print:hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-12 gap-y-8 gap-x-6 items-end">
      <!-- Brand -->
      <div class="col-span-12 md:col-span-5 flex items-center gap-3">
        <svg viewBox="0 0 32 32" class="w-7 h-7 opacity-80" aria-hidden="true">
          <g fill="currentColor">
            <circle cx="7"  cy="7"  r="2"/><circle cx="14" cy="7"  r="2"/><circle cx="21" cy="7"  r="2"/><circle cx="28" cy="7"  r="2"/>
            <circle cx="7"  cy="14" r="2"/><circle cx="14" cy="14" r="2"/><circle cx="21" cy="14" r="2"/><circle cx="28" cy="14" r="2"/>
            <circle cx="7"  cy="21" r="2"/><circle cx="14" cy="21" r="2"/><circle cx="21" cy="21" r="2"/><circle cx="28" cy="21" r="2"/>
            <circle cx="7"  cy="28" r="2"/><circle cx="14" cy="28" r="2"/><circle cx="21" cy="28" r="2"/><circle cx="28" cy="28" r="2"/>
          </g>
        </svg>
        <div>
          <div class="text-base font-medium tracking-tight">Roman Pretty</div>
          <div class="text-xs muted">Software engineer & designer · London</div>
        </div>
      </div>

      <!-- Links -->
      <div class="col-span-6 md:col-span-3">
        <div class="eyebrow mb-3">Connect</div>
        <ul class="space-y-1.5 text-sm">
          <li><a class="link-quiet" href="https://www.linkedin.com/in/roman-pretty/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a class="link-quiet" href="https://github.com/Roman-Pretty" target="_blank" rel="noopener">GitHub</a></li>
          <li><a class="link-quiet" href="mailto:romanjjpretty@gmail.com">Email</a></li>
        </ul>
      </div>

      <div class="col-span-6 md:col-span-2">
        <div class="eyebrow mb-3">Site</div>
        <ul class="space-y-1.5 text-sm">
          <li><a class="link-quiet" href="#about">About</a></li>
          <li><a class="link-quiet" href="#work">Work</a></li>
          <li><a class="link-quiet" href="#contact">Contact</a></li>
        </ul>
      </div>

      <div class="col-span-12 md:col-span-2 text-xs faint numeric md:text-right">
        © {{ year }} Roman Pretty
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>
