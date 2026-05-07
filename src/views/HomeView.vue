<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Welcome & Highlight Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <section class="md:col-span-2 bg-green-50 border-l-4 border-green-700 p-6 rounded-r">
        <h2 class="text-2xl font-bold text-green-900 mb-2">স্বাগতম, সরকারি চাকরির তথ্য পোর্টালে</h2>
        <p class="text-green-800">
          বাংলাদেশ সরকারের বিভিন্ন মন্ত্রণালয়, অধিদপ্তর এবং সংস্থার সর্বশেষ নিয়োগ বিজ্ঞপ্তিগুলো এখানে একসাথে পাবেন।
        </p>
      </section>

      <!-- Prep Cards -->
      <div class="space-y-4">
        <RouterLink to="/preparation/bcs" class="block bg-white border-2 border-green-700 p-4 rounded-xl shadow-sm hover:bg-green-50 transition">
          <h3 class="text-sm font-black text-green-900">বিসিএস প্রস্তুতি</h3>
          <p class="text-[10px] text-gray-500 mt-1">সিলেবাস ও প্রস্তুতি কৌশল →</p>
        </RouterLink>
        <RouterLink to="/preparation/bank-govt" class="block bg-white border-2 border-blue-700 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition">
          <h3 class="text-sm font-black text-blue-900">সরকারি ব্যাংক প্রস্তুতি</h3>
          <p class="text-[10px] text-gray-500 mt-1">পূর্ণাঙ্গ গাইডলাইন →</p>
        </RouterLink>
      </div>

      <div class="space-y-4">
        <RouterLink to="/preparation/bank-private" class="block bg-white border-2 border-indigo-700 p-4 rounded-xl shadow-sm hover:bg-indigo-50 transition">
          <h3 class="text-sm font-black text-indigo-900">প্রাইভেট ব্যাংক প্রস্তুতি</h3>
          <p class="text-[10px] text-gray-500 mt-1">নিয়োগ প্রক্রিয়া ও গাইডলাইন →</p>
        </RouterLink>
        <RouterLink to="/preparation/teacher" class="block bg-white border-2 border-yellow-600 p-4 rounded-xl shadow-sm hover:bg-yellow-50 transition">
          <h3 class="text-sm font-black text-yellow-700">প্রাথমিক শিক্ষক প্রস্তুতি</h3>
          <p class="text-[10px] text-gray-500 mt-1">পূর্ণাঙ্গ সিলেবাস ও কৌশল →</p>
        </RouterLink>
      </div>
    </div>

    <!-- Filters -->
    <FilterBar />

    <!-- Results Section -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-lg font-bold text-gray-800">সর্বশেষ বিজ্ঞপ্তি সমূহ</span>
        <span class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs font-bold">
          {{ filteredJobs.length }}টি পাওয়া গেছে
        </span>
      </div>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mb-4"></div>
      <p class="text-gray-500 font-medium">তথ্য লোড হচ্ছে...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-50 border-2 border-red-100 p-8 rounded text-center">
      <span class="text-4xl mb-4 block">⚠️</span>
      <h3 class="text-xl font-bold text-red-800 mb-2">দুঃখিত, তথ্য লোড করা সম্ভব হয়নি</h3>
      <p class="text-red-600 mb-6">{{ error }}</p>
      <button @click="store.fetchJobs" class="btn-primary bg-red-700 hover:bg-red-800">আবার চেষ্টা করুন</button>
    </div>

    <div v-else>
      <div v-if="filteredJobs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
      </div>
      
      <div v-else class="bg-white border-2 border-dashed border-gray-200 p-20 rounded text-center">
        <p class="text-gray-400 text-lg font-medium">আপনার খোঁজা ফিল্টার অনুযায়ী কোনো বিজ্ঞপ্তি পাওয়া যায়নি।</p>
        <button @click="resetFilters" class="mt-4 text-green-700 font-bold hover:underline">সব ফিল্টার মুছে দিন</button>
      </div>
    </div>

    <!-- Notice Footer -->
    <div class="mt-12 bg-gray-100 border p-6 rounded text-sm text-gray-600">
      <h4 class="font-bold mb-2">সতর্কতা:</h4>
      <p>
        আবেদন করার পূর্বে অবশ্যই সংশ্লিষ্ট প্রতিষ্ঠানের অফিসিয়াল ওয়েবসাইট থেকে মূল নিয়োগ বিজ্ঞপ্তিটি ডাউনলোড করে মনোযোগ সহকারে পড়ে নিন। ভুল তথ্যের জন্য এই পোর্টাল দায়ী নয়।
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useJobStore } from '@/stores/jobStore'
import FilterBar from '@/components/FilterBar.vue'
import JobCard from '@/components/JobCard.vue'

const store = useJobStore()
onMounted(store.fetchJobs)

const loading = computed(() => store.loading)
const error = computed(() => store.error)
const filteredJobs = computed(() => store.filteredJobs)

const resetFilters = () => {
  store.filters.search = ''
  store.filters.division = ''
  store.filters.jobType = ''
  store.filters.status = ''
}
</script>
