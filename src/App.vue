<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
        <div class="container mx-auto px-4 overflow-x-auto">
          <ul class="flex whitespace-nowrap">
            <li>
              <RouterLink 
                to="/" 
                class="inline-block py-3 px-4 text-sm font-medium border-b-2 transition"
                :class="$route.name === 'home' ? 'border-green-700 text-green-700 bg-white' : 'border-transparent text-gray-600 hover:text-green-700 hover:bg-gray-50'"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <a href="#" class="inline-block py-3 px-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-green-700 hover:bg-gray-50 transition">
                Download Applicant's Copy
              </a>
            </li>
            <li>
              <a href="#" class="inline-block py-3 px-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-green-700 hover:bg-gray-50 transition">
                Payment Status
              </a>
            </li>
            <li>
              <a href="#" class="inline-block py-3 px-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-green-700 hover:bg-gray-50 transition">
                Recover User
              </a>
            </li>
            <li>
              <a href="#" class="inline-block py-3 px-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-green-700 hover:bg-gray-50 transition">
                Admit Card
              </a>
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
</style>
