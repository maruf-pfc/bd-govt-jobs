<template>
  <article
    class="bg-white border-2 border-gray-100 rounded shadow-sm hover:border-green-600 transition cursor-pointer group flex flex-col"
    @click="goToDetail"
  >
    <!-- Top Green Stripe -->
    <div class="h-1 gov-bg-green w-full rounded-t"></div>

    <div class="p-5 flex-grow">
      <!-- Ministry & Org -->
      <div class="mb-3">
        <p class="text-xs font-bold text-green-800 uppercase tracking-wide mb-0.5">
          {{ job.ministry || 'সরকার' }}
        </p>
        <h4 class="text-sm font-medium text-gray-600 leading-tight">
          {{ job.organization }}
        </h4>
      </div>

      <!-- Job Title -->
      <h3 class="font-bold text-lg leading-tight mb-4 group-hover:text-green-700 transition">
        {{ job.title }}
      </h3>

      <!-- Status & Type -->
      <div class="flex items-center gap-2 mb-4">
        <StatusBadge :deadline="job.importantDates.applyEnd" />
        <span class="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-bold rounded border uppercase">
          {{ job.jobType }}
        </span>
      </div>

      <!-- Info Table (Formal) -->
      <div class="space-y-2 border-t pt-4 text-sm">
        <div class="flex justify-between items-center">
          <span class="text-gray-500">আবেদনের শেষ তারিখ:</span>
          <span class="font-bold text-red-600">{{ formatDate(job.importantDates.applyEnd) }}</span>
        </div>
        <div v-if="job.circularRef" class="flex justify-between items-center">
          <span class="text-gray-500">স্মারক নং:</span>
          <span class="text-xs text-gray-800 truncate max-w-[150px]" :title="job.circularRef">
            {{ job.circularRef }}
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">পদ সংখ্যা:</span>
          <span class="font-bold text-gray-900">{{ job.vacancyQuota?.total || 'বিজ্ঞপ্তি দেখুন' }}</span>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="bg-gray-50 p-4 border-t flex justify-between items-center">
      <span class="text-xs text-gray-500 flex items-center gap-1">
        📍 {{ job.division }}
      </span>
      <button class="text-sm font-bold text-green-700 group-hover:underline">
        বিস্তারিত দেখুন →
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import StatusBadge from './StatusBadge.vue'
import type { Job } from '@/types'

const props = defineProps<{ job: Job }>()
const router = useRouter()

const goToDetail = () => router.push(`/jobs/${props.job.id}`)

const formatDate = (iso: string) => {
  const d = new Date(iso)
  return d.toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
