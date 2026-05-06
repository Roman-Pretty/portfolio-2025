<!--
  Projects Section — RIGHT alignment
-->
<template>
  <section id="work" class="relative bg-[var(--canvas)] overflow-hidden py-24 lg:py-36">
    <div class="ambient ambient-orange w-[520px] h-[520px] -top-40 -right-32" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="grid grid-cols-12 mb-16"
      >
        <div class="col-span-12 lg:col-span-9 lg:col-start-4 text-right">
          <h2 class="display text-4xl md:text-6xl lg:text-7xl">
            Things I've <span class="italic font-serif font-light text-[var(--accent-orange)]">shipped</span>.
          </h2>
          <p class="mt-6 ml-auto max-w-xl muted text-[15px]">
            A few of these are uni projects, late-night experiments or favours for friends. I promise I know what I'm doing now. Click any project for the full story.
          </p>
        </div>
      </div>

      <div
        v-if="featured"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 900, delay: 100 } }"
        class="mb-20 cursor-pointer group"
        @click="openProjectModal(featured)"
      >
        <div class="grid grid-cols-12 gap-6 lg:gap-12 items-center">
          <div class="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <div class="relative aspect-[16/10] overflow-hidden bg-[var(--canvas-2)] border border-[var(--rule)] rounded-sm">
              <img :src="featured.image" :alt="featured.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div class="absolute top-4 left-4 flex items-center gap-2">
                <span class="idx-pill">01</span>
                <span class="eyebrow numeric glass-strong px-2 py-1 rounded-sm">Featured</span>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 lg:text-right">
            <div class="eyebrow mb-4 text-[var(--accent-orange)]">{{ featured.technologies?.[0] || 'Project' }}</div>
            <h3 class="display text-3xl lg:text-5xl mb-4 group-hover:text-[var(--accent-orange)] transition">{{ featured.title }}</h3>
            <p class="muted text-[15px] leading-relaxed mb-6">{{ featured.fullDescription || featured.description }}</p>
            <div class="flex flex-wrap lg:justify-end gap-x-3 gap-y-1 text-[10px] uppercase tracking-wider faint">
              <span v-for="t in featured.technologies" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        <div
          v-for="(project, i) in rest"
          :key="project.title"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 80 * (i % 3) } }"
        >
          <ProjectCard
            v-bind="project"
            :index="i + 2"
            @click="openProjectModal"
          />
        </div>
      </div>
    </div>

    <ProjectModal :project="selectedProject" modal-id="project_modal" />
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  link?: string;
  githubLink?: string;
  technologies?: string[];
  variant?: 'white' | 'blue' | 'orange' | 'purple' | 'green';
}

const projects: Project[] = [
  {
    title: 'Elenai, Minecraft Mods',
    description: '27M+ downloads across a Minecraft Forge ecosystem.',
    fullDescription: 'A long-running Minecraft Forge ecosystem with over 27 million downloads. Java, custom APIs, Gradle pipelines and a sizeable user community built up over years of releases.',
    image: '/ed.png',
    technologies: ['Java', 'Forge', 'Gradle', 'Community'],
    githubLink: 'https://github.com/ElenaiDev/ElenaiDodge2.0',
    link: 'https://www.curseforge.com/members/elenaidev/projects'
  },
  {
    title: 'AI Chatbot for QMUL Students',
    description: 'RAG-powered assistant trained on university module data.',
    fullDescription: 'A web-scraping plus Retrieval-Augmented Generation system that answers natural-language questions about QMUL modules using an LLM grounded on official course pages.',
    image: '/qmb.png',
    technologies: ['Python', 'RAG', 'LLM', 'Web Scraping'],
    githubLink: 'https://github.com/Roman-Pretty/module-bot'
  },
  {
    title: 'CIFAR-10 Neural Network',
    description: 'Deep learning image classifier hitting over 90% test accuracy.',
    fullDescription: 'A PyTorch implementation exploring CNN architectures, regularization and optimization strategies on the CIFAR-10 dataset.',
    image: '/nn.png',
    technologies: ['Python', 'PyTorch', 'CNNs'],
    githubLink: 'https://github.com/Roman-Pretty/portfolio-2025/blob/main/src/nn/CIFAR10%20Classifier.ipynb'
  },
  {
    title: 'SWRPG Datapads',
    description: 'In-fiction Star Wars RPG companion app with thousands of users.',
    fullDescription: 'A Figma-designed, web-built companion app for the Star Wars Roleplaying Game with significant community traction.',
    image: '/datapad.png',
    technologies: ['Figma', 'UI/UX', 'Web'],
    link: 'https://datapad.romanpretty.com',
    githubLink: 'https://github.com/Roman-Pretty/swrpg-datapad'
  },
  {
    title: 'X-Wing Unlimited',
    description: 'Vue.js squad-builder for the X-Wing tabletop community.',
    fullDescription: 'A growing Vue plus TypeScript application supporting squad construction, list sharing and game management for the X-Wing miniatures community.',
    image: '/xwu.png',
    technologies: ['Vue', 'TypeScript', 'Web'],
    link: 'https://xwingunlimited.com',
    githubLink: 'https://github.com/Roman-Pretty/xwingcards'
  },
  {
    title: 'Hobby 24',
    description: 'Team-built social platform connecting hobbyists.',
    fullDescription: 'A full-stack social application built with a team: profiles, communities and activity sharing around shared interests.',
    image: '/h24.png',
    technologies: ['Full-Stack', 'Team', 'Social'],
    link: 'https://group24-web-apps-ec221017.apps.a.comp-teach.qmul.ac.uk/login/',
    githubLink: 'https://github.com/Roman-Pretty/hobby24'
  },
  {
    title: 'TourCast',
    description: 'Activity recommendations driven by weather forecasts.',
    fullDescription: 'A weather-aware recommendation app that suggests outdoor activities based on location and forecast.',
    image: '/tc.png',
    technologies: ['Weather APIs', 'Geo', 'REST'],
    githubLink: 'https://github.com/Roman-Pretty/TourCast'
  },
  {
    title: 'Sheringham Acupuncture',
    description: 'Client landing page with appointment booking.',
    fullDescription: 'A bespoke landing page and booking flow built to client specification for a UK acupuncture practice.',
    image: '/sha.png',
    technologies: ['Web', 'Client', 'Booking'],
    link: 'http://sheringhamacupuncture.co.uk',
    githubLink: 'https://github.com/Roman-Pretty/sheringham-acupuncture'
  },
  {
    title: 'Exchange Rate Extension',
    description: 'Lightweight Chrome extension for live FX rates.',
    fullDescription: 'A small Chrome extension surfacing real-time exchange rates and quick conversions in the browser toolbar.',
    image: '/ce.png',
    technologies: ['Chrome', 'APIs'],
    githubLink: 'https://github.com/Roman-Pretty/Exchange-Rate-Chrome-Extension'
  },
  {
    title: 'Holly-Eva',
    description: 'Portfolio site for a UK-based musician.',
    fullDescription: 'A bespoke portfolio site for musician Holly-Eva, with media integration and a refined editorial layout.',
    image: '/he.png',
    technologies: ['Web', 'Portfolio'],
    link: 'https://holly-eva.com',
    githubLink: 'https://github.com/Roman-Pretty/holly-eva'
  }
]

const featured = computed(() => projects[0])
const rest = computed(() => projects.slice(1))

const selectedProject = ref<Project | null>(null)

const openProjectModal = (project: Project): void => {
  selectedProject.value = project
  const modal = document.getElementById('project_modal') as HTMLDialogElement | null
  modal?.showModal()
}
</script>
