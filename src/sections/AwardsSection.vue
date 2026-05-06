<!--
  Awards Section — MIDDLE alignment
-->
<template>
  <section id="awards" class="relative bg-[var(--canvas-2)] overflow-hidden py-24 lg:py-36">
    <div class="ambient ambient-amber w-[480px] h-[480px] top-1/4 left-1/2 -translate-x-1/2" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="display text-4xl md:text-6xl lg:text-7xl">
          Awards & <span class="italic font-serif font-light text-[var(--accent-amber)]">honours</span>.
        </h2>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
        class="max-w-7xl mx-auto border-t border-[var(--rule)]"
      >
        <Award
          year="2025"
          variant="amber"
          title="Westfield Trust Prize"
          awarded-by="Queen Mary University of London, Core Awards"
          link="https://www.qmul.ac.uk/registry-services/student-information/my-studies-/my-documents/documents-at-queen-mary-/academic-prizes-/"
        />
        <div class="rule"></div>
        <Award
          year="2025"
          variant="orange"
          title="Best Project Showcase"
          awarded-by="QMUL, School of Electronic Engineering & Computer Science"
          link="https://www.linkedin.com/posts/roman-pretty-054800209_i-am-honoured-to-have-received-both-the-demonstrator-activity-7343988145677299713-mHwy"
        />
        <div class="rule"></div>
        <Award
          year="2025"
          variant="teal"
          title="Demonstrator of the Year"
          awarded-by="QMUL, School of Electronic Engineering & Computer Science"
          link="https://www.linkedin.com/posts/roman-pretty-054800209_i-am-honoured-to-have-received-both-the-demonstrator-activity-7343988145677299713-mHwy"
        />
        <div class="rule"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Award from '../components/Award.vue'
</script>
