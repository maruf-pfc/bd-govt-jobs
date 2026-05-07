<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isPrepOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Top Government Banner -->
    <div class="gov-bg-green py-2 border-b-2 border-red-700">
      <div class="container mx-auto px-4 flex justify-between items-center text-white text-xs md:text-sm">
        <span>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</span>
        <span>Government of the People's Republic of Bangladesh</span>
      </div>
    </div>

    <!-- Main Header -->
    <header class="bg-white border-b shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center gap-4">
          <img src="@/assets/logo.svg" alt="Gov Logo" class="h-20 w-20" />
          <div>
            <h1 class="text-xl md:text-2xl font-bold gov-text-green leading-tight">
              বাংলাদেশ সরকারি চাকরি পোর্টাল
            </h1>
            <p class="text-gray-600 text-sm md:text-base font-medium">
              BD Govt Jobs Portal
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="bg-gray-100 border-y border-gray-200">
        <div class="container mx-auto px-4 overflow-visible">
          <ul class="flex">
            <li>
              <RouterLink 
                to="/" 
                class="inline-block py-3 px-4 text-sm font-medium border-b-2 transition"
                :class="$route.name === 'home' ? 'border-green-700 text-green-700 bg-white' : 'border-transparent text-gray-600 hover:text-green-700 hover:bg-gray-50'"
              >
                Home
              </RouterLink>
            </li>

            <!-- Preparation Dropdown -->
            <li class="relative group" @mouseenter="isPrepOpen = true" @mouseleave="isPrepOpen = false">
              <button 
                class="flex items-center gap-1 py-3 px-4 text-sm font-medium border-b-2 transition"
                :class="$route.path.startsWith('/preparation') ? 'border-green-700 text-green-700 bg-white' : 'border-transparent text-gray-600 hover:text-green-700 hover:bg-gray-50'"
              >
                প্রস্তুতি (Preparation)
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div 
                v-show="isPrepOpen"
                class="absolute left-0 top-full w-64 bg-white border shadow-xl rounded-b-lg z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <RouterLink to="/preparation/bcs" class="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium">
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 bg-green-700 rounded-full"></span>
                    বিসিএস প্রস্তুতি (BCS)
                  </div>
                </RouterLink>
                <RouterLink to="/preparation/bank-govt" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium border-t border-gray-50">
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 bg-blue-700 rounded-full"></span>
                    সরকারি ব্যাংক প্রস্তুতি (Govt Bank)
                  </div>
                </RouterLink>
                <RouterLink to="/preparation/bank-private" class="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 font-medium border-t border-gray-50">
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 bg-indigo-700 rounded-full"></span>
                    প্রাইভেট ব্যাংক প্রস্তুতি (Private Bank)
                  </div>
                </RouterLink>
                <RouterLink to="/preparation/teacher" class="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 font-medium border-t border-gray-50">
                  <div class="flex items-center gap-3">
                    <span class="w-2 h-2 bg-yellow-600 rounded-full"></span>
                    প্রাথমিক শিক্ষক প্রস্তুতি (Primary)
                  </div>
                </RouterLink>
              </div>
            </li>

            <li>
              <RouterLink 
                to="/circulars" 
                class="inline-block py-3 px-4 text-sm font-medium border-b-2 transition"
                :class="$route.name === 'circulars' ? 'border-green-700 text-green-700 bg-white' : 'border-transparent text-gray-600 hover:text-green-700 hover:bg-gray-50'"
              >
                সকল বিজ্ঞপ্তি
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView />
    </main>

    <footer class="bg-white border-t mt-auto py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-600">
              © {{ new Date().getFullYear() }} All Rights Reserved.
            </p>
            <p class="text-xs text-gray-500 mt-1">
              এটি একটি ডেমো পোর্টাল। আবেদনের আগে অফিসিয়াল ওয়েবসাইট যাচাই করুন।
            </p>
          </div>
          <div class="flex items-center gap-4">
            <img src="@/assets/logo.svg" alt="Gov Logo" class="h-10 w-10 opacity-50 grayscale" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.router-link-active {
  @apply border-green-700 text-green-700 bg-white;
}

.animate-in {
  animation-duration: 0.2s;
  animation-fill-mode: both;
}
</style>
