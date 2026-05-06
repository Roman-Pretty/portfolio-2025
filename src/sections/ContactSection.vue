<!--
  Contact Section — MIDDLE alignment
-->
<template>
  <section id="contact" class="relative bg-[var(--canvas-2)] overflow-hidden py-24 lg:py-36">
    <div class="ambient ambient-orange w-[520px] h-[520px] top-10 left-1/2 -translate-x-1/2" aria-hidden="true"></div>
    <div class="ambient ambient-teal w-[420px] h-[420px] -bottom-32 left-1/2 -translate-x-1/2" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Centered header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="display text-4xl md:text-6xl lg:text-7xl">
          Let's <span class="italic font-serif font-light text-[var(--accent-orange)]">talk</span>.
        </h2>
        <p class="mt-6 max-w-xl mx-auto muted text-[15px]">
          Interested in my work or efficura? Email is the fastest way to reach me.
        </p>
      </div>

      <!-- Centered contact list -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
        class="max-w-7xl mx-auto border-t border-[var(--rule)]"
      >
        <a v-for="(c, i) in contacts" :key="c.label"
          :href="c.href"
          :target="c.external ? '_blank' : '_self'"
          rel="noopener"
          class="group grid grid-cols-12 gap-4 items-baseline py-6 border-b border-[var(--rule)] hover:bg-[var(--canvas)]/60 transition px-2 -mx-2 rounded-sm"
        >
          <div class="col-span-4 sm:col-span-3 eyebrow flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full" :style="{ background: dotColor(i) }"></span>
            {{ c.label }}
          </div>
          <div class="col-span-7 sm:col-span-8 text-base lg:text-lg tracking-tight group-hover:text-[var(--accent-orange)] transition">
            {{ c.value }}
          </div>
          <div class="col-span-1 flex justify-end">
            <ArrowUpRight :size="18" class="muted group-hover:text-[var(--accent-orange)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowUpRight } from 'lucide-vue-next'

const contacts = [
  { label: 'Email', value: 'roman@efficura.com', href: 'mailto:romanjjpretty@gmail.com', external: false },
  { label: 'LinkedIn', value: 'linkedin.com/in/roman-pretty', href: 'https://www.linkedin.com/in/roman-pretty/', external: true },
  { label: 'GitHub', value: 'github.com/Roman-Pretty', href: 'https://github.com/Roman-Pretty', external: true },
  { label: 'Company', value: 'efficura.com', href: 'https://efficura.com', external: true }
]

const palette = [
  'var(--accent-orange)',
  'var(--accent-teal)',
  'var(--accent-indigo)',
  'var(--accent-amber)'
]
const dotColor = (i: number): string => palette[i % palette.length]
</script>
