<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

const isPrepOpen = ref(false)
const isMenuOpen = ref(false)

// Global SEO Schema
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "বাংলাদেশ সরকারি চাকরি পোর্টাল",
        "url": "https://bd-govt-jobs.vercel.app/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bd-govt-jobs.vercel.app/circulars?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Top Government Banner -->
    <div class="gov-bg-green py-2 border-b-2 border-red-700 sticky top-0 z-[60]">
      <div class="container mx-auto px-4 flex justify-between items-center text-white text-[10px] md:text-sm">
        <span class="truncate">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</span>
        <span class="hidden sm:inline">Government of the People's Republic of Bangladesh</span>
        <span class="sm:hidden">Govt of Bangladesh</span>
      </div>
    </div>

    <!-- Main Header -->
    <header class="bg-white border-b shadow-sm sticky top-[34px] md:top-[40px] z-50">
      <div class="container mx-auto px-4 py-4 md:py-6">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3 md:gap-4">
            <img src="@/assets/logo.svg" alt="Gov Logo" class="h-12 w-12 md:h-20 md:w-20" />
            <div>
              <h1 class="text-lg md:text-2xl font-bold gov-text-green leading-tight">
                বাংলাদেশ সরকারি চাকরি পোর্টাল
              </h1>
              <p class="text-gray-600 text-xs md:text-base font-medium">
                BD Govt Jobs Portal
              </p>
            </div>
          </div>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation (Desktop) -->
      <nav class="hidden md:block bg-gray-100 border-y border-gray-200">
        <div class="container mx-auto px-4">
          <ul class="flex">
            <li>
              <RouterLink to="/" class="nav-link" :class="{ 'active': $route.name === 'home' }">
                Home
              </RouterLink>
            </li>

            <li class="relative group" @mouseenter="isPrepOpen = true" @mouseleave="isPrepOpen = false">
              <button 
                class="nav-link flex items-center gap-1"
                :class="{ 'active': $route.path.startsWith('/preparation') }"
              >
                প্রস্তুতি (Preparation)
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              
              <div 
                v-show="isPrepOpen"
                class="absolute left-0 top-full w-64 bg-white border shadow-xl rounded-b-lg z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <RouterLink @click="isPrepOpen = false" to="/preparation/bcs" class="dropdown-item green">বিসিএস প্রস্তুতি (BCS)</RouterLink>
                <RouterLink @click="isPrepOpen = false" to="/preparation/bank-govt" class="dropdown-item blue">সরকারি ব্যাংক প্রস্তুতি (Govt Bank)</RouterLink>
                <RouterLink @click="isPrepOpen = false" to="/preparation/bank-private" class="dropdown-item indigo">প্রাইভেট ব্যাংক প্রস্তুতি (Private Bank)</RouterLink>
                <RouterLink @click="isPrepOpen = false" to="/preparation/teacher" class="dropdown-item yellow">প্রাথমিক শিক্ষক প্রস্তুতি (Primary)</RouterLink>
              </div>
            </li>

            <li>
              <RouterLink to="/circulars" class="nav-link" :class="{ 'active': $route.name === 'circulars' }">
                সকল বিজ্ঞপ্তি
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Mobile Menu (Drawer) -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMenuOpen" class="md:hidden bg-white border-b shadow-lg absolute w-full z-40 overflow-hidden">
          <div class="px-4 py-6 space-y-4">
            <RouterLink @click="isMenuOpen = false" to="/" class="mobile-nav-link">Home</RouterLink>
            
            <div class="space-y-2">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest px-4">প্রস্তুতি (Preparation)</p>
              <RouterLink @click="isMenuOpen = false" to="/preparation/bcs" class="mobile-nav-link pl-8">বিসিএস (BCS)</RouterLink>
              <RouterLink @click="isMenuOpen = false" to="/preparation/bank-govt" class="mobile-nav-link pl-8">সরকারি ব্যাংক</RouterLink>
              <RouterLink @click="isMenuOpen = false" to="/preparation/bank-private" class="mobile-nav-link pl-8">প্রাইভেট ব্যাংক</RouterLink>
              <RouterLink @click="isMenuOpen = false" to="/preparation/teacher" class="mobile-nav-link pl-8">প্রাথমিক শিক্ষক</RouterLink>
            </div>

            <RouterLink @click="isMenuOpen = false" to="/circulars" class="mobile-nav-link">সকল বিজ্ঞপ্তি</RouterLink>
          </div>
        </div>
      </transition>
    </header>

    <main class="flex-grow container mx-auto px-4 py-6 md:py-8">
      <RouterView />
    </main>

    <footer class="bg-white border-t mt-auto py-8">
      <div class="container mx-auto px-4 text-center md:text-left">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p class="text-sm text-gray-600">
              © {{ new Date().getFullYear() }} All Rights Reserved.
            </p>
            <p class="text-xs text-gray-500 mt-1">
              এটি একটি ডেমো পোর্টাল। আবেদনের আগে অফিসিয়াল ওয়েবসাইট যাচাই করুন।
            </p>
          </div>
          <div class="flex items-center gap-4">
            <img src="@/assets/logo.svg" alt="Gov Logo" class="h-10 w-10 opacity-30 grayscale" />
            <div class="flex gap-4">
              <a href="#" class="text-gray-400 hover:text-green-700"><span class="sr-only">Facebook</span>FB</a>
              <a href="#" class="text-gray-400 hover:text-green-700"><span class="sr-only">Twitter</span>TW</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.nav-link {
  @apply inline-block py-3 px-4 text-sm font-medium border-b-2 border-transparent text-gray-600 hover:text-green-700 hover:bg-gray-50 transition;
}

.nav-link.active {
  @apply border-green-700 text-green-700 bg-white;
}

.mobile-nav-link {
  @apply block py-3 px-4 text-base font-bold text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition;
}

.dropdown-item {
  @apply block px-4 py-3 text-sm text-gray-700 font-medium border-t border-gray-50 transition;
}

.dropdown-item.green { @apply hover:bg-green-50 hover:text-green-700; }
.dropdown-item.blue { @apply hover:bg-blue-50 hover:text-blue-700; }
.dropdown-item.indigo { @apply hover:bg-indigo-50 hover:text-indigo-700; }
.dropdown-item.yellow { @apply hover:bg-yellow-50 hover:text-yellow-700; }

.animate-in {
  animation-duration: 0.2s;
  animation-fill-mode: both;
}
</style>
