<template>
  <div class="bg-white p-4 rounded-lg shadow mb-6 space-y-3">
    <input
      v-model="search"
      placeholder="সার্চ করুন (পদ/অফিস)"
      class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <select
        v-model="division"
        class="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">সকল বিভাগ</option>
        <option v-for="d in divisions" :key="d" :value="d">{{ d }}</option>
      </select>
      <select
        v-model="jobType"
        class="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">ধরন</option>
        <option>BCS Cadre</option>
        <option>Non-Cadre</option>
        <option>Project</option>
        <option>Contract</option>
      </select>
      <select
        v-model="status"
        class="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">স্ট্যাটাস</option>
        <option value="open">চলছে</option>
        <option value="closing">শেষ ৭ দিন</option>
        <option value="closed">বন্ধ</option>
      </select>
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
