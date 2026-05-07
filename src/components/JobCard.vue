<template>
  <article
    class="bg-white border rounded-xl p-4 hover:shadow-lg transition cursor-pointer group"
    @click="goToDetail"
  >
    <!-- Header: Title + Status -->
    <div class="flex justify-between items-start gap-2 mb-2">
      <h3 class="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-blue-600">
        {{ job.title }}
      </h3>
      <StatusBadge :deadline="job.importantDates.applyEnd" />
    </div>

    <!-- Organization + Type Badge -->
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="text-sm text-gray-600">{{ job.organization }}</span>
      <span class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
        {{ job.jobType }}
      </span>
    </div>

    <!-- Key Info Grid (Compact) -->
    <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mb-3">
      <div>
        <span class="text-gray-500 text-xs">বেতন</span>
        <p class="font-medium text-gray-800">{{ job.payScale }}</p>
      </div>
      <div>
        <span class="text-gray-500 text-xs">শেষ তারিখ</span>
        <p class="font-medium text-red-600">{{ formatDate(job.importantDates.applyEnd) }}</p>
      </div>
      <div>
        <span class="text-gray-500 text-xs">যোগ্যতা</span>
        <p class="font-medium text-gray-800 line-clamp-1">{{ getQualification(job) }}</p>
      </div>
      <div>
        <span class="text-gray-500 text-xs">পদ সংখ্যা</span>
        <p class="font-medium text-gray-800">{{ job.vacancyQuota?.total || 'N/A' }}</p>
      </div>
    </div>

    <!-- Footer: Division + Apply Button -->
    <div class="flex items-center justify-between pt-3 border-t">
      <span class="text-xs text-gray-500">📍 {{ job.division }}</span>
      <span class="text-blue-600 text-sm font-medium group-hover:underline"> বিস্তারিত → </span>
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
  return d.toLocaleDateString('bn-BD', { day: 'numeric', month: 'short', year: 'numeric' })
}

const getQualification = (job: Job) => {
  // Extract from howToApply or use fallback
  if (job.howToApply?.includes('স্নাতক')) return 'স্নাতক'
  if (job.howToApply?.includes('এইচএসসি')) return 'এইচএসসি'
  if (job.howToApply?.includes('এসএসসি')) return 'এসএসসি'
  return 'বিভিন্ন'
}
</script>
