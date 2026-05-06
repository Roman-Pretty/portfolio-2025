<!--
  Timeline Section — LEFT alignment
-->
<template>
  <section id="timeline" class="relative bg-[var(--canvas)] overflow-hidden py-24 lg:py-36">
    <div class="ambient ambient-indigo w-[460px] h-[460px] -top-32 -left-32" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Left-aligned header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="grid grid-cols-12 mb-16"
      >
        <div class="col-span-12 lg:col-span-9">
          <h2 class="display text-4xl md:text-6xl lg:text-7xl">
            A short <span class="italic font-serif font-light text-[var(--accent-indigo)]">history</span>.
          </h2>
          <p class="mt-6 max-w-xl muted text-[15px]">
            Education, career and the in-betweens. Most recent first.
          </p>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
        class="grid grid-cols-12 gap-y-16 lg:gap-x-12"
      >
        <!-- Career -->
        <div class="col-span-12 lg:col-span-6">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full bg-[var(--accent-orange)]"></span>
            <h3 class="eyebrow">Career</h3>
          </div>
          <div class="border-t border-[var(--rule)]">
            <article v-for="item in career" :key="item.title + item.year" class="py-6 grid grid-cols-12 gap-3 items-baseline border-b border-[var(--rule)] hover:bg-[var(--canvas-2)]/60 transition px-2 -mx-2 rounded-sm">
              <div class="col-span-4 sm:col-span-3 eyebrow numeric">{{ item.year }}</div>
              <div class="col-span-8 sm:col-span-9">
                <div class="text-base font-medium">{{ item.title }}</div>
                <div class="text-sm muted">{{ item.org }}</div>
              </div>
            </article>
          </div>
        </div>

        <!-- Education -->
        <div class="col-span-12 lg:col-span-6">
          <div class="flex items-center gap-2 mb-6">
            <span class="w-2 h-2 rounded-full bg-[var(--accent-teal)]"></span>
            <h3 class="eyebrow">Education</h3>
          </div>
          <div class="border-t border-[var(--rule)]">
            <article v-for="item in education" :key="item.title + item.year" class="py-6 grid grid-cols-12 gap-3 items-baseline border-b border-[var(--rule)] hover:bg-[var(--canvas-2)]/60 transition px-2 -mx-2 rounded-sm">
              <div class="col-span-4 sm:col-span-3 eyebrow numeric">{{ item.year }}</div>
              <div class="col-span-8 sm:col-span-9">
                <div class="text-base font-medium">{{ item.title }}</div>
                <div class="text-sm muted">{{ item.org }}</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const career = [
  { year: '2026, present', title: 'Co-founder & COO', org: 'Efficura' },
  { year: '2026, present', title: 'Software Developer', org: 'Efficura' },
  { year: '2023, 2026', title: 'Demonstrator Teaching Assistant', org: 'Queen Mary University of London' },
  { year: '2024, 2025', title: 'Activity Leader', org: 'MCS Projects' },
  { year: '2022', title: 'Gap-year roles', org: 'Starlings of Holt' },
  { year: '2017, 2021', title: 'Martial Arts Instructor', org: 'Tsunami Martial Arts' }
]

const education = [
  { year: '2026', title: 'MSci Computer Science, First Class', org: 'Queen Mary University of London' },
  { year: '2021', title: 'A-Levels A*A*A · EPQ A · LAMDA Grade 8', org: 'Wymondham College' },
  { year: '2019', title: '10 GCSEs', org: 'Sheringham High School' }
]
</script>
