<!--
  Hero Section — name + photo, vertically centered (LEFT alignment)
-->
<template>
  <section id="top" class="relative min-h-screen w-full overflow-hidden bg-[var(--canvas)] flex flex-col">
    <div class="ambient ambient-orange w-[520px] h-[520px] -top-40 -right-32" aria-hidden="true"></div>
    <div class="ambient ambient-teal w-[460px] h-[460px] top-[40%] -left-40" aria-hidden="true"></div>

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.06]"
      style="background-image: radial-gradient(circle at center, #111 1.2px, transparent 1.4px); background-size: 14px 14px;"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 flex-1 flex items-center max-w-7xl w-full mx-auto px-6 lg:px-10 pt-24 pb-16">
      <div class="w-full grid grid-cols-12 gap-8 lg:gap-10 items-center">
        <div class="col-span-12 lg:col-span-8 order-2 lg:order-1 min-w-0">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
            class="display whitespace-nowrap leading-[0.95]"
            style="font-size: clamp(2.75rem, 8.4vw, 7.25rem);"
          >
            Roman Pretty<span class="text-[var(--accent-orange)]">.</span>
          </h1>

          <p
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 350 } }"
            class="mt-8 max-w-xl text-base lg:text-lg muted leading-relaxed"
          >
            Software engineer and designer based in London. I build products end to end,
            from interface through to the data layer.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }"
            class="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8 max-w-xl"
          >
            <div>
              <div class="eyebrow mb-1">Role</div>
              <div class="text-sm">Developer</div>
            </div>
            <div>
              <div class="eyebrow mb-1">Based</div>
              <div class="text-sm">London, UK</div>
            </div>
            <div>
              <div class="eyebrow mb-1">Focus</div>
              <div class="text-sm">Product · Engineering</div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 700 } }"
            class="mt-12 flex flex-wrap items-center gap-6"
          >
            <a href="#work" class="group inline-flex items-center gap-2 text-sm link-quiet">
              Selected work
              <ArrowDownRight :size="16" class="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition" />
            </a>
            <a href="#contact" class="group inline-flex items-center gap-2 text-sm muted link-quiet">
              Get in touch
              <ArrowRight :size="16" class="group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>

        <div
          class="col-span-12 lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
          v-motion
          :initial="{ opacity: 0, scale: 0.96, y: 16 }"
          :visibleOnce="{ opacity: 1, scale: 1, y: 0, transition: { duration: 900, delay: 250 } }"
        >
          <div class="relative w-full max-w-[360px] aspect-square">
            <img src="/roman.jpeg" alt="Roman Pretty"
              class="w-full h-full object-cover grayscale contrast-[1.05]" />
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-10 pb-8">
      <div class="rule mb-6"></div>
      <div class="flex flex-wrap items-center justify-between gap-3 text-xs faint numeric">
        <span>© {{ new Date().getFullYear() }} Roman Pretty</span>
        <span class="hidden sm:inline">Software · Design · Product</span>
        <span class="inline-flex items-center gap-1">Scroll <ArrowDownRight :size="12" /></span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ArrowDownRight, ArrowRight } from 'lucide-vue-next'
</script>
