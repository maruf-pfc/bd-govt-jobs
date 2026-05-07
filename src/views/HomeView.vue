<template>
  <main class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-4">বাংলাদেশ সরকারি চাকরির বিজ্ঞপ্তি</h1>
    <FilterBar />

    <p v-if="loading" class="text-center text-gray-500 py-8">লোড হচ্ছে...</p>
    <p v-else-if="error" class="text-red-500 text-center py-4 bg-red-50 rounded">⚠️ {{ error }}</p>

    <div v-else class="grid md:grid-cols-2 gap-4">
      <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
      <p v-if="filteredJobs.length === 0" class="col-span-2 text-center text-gray-500 py-8">
        কোনো বিজ্ঞপ্তি পাওয়া যায়নি
      </p>
    </div>
  </main>
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
</script>
