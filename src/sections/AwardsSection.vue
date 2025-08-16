<!--
  Awards Section Component
  
  Displays academic and professional awards and recognition.
-->
<template>
  <div id="awards" class="min-h-[calc(50vh)] bg-base-300/80 md:pt-18 pt-6 xl:px-64 px-10 font-serif md:pb-20 pb-6 relative">
    <!-- Background Stars -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <Star class="absolute text-gray-500 opacity-10 w-16 h-16 left-1/5 top-24 transform -rotate-12"
        fill="currentColor" />
      <Star class="absolute text-gray-500 opacity-10 w-20 h-20 left-1/4 top-16 transform rotate-6"
        fill="currentColor" />
      <Star class="absolute text-gray-500 opacity-10 w-16 h-16 right-1/5 top-24 transform -rotate-12"
        fill="currentColor" />
      <Star class="absolute text-gray-500 opacity-10 w-20 h-20 right-1/4 top-16 transform rotate-6"
        fill="currentColor" />
    </div>

    <h1 class="w-full text-center text-2xl md:text-5xl mb-4 relative z-10">Awards</h1>
    <h2 class="w-full text-center text-md md:text-2xl text-base-content/50 md:mb-18 mb-6 relative z-10">Recognition I have
      received at
      university</h2>

    <!-- Awards Grid -->
    <div class="max-w-6xl mx-auto font-sans relative z-10">
      <div class="flex w-full flex-col lg:flex-row gap-0">

        <!-- QMUL Award -->
        <div class="flex-1">
          <Award title="Westfield Trust Prize" awarded-by="QMUL Core Awards Body" variant="primary" link="https://www.qmul.ac.uk/registry-services/student-information/my-studies-/my-documents/documents-at-queen-mary-/academic-prizes-/" />
        </div>

        <!-- Divider 1 -->
        <div class="divider lg:divider-horizontal opacity-50"></div>


        <!-- EECS Award 2 -->
        <div class="flex-1">
          <Award title="Best Project Showcase" awarded-by="QMUL School of EECS" variant="primary" link="https://www.linkedin.com/posts/roman-pretty-054800209_i-am-honoured-to-have-received-both-the-demonstrator-activity-7343988145677299713-mHwy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADT6cEABOPTJeZFqp_Pb4bl0ONyILEqpUcI" />
        </div>

        <!-- Divider 2 -->
        <div class="divider lg:divider-horizontal opacity-50"></div>

        <!-- EECS Award 1 -->
        <div class="flex-1">
          <Award title="Demonstrator of the Year" awarded-by="QMUL School of EECS" variant="primary" link="https://www.linkedin.com/posts/roman-pretty-054800209_i-am-honoured-to-have-received-both-the-demonstrator-activity-7343988145677299713-mHwy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADT6cEABOPTJeZFqp_Pb4bl0ONyILEqpUcI" />
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Star } from 'lucide-vue-next'
import Award from '../components/Award.vue'
</script>
