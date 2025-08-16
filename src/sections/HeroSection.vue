<!--
  Hero Section Component
  
  The landing section with personal introduction and profile image.
-->
<template>
  <div class="hero min-h-[calc(100%-4rem)] bg-base-200">
    <div class="hero-content text-center font-serif flex-col-reverse lg:flex-row mt-28 lg:mt-0">
      <div class="flex-1 flex flex-col items-center">
        <h1 class="text-xl lg:text-5xl lg:max-w-4/5">Hey there, I'm <span>Roman</span>, a
          <span class="relative z-2 text-nowrap">Computer Science
            <div class="absolute top-4 lg:top-8 left-0 w-full h-2 lg:h-5 bg-blue-200 -z-1 -skew-1" />
          </span>
          student based in London
        </h1>
        <p class="py-6 text-base-content/50 lg:max-w-4/5">
          I'm a Masters student at Queen Mary University of London, consistently achieving First
          Class grades in all completed years and modules.
          <br /><br />
          I have a strong interest in software development and have experience developing applications
          with a variety of frameworks and toolsets.
        </p>
        <div class="lg:w-4/5 flex justify-end  mb-8 lg:mb-0">
          <a href="#about"
            class="font-sans pb-2 hover:pb-1 hover:mb-1 hover:text-blue-400  border-b-1 flex gap-2 items-center">Find
            out more
            <ArrowDownRight :size="20" />
          </a>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center relative z-2">
        <svg class="hidden lg:block absolute -z-1 -right-6 -top-28" id="sw-js-blob-svg" viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
              <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient)"
            d="M24.1,-25.5C30.1,-23.6,33.1,-15,33.8,-6.6C34.6,1.9,33.1,10.1,29.5,17.8C25.9,25.5,20.2,32.6,13.4,33.9C6.5,35.1,-1.4,30.4,-10.2,27.5C-18.9,24.5,-28.5,23.2,-34.6,17.6C-40.7,12,-43.3,1.9,-38.6,-3.7C-33.9,-9.3,-21.8,-10.5,-14.2,-12C-6.5,-13.6,-3.3,-15.6,2.9,-19C9,-22.5,18.1,-27.4,24.1,-25.5Z"
            width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: 0.3s;"
            stroke="url(#sw-gradient)"></path>
        </svg>
        <div class="w-1/2 flex flex-col items-center justify-center mb-20">
          <img class="mask mask-squircle w-full" src="../assets/roman.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDownRight } from 'lucide-vue-next'
</script>
