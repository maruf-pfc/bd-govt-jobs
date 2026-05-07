<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <div class="border-b pb-4">
      <h1 class="text-2xl font-black text-gray-900">সকল নিয়োগ বিজ্ঞপ্তি</h1>
      <p class="text-gray-500 text-sm">বাংলাদেশ সরকারের সকল সক্রিয় নিয়োগ বিজ্ঞপ্তির তালিকা</p>
    </div>

    <!-- Filters -->
    <FilterBar />

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
