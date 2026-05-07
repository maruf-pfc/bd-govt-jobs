<template>
  <div class="container mx-auto px-4 py-6 max-w-4xl">
    <!-- Back Button -->
    <RouterLink to="/" class="inline-flex items-center text-blue-600 hover:underline mb-4">
      ← ফিরে যান
    </RouterLink>

    <!-- Loading State -->
    <div v-if="!job" class="text-center text-gray-500 py-12">জবটি লোড হচ্ছে...</div>

    <!-- Job Detail Card -->
    <article v-else class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <!-- Header -->
      <header class="bg-linear-to-r from-blue-700 to-blue-600 text-white p-6">
        <h1 class="text-2xl font-bold">{{ job.title }}</h1>
        <p class="mt-1 text-blue-100">{{ job.organization }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-white/20 rounded-full text-sm">{{ job.jobType }}</span>
          <span class="px-3 py-1 bg-white/20 rounded-full text-sm">📍 {{ job.division }}</span>
          <StatusBadge :deadline="job.importantDates.applyEnd" />
        </div>
      </header>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Salary & Dates -->
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-xs text-gray-500">বেতন স্কেল</p>
            <p class="font-bold text-lg">{{ job.payScale }}</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <p class="text-xs text-gray-500">আবেদন শেষ</p>
            <p class="font-bold text-lg text-red-600">
              {{ formatDate(job.importantDates.applyEnd) }}
            </p>
          </div>
        </div>

        <!-- Key Info -->
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p class="text-gray-500 text-xs">আবেদন ফি</p>
            <p class="font-medium">{{ job.applicationFee }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs">মোট পদ</p>
            <p class="font-medium">{{ job.vacancyQuota?.total || 'N/A' }}</p>
          </div>
          <div>
            <p class="text-gray-500 text-xs">যোগ্যতা</p>
            <p class="font-medium">বিজ্ঞপ্তি দেখুন</p>
          </div>
        </div>

        <!-- How to Apply -->
        <section>
          <h2 class="font-semibold mb-2">📝 কিভাবে আবেদন করবেন</h2>
          <pre class="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm leading-relaxed">{{
            job.howToApply
          }}</pre>
        </section>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <a
            :href="job.applyLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
          >
            🔗 অফিসিয়াল লিংকে আবেদন করুন
          </a>
          <a
            :href="job.officialNotification"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            📄 বিজ্ঞপ্তি ডাউনলোড (PDF)
          </a>
        </div>

        <!-- Disclaimer -->
        <p class="text-xs text-gray-400 text-center pt-4">
          সর্বশেষ আপডেট: {{ formatDate(job.lastUpdated) }} •
          <span class="text-red-500">⚠️</span> আবেদনের আগে অফিসিয়াল সাইট দেখুন
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useJobStore } from '@/stores/jobStore'
import StatusBadge from '@/components/StatusBadge.vue'
import type { Job } from '@/types'

const route = useRoute()
const store = useJobStore()
const job = computed<Job | undefined>(() =>
  store.jobs.find((j) => j.id === (route.params.id as string)),
)

const formatDate = (iso: string) => {
  if (!iso) return 'N/A'
  return new Date(iso).toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
</script>
