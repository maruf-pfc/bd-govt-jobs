<template>
  <div class="bg-white p-6 border-x-4 border-green-700 shadow-sm mb-8 space-y-4">
    <div class="flex items-center gap-2 mb-2">
      <div class="h-4 w-1 gov-bg-red"></div>
      <h2 class="text-lg font-bold text-gray-800">ফিল্টার করুন</h2>
    </div>
    
    <div class="relative">
      <input
        v-model="search"
        placeholder="পদের নাম অথবা প্রতিষ্ঠানের নাম দিয়ে সার্চ করুন..."
        class="w-full p-3 pl-10 border-2 border-gray-100 rounded focus:border-green-600 focus:outline-none transition"
      />
      <span class="absolute left-3 top-3.5 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="space-y-1">
        <label class="text-xs font-bold text-gray-500 uppercase">বিভাগ</label>
        <select
          v-model="division"
          class="w-full p-2.5 border-2 border-gray-100 rounded focus:border-green-600 focus:outline-none transition bg-white"
        >
          <option value="">সকল বিভাগ</option>
          <option v-for="d in divisions" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>
      <div class="space-y-1">
        <label class="text-xs font-bold text-gray-500 uppercase">চাকরির ধরন</label>
        <select
          v-model="jobType"
          class="w-full p-2.5 border-2 border-gray-100 rounded focus:border-green-600 focus:outline-none transition bg-white"
        >
          <option value="">সকল ধরন</option>
          <option>BCS Cadre</option>
          <option>Non-Cadre</option>
          <option>Project</option>
          <option>Contract</option>
        </select>
      </div>
      <div class="space-y-1">
        <label class="text-xs font-bold text-gray-500 uppercase">আবেদনের স্থিতি</label>
        <select
          v-model="status"
          class="w-full p-2.5 border-2 border-gray-100 rounded focus:border-green-600 focus:outline-none transition bg-white"
        >
          <option value="">সকল স্থিতি</option>
          <option value="open">আবেদন চলছে</option>
          <option value="closing">শেষ ৭ দিন</option>
          <option value="closed">বন্ধ হয়ে গেছে</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useJobStore } from '@/stores/jobStore'

const store = useJobStore()
const search = computed({ get: () => store.filters.search, set: (v) => (store.filters.search = v) })
const division = computed({
  get: () => store.filters.division,
  set: (v) => (store.filters.division = v),
})
const jobType = computed({
  get: () => store.filters.jobType,
  set: (v) => (store.filters.jobType = v),
})
const status = computed({ get: () => store.filters.status, set: (v) => (store.filters.status = v) })

const divisions = [
  'All Bangladesh',
  'Dhaka',
  'Chattogram',
  'Rajshahi',
  'Khulna',
  'Sylhet',
  'Barishal',
  'Rangpur',
  'Mymensingh',
]
</script>
