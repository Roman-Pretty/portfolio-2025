<!--
  Main Portfolio Page Component
  
  The primary landing page showcasing personal information, projects,
  experience timeline, and contact information in a responsive layout.
-->
<template>
  <!-- Hero Section -->
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

  <!-- About Section -->
  <div class=" py-18 lg:px-64 font-serif relative" id="about">
    <h1 class="w-full text-center  text-2xl md:text-5xl mb-4">About Me</h1>
    <h2 class="w-full text-center text-md md:text-2xl text-base-content/50 mb-18">A little bit about who I am</h2>
    <div class="w-1/2 h-2 bg-secondary hidden md:flex absolute top-48 skew-1/2 left-1/4" />
    <div class="w-1/2 h-2 bg-primary/60 hidden md:flex absolute top-[11.8rem] skew-[0.3] left-1/4" />

    <p class="text-base-content/50 lg:px-0 px-8 lg:columns-2 columns-1 gap-6 text-justify">
      I’m a Computer Science MSci student at Queen Mary University of
      London, currently in my final year and on track to graduate with a first-class degree. I have a strong
      interest in Software Development and Design, and I’ve enjoyed modules like
      Web Programming, Neural Networks and Big Data Processing. Throughout my studies, I've enjoyed working on
      practical tasks, and believe the best way to learn is by doing.
      <br class="flex lg:hidden" /> <br class="flex lg:hidden" />

      I’ve gained a deeper understanding of my degree through hands-on experience as a Teaching Assistant and STEM
      Activity Leader
      which has helped me develop strong leadership, mentoring, and communication skills. I’ve led projects using React,
      Java,
      and Python, such as a an AI Webscraping Chatbot and a series of game modifications. Outside of work,
      I enjoy martial-arts, studying Spanish, and reading or listening to audiobooks.
    </p>

  </div>

  <!-- Projects Section -->
  <div id="projects" class="min-h-[calc(100vh-4rem)] bg-base-200 pt-18 xl:px-64 px-10 font-serif pb-20">
    <h1 class="w-full text-center lg:text-end  text-2xl md:text-5xl mb-4">My Projects</h1>
    <h2 class="w-full text-center lg:text-end text-md md:text-2xl text-base-content/50 mb-8 lg:mb-12">Here are some of
      my favourite
      projects</h2>

    <!-- Project Grid -->
    <div class="max-w-6xl mx-auto">
      <!-- Tablet and Desktop: Staggered grid layout -->
      <div>
        <!-- Row 1 - Left shifted (3 columns on tablet, 4 on desktop) -->
        <div class="grid grid-cols-3 lg:grid-cols-4 gap-6 mb-6 transform -translate-x-4 lg:-translate-x-16">
          <div class="aspect-square">
            <ProjectCard title="AI-Chatbot for QMUL Students"
              description="AI-powered web scraping and RAG LLM system built for university module information."
              full-description="An advanced AI system that combines web scraping capabilities with Retrieval-Augmented Generation (RAG) and Large Language Models to provide intelligent responses about university modules and course information."
              image="/qmb.png" :technologies="['Python', 'RAG', 'LLM', 'Web Scraping', 'AI/ML']" variant="blue"
              github-link="https://github.com/Roman-Pretty/module-bot" link="https://qmodulebot.com" @click="openProjectModal" />
          </div>

          <div class="aspect-square">
            <ProjectCard title="Neural Network CIFAR-10 Classifier"
              description="Deep learning model for image classification, with over 90% accuracy."
              full-description="A neural network implementation focused on the CIFAR-10 dataset, exploring various architectures and optimization techniques for image classification tasks."
              image="/nn.png" :technologies="['Python', 'Pytorch', 'Torch', 'CIFAR-10', 'Neural Networks']" variant="white"
              github-link="https://github.com/Roman-Pretty/portfolio-2025/blob/main/src/nn/CIFAR10%20Classifier.ipynb" @click="openProjectModal" />
          </div>

          <div class="aspect-square">
            <ProjectCard title="SWRPG Datapads"
              description="Figma design project for Star Wars RPG interface with extensive user engagement."
              full-description="A comprehensive UI design project created in Figma for Star Wars RPG, featuring detailed interface designs that have attracted significant user engagement and community feedback."
              image="/datapad.png" :technologies="['Figma', 'UI/UX Design', 'Just for Fun', 'Community Design']"
              variant="white" link="https://swrpgdatapad.com" github-link="https://github.com/Roman-Pretty/swrpg-datapad" @click="openProjectModal" />
          </div>

          <div class="aspect-square">
            <ProjectCard title="X-Wing Unlimited"
              description="Massive scale Vue.js web application for the tabletop boardgame X-Wing."
              full-description="A Vue.js-based web application supporting the X-Wing tabletop game community, featuring game management tools and player resources with a growing user base."
              image="/xwu.png" :technologies="['Vue.js', 'TypeScript', 'Web Development', 'Just for Fun', 'Community Design']"
              variant="white" link="https://xwingunlimited.com" github-link="https://github.com/Roman-Pretty/xwingcards"
              @click="openProjectModal" />
          </div>
        </div>

        <!-- Row 2 - Centered (3 columns on tablet, 4 on desktop) -->
        <div class="grid grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <div class="aspect-square">
            <ProjectCard title="Hobby 24 Social Platform"
              description="Team-developed social networking application connecting hobby enthusiasts."
              full-description="A collaborative social networking application developed with a team, designed to connect people with shared hobbies and interests, featuring user profiles, community groups, and activity sharing."
              image="/h24.png"
              :technologies="['Team Development', 'Social Networking', 'Full-Stack', 'Community Features']"
              variant="white" link="https://group24-web-apps-ec221017.apps.a.comp-teach.qmul.ac.uk/login/" github-link="https://github.com/Roman-Pretty/hobby24" @click="openProjectModal" />
          </div>
          <div class="aspect-square">
            <ProjectCard title="TourCast Weather App"
              description="Application providing activity recommendations based on the weather."
              full-description="A comprehensive weather forecast application that provides detailed meteorological information for travelers and outdoor enthusiasts, featuring location-based forecasts and weather alerts."
              image="/tc.png"
              :technologies="['Weather APIs', 'Location Services', 'REST', 'Data Visualization']"
              variant="white" github-link="https://github.com/Roman-Pretty/TourCast" @click="openProjectModal" />
          </div>

          <div class="aspect-square">
            <ProjectCard title="Enterprise Scale Java Projects"
              description="Massive-scale Minecraft modifications with over 23 million downloads."
              full-description="Complex Minecraft modifications reaching over 23 million downloads worldwide. Built with Java, Minecraft Forge and my own custom API, these projects demonstrate enterprise-level software development with massive user adoption and community engagement. I am on hiatus from these projects whilst studying, but they are still available for download and use."
              image="/ed.png" :technologies="['Java', 'Minecraft Forge', 'Gradle', 'Community Management']"
              variant="blue" github-link="https://github.com/ElenaiDev/ElenaiDodge2.0" link="https://www.curseforge.com/members/elenaidev/projects" @click="openProjectModal" />
          </div>

          <div class="aspect-square">
            <ProjectCard title="Sheringham Acupuncture"
              description="Professional landing page for acupuncture practice with appointment booking system."
              full-description="A professional website developed for Sheringham Acupuncture practice to a given specification, featuring appointment booking functionality. The design is specified by the client."
              image="/sha.png"
              :technologies="['Healthcare', 'Appointment System', 'Professional Services', 'Web Development']"
              variant="white" link="http://sheringhamacupuncture.co.uk" github-link="https://github.com/Roman-Pretty/sheringham-acupuncture"
              @click="openProjectModal" />
          </div>
        </div>

        <!-- Row 3 - Right shifted (2 columns on tablet, 4 on desktop) -->
        <div class="transform translate-x-4 lg:translate-x-16">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="aspect-square">
              <ProjectCard title="did my chores!"
                description="React Native application for chore tracking and management."
                full-description="What I am currently working on! A React Native mobile application designed for chore tracking and management, featuring task assignment, progress tracking, and reminders. When published, it will be linked below."
                image="/dmc.png" :technologies="['React Native', 'Mobile Development', 'Task Management']"
                variant="white" @click="openProjectModal" />
            </div>

            <div class="aspect-square">
              <ProjectCard title="Exchange Rate Chrome Extension"
                description="Super-simple browser extension for real-time currency exchange rate monitoring and conversion."
                full-description="A Chrome extension that provides real-time currency exchange rates and conversion tools, featuring quick access to current market rates and conversion calculations for international transactions."
                image="/ce.png" :technologies="['Chrome Extension', 'Just for Fun', 'APIs', 'Financial Data']"
                variant="white" 
                github-link="https://github.com/Roman-Pretty/Exchange-Rate-Chrome-Extension"
                @click="openProjectModal" />
            </div>

            <div class="aspect-square">
              <ProjectCard title="Holly-Eva Portfolio Site"
                description="Professional portfolio website for musician with elegant design and media integration."
                full-description="A custom-built portfolio website for musician Holly-Eva, featuring elegant design, media integration, and performance showcases to highlight her musical career and achievements."
                image="/he.png"
                :technologies="['Web Development', 'Media Integration', 'Portfolio Design', 'Music Industry']"
                variant="white" link="https://holly-eva.com" github-link="https://github.com/Roman-Pretty/holly-eva"
                @click="openProjectModal" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal :project="selectedProject" modal-id="project_modal" />
  </div>

  <!-- Awards Section -->
  <div id="awards" class="min-h-[calc(50vh)] bg-base-300/80 pt-18 xl:px-64 px-10 font-serif pb-20 relative">
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
    <h2 class="w-full text-center text-md md:text-2xl text-base-content/50 mb-18 relative z-10">Recognition I have
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
        <div class="divider divider-horizontal opacity-50"></div>


        <!-- EECS Award 2 -->
        <div class="flex-1">
          <Award title="Best Project Showcase" awarded-by="QMUL School of EECS" variant="primary" link="https://www.linkedin.com/posts/roman-pretty-054800209_i-am-honoured-to-have-received-both-the-demonstrator-activity-7343988145677299713-mHwy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADT6cEABOPTJeZFqp_Pb4bl0ONyILEqpUcI" />
        </div>

        <!-- Divider 2 -->
        <div class="divider divider-horizontal opacity-50"></div>

        <!-- EECS Award 1 -->
        <div class="flex-1">
          <Award title="Demonstrator of the Year" awarded-by="QMUL School of EECS" variant="primary" link="https://www.linkedin.com/posts/roman-pretty-054800209_i-am-honoured-to-have-received-both-the-demonstrator-activity-7343988145677299713-mHwy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADT6cEABOPTJeZFqp_Pb4bl0ONyILEqpUcI" />
        </div>

      </div>
    </div>
  </div>

  <!-- Experience Timeline Section -->
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

  <!-- Contact Section -->
  <div class="h-[calc(100%-8rem)] w-full bg-base-200">
    <div class="w-full h-full flex flex-col items-center pt-18 font-serif lg:px-64">
      <h1 class="w-full text-center  text-2xl md:text-5xl mb-4">Reach out</h1>
      <h2 class="w-full text-center text-md md:text-2xl text-base-content/50 mb-18 max-w-2/3">Please email me if you
        have any
        enquiries, or
        download my CV</h2>

      <ul class="list bg-base-100 rounded-box border-1 border-base-300 w-2/3 font-sans">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Contact Information</li>

        <!-- Email -->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <Mail :size="24" />
            </div>
          </div>
          <div>
            <div>Email</div>
            <div class="text-xs font-semibold opacity-60">romanjjpretty@gmail.com</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openLink('mailto:romanjjpretty@gmail.com')">
            <ExternalLink :size="20" />
          </button>
          <div class="relative">
            <button class="btn btn-square btn-ghost" @click="copyToClipboard('romanjjpretty@gmail.com', 'email-copy')">
              <Copy :size="20" />
            </button>
            <!-- Tooltip -->
            <div v-if="showTooltip === 'email-copy'"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs whitespace-nowrap z-50">
              Copied!
            </div>
          </div>
        </li>

        <!-- LinkedIn -->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <Linkedin :size="24" />
            </div>
          </div>
          <div>
            <div>LinkedIn</div>
            <div class="text-xs font-semibold opacity-60">roman-pretty-054800209</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openLink('https://linkedin.com/in/roman-pretty-054800209')">
            <ExternalLink :size="20" />
          </button>
          <div class="relative">
            <button class="btn btn-square btn-ghost"
              @click="copyToClipboard('https://www.linkedin.com/in/roman-pretty-054800209/', 'linkedin-copy')">
              <Copy :size="20" />
            </button>
            <!-- Tooltip -->
            <div v-if="showTooltip === 'linkedin-copy'"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs whitespace-nowrap z-50">
              Copied!
            </div>
          </div>
        </li>

        <!-- GitHub -->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <Github :size="24" />
            </div>
          </div>
          <div>
            <div>GitHub</div>
            <div class="text-xs font-semibold opacity-60">Roman-Pretty</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="openLink('https://github.com/Roman-Pretty')">
            <ExternalLink :size="20" />
          </button>
          <div class="relative">
            <button class="btn btn-square btn-ghost"
              @click="copyToClipboard('https://github.com/Roman-Pretty', 'github-copy')">
              <Copy :size="20" />
            </button>
            <!-- Tooltip -->
            <div v-if="showTooltip === 'github-copy'"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral text-neutral-content px-2 py-1 rounded text-xs whitespace-nowrap z-50">
              Copied!
            </div>
          </div>
        </li>
        <!--        CV-->
        <li class="list-row">
          <div class="card bg-base-100 shadow-sm w-10 h-10">
            <div class="opacity-60 w-full h-full flex items-center justify-center">
              <FileUser :size="24" />
            </div>
          </div>
          <div>
            <div>CV</div>
            <div class="text-xs font-semibold opacity-60">Download</div>
          </div>
          <button class="btn btn-square btn-ghost" @click="downloadCV">
            <Download :size="20" />
          </button>
        </li>

      </ul>


    </div>

    <div class="navbar bg-base-content text-base-100 shadow-sm mt-10 md:mt-16 xl:mt-0">
    </div>
  </div>
</template>

/**
* Main Portfolio Page Component
*
* The primary landing page component that showcases:
* - Hero section with personal introduction
* - About section with background information
* - Projects section with interactive project cards
* - Experience timeline
* - Contact information and social links
*/

<script lang="ts" setup>
import { ArrowDownRight, Mail, Copy, ExternalLink, Linkedin, Github, FileUser, Download, Star } from 'lucide-vue-next'
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'
import Award from '../components/Award.vue'

/**
 * Project data interface
 */
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

/**
 * Modal state management
 */
const selectedProject = ref<Project | null>(null)

/**
 * Tooltip state management for copy buttons
 */
const showTooltip = ref<string | null>(null)

/**
 * Open project modal with selected project data
 * 
 * @param project - Project data to display in modal
 */
const openProjectModal = (project: Project): void => {
  console.log('openProjectModal called with:', project);
  selectedProject.value = project;
  // Use DOM manipulation to open the modal
  const modal = document.getElementById('project_modal') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}

/**
 * Open external link in new browser tab
 * 
 * @param url - URL to open
 */
const openLink = (url: string): void => {
  window.open(url, '_blank');
};

/**
 * Copy text to system clipboard
 * 
 * @param text - Text to copy to clipboard
 * @param buttonId - Unique identifier for the button to show tooltip
 */
const copyToClipboard = async (text: string, buttonId: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    // Show tooltip for this specific button
    showTooltip.value = buttonId;
    // Hide tooltip after 1 second
    setTimeout(() => {
      showTooltip.value = null;
    }, 1000);
  } catch (err) {
    console.error('Failed to copy text to clipboard: ', err);
  }
};

/**
 * Download CV file
 * Creates a temporary download link and triggers the download
 */
const downloadCV = (): void => {
  const link = document.createElement('a');
  link.href = 'Roman-Pretty-CV.pdf';
  link.download = 'Roman-Pretty-CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
