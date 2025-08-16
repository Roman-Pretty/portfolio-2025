<!--
  Timeline Section Component
  
  Displays education and career timeline information.
-->
<template>
  <div class="w-full min-h-[calc(100%-4rem)] bg-base-100 flex flex-col items-center font-sans py-18">
    <h1 class=" text-2xl md:text-5xl font-serif mb-4 lg:pl-64 pl-4 lg:self-start ">Timelines</h1>
    <h2 class="font-serif mb-4 pl-4 lg:pl-64 lg:self-start text-md md:text-2xl text-base-content/50">My education and
      work
      history</h2>
    <p class="w-full text-center font-xs font-semibold mt-18">Education</p>
    <ul class="timeline timeline-vertical lg:timeline-horizontal px-6 lg:px-0">
      <li>
        <div class="timeline-start">2019</div>
        <div class="timeline-middle text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Graduated Sheringham High School with 10 GCSEs</div>
        <hr class="bg-primary" />
      </li>
      <li>
        <hr class="bg-primary" />
        <div class="timeline-start">2021</div>
        <div class="timeline-middle text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box text-wrap">Graduated Wymondham College with A*A*A, grade 8 LAMDA and an
          A in the EPQ
        </div>
        <hr class="bg-primary" />
      </li>
      <li>
        <hr />
        <div class="timeline-start">2026</div>
        <div class="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box">MSci Computer Science at QMUL</div>
      </li>
    </ul>


    <p class="w-full text-center font-xs font-semibold mt-18">Career</p>
    <ul class="timeline timeline-vertical lg:timeline-horizontal px-6 lg:px-0">
      <li>
        <div class="timeline-start">2017</div>
        <div class="timeline-middle text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Intructor at Tsunami Martial Arts</div>
        <hr class="bg-blue-400" />
      </li>
      <li>
        <hr class="bg-blue-400" />
        <div class="timeline-start">2022</div>
        <div class="timeline-middle text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box text-wrap">Gap year work at Starlings of Holt
        </div>
        <hr class="bg-blue-400" />
      </li>
      <li>
        <hr class="bg-blue-400" />
        <div class="timeline-start">2024 - 2025</div>
        <div class="timeline-middle text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Activity Leader at MCS Projects</div>
        <hr class="bg-blue-400" />
      </li>
      <li>
        <hr class="bg-blue-400" />
        <div class="timeline-start">2023 - Present</div>
        <div class="timeline-middle text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Demonstrator Teaching Assistant at QMUL</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// No additional imports needed for this section
</script>
