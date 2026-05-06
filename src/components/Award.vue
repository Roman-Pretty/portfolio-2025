<!--
  Award row — colored accent
-->
<script setup lang="ts">
import { ArrowUpRight, Award as AwardIcon } from 'lucide-vue-next';

interface AwardProps {
  title: string;
  awardedBy: string;
  year?: string;
  variant?: 'orange' | 'teal' | 'amber';
  link?: string;
}

const props = defineProps<AwardProps>();

const handleClick = (): void => {
  if (props.link) window.open(props.link, '_blank');
};

const accent = (): string => {
  switch (props.variant) {
    case 'teal': return 'text-[var(--accent-teal)]'
    case 'amber': return 'text-[var(--accent-amber)]'
    default: return 'text-[var(--accent-orange)]'
  }
}
</script>

<template>
  <div
    @click="handleClick"
    :class="[
      'group py-8 lg:py-9 grid grid-cols-12 gap-4 items-baseline transition-colors',
      link ? 'cursor-pointer hover:bg-[var(--canvas)]/60' : ''
    ]"
  >
    <div class="col-span-2 lg:col-span-1 eyebrow numeric flex items-center gap-2">
      <AwardIcon :size="14" :class="accent()" />
      <span>{{ year || '' }}</span>
    </div>
    <div class="col-span-10 lg:col-span-7">
      <h3 class="text-xl lg:text-2xl font-medium tracking-tight group-hover:text-[var(--ink)]">{{ title }}</h3>
      <p class="mt-1 text-sm muted">{{ awardedBy }}</p>
    </div>
    <div class="hidden lg:block lg:col-span-3 text-sm muted">Recognition</div>
    <div class="col-span-12 lg:col-span-1 flex justify-start lg:justify-end">
      <ArrowUpRight v-if="link" :size="18"
        :class="['muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5', `group-hover:${accent()}`]" />
    </div>
  </div>
</template>
