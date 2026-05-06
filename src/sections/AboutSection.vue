<!--
  About Section — MIDDLE alignment
-->
<template>
  <section id="about" class="relative bg-[var(--canvas-2)] overflow-hidden py-24 lg:py-36">
    <div class="ambient ambient-teal w-[520px] h-[520px] -top-32 left-1/2 -translate-x-1/2" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="display text-4xl md:text-6xl lg:text-7xl">
          Engineer, <span class="italic font-serif font-light text-[var(--accent-indigo)]">designer</span>.
        </h2>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 900, delay: 150 } }"
        class="max-w-6xl mx-auto"
      >
        <div class="grid md:grid-cols-3 gap-x-12 gap-y-8 text-[15px] leading-relaxed muted">
          <p>
            I'm Roman, a software engineer and designer based in London. I build products
            end to end, from interface and interaction through to the data layer and the
            team processes that keep it moving. I spend most of my time writing code, but
            I'm equally at home in design tools or running a planning session.
          </p>
          <p>
            I studied Computer Science (MSci) at Queen Mary University of London, graduating
            with a first-class degree. I've shipped across mobile and web: a 27M-download
            Java ecosystem, RAG-based chatbots, Vue apps used by thousands. Now I'm loving my job
            at efficura, building a credit deal platform for private credit.
          </p>
          <p>
            UX design is something I love. Working out why a flow feels
            wrong, then making it feel like nothing at all, is more important than a pretty UI. Outside work I train martial arts, study Spanish and hang out with friends (because I'm generic).
          </p>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-x-2 gap-y-2 text-xs">
          <span v-for="(tag, i) in tags" :key="tag"
            :class="['px-3 py-1 border rounded-full transition cursor-default', tagStyle(i)]">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const tags = [
  'TypeScript', 'Vue', 'React', 'Node', 'Python',
  'UX', 'Design Systems', 'Product', 'FinTech',
  'ML / RAG', 'Mobile'
]

const tagStyle = (i: number): string => {
  const palette = [
    'border-[var(--rule)] muted hover:text-[var(--ink)] hover:border-[var(--ink)]',
    'border-[var(--accent-orange-soft)] bg-[var(--accent-orange-soft)] text-[var(--accent-orange)]',
    'border-[var(--rule)] muted hover:text-[var(--ink)] hover:border-[var(--ink)]',
    'border-[var(--accent-teal-soft)] bg-[var(--accent-teal-soft)] text-[var(--accent-teal)]',
    'border-[var(--rule)] muted hover:text-[var(--ink)] hover:border-[var(--ink)]',
  ]
  return palette[i % palette.length]
}
</script>
