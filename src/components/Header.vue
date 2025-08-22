<!--
  Header Navigation Component
  
  A responsive navigation header with mobile dropdown menu,
  brand name, navigation links, and contact button.
-->
<script setup lang="ts">
/**
 * Header navigation component
 * 
 * Provides sticky navigation with mobile-responsive design
 * and backdrop blur effects for modern appearance.
 */
</script>

<template>
  <!-- Main navigation bar with sticky positioning and backdrop blur -->
  <nav
    class="navbar bg-base-100/90 shadow-sm lg:px-46
    print:hidden text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">

    <!-- Left section: Mobile menu and brand -->
    <div class="navbar-start">
      <!-- Mobile dropdown menu -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Open mobile menu">
          <!-- Hamburger menu icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <!-- Mobile dropdown content -->
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#awards">Awards</a></li>
        </ul>
      </div>
      <!-- Brand name -->
      <a class="btn btn-ghost text-md" href="/">Roman Pretty</a>
    </div>

    <!-- Center section: Desktop navigation menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 dropdown">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#awards">Awards</a></li>
      </ul>
    </div>

    <!-- Right section: Contact button -->
    <div class="navbar-end">
      <a class="btn btn-primary text-base-100" href="mailto:romanjjpretty@gmail.com">Contact Me</a>
    </div>
  </nav>
</template>