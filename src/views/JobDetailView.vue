<template>
  <div class="max-w-4xl mx-auto py-8">
    <!-- Back Button -->
    <RouterLink to="/" class="inline-flex items-center text-green-700 hover:underline mb-6 font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      সকল বিজ্ঞপ্তি
    </RouterLink>

    <!-- Loading State -->
    <div v-if="!job" class="bg-white border rounded p-12 text-center text-gray-500 shadow-sm">
      <div class="animate-pulse space-y-4">
        <div class="h-8 bg-gray-100 rounded w-3/4 mx-auto"></div>
        <div class="h-4 bg-gray-100 rounded w-1/2 mx-auto"></div>
        <div class="h-64 bg-gray-50 rounded mt-8"></div>
      </div>
    </div>

    <!-- Official Notice Content -->
    <div v-else class="bg-white border shadow-sm print:shadow-none print:border-none">
      <!-- Notice Header -->
      <div class="p-8 border-b-2 border-green-700 text-center space-y-2">
        <p class="text-sm font-bold text-gray-600">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
        <h2 class="text-xl font-black text-green-900 tracking-wide uppercase">{{ job.ministry || 'সংশ্লিষ্ট মন্ত্রণালয়' }}</h2>
        <h1 class="text-2xl font-bold text-gray-900 leading-tight uppercase">{{ job.organization }}</h1>
        <p class="text-blue-700 font-bold underline">{{ job.sourceWebsite.replace('http://', '').replace('https://', '') }}</p>
      </div>

      <!-- Reference & Date Bar -->
      <div class="p-4 bg-gray-50 border-b flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-600 gap-2">
        <div class="flex items-center gap-2">
          <span class="bg-gray-200 px-2 py-1 rounded">স্মারক নং:</span>
          <span>{{ job.circularRef || 'উল্লেখ নেই' }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="bg-gray-200 px-2 py-1 rounded">তারিখ:</span>
          <span>{{ formatDate(job.circularDate || job.lastUpdated) }}</span>
        </div>
      </div>

      <div class="p-8">
        <!-- QUICK ACTIONS (Priority Reordering) -->
        <div class="bg-gray-50 border p-4 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            :href="job.applyLink"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-6 py-3 font-bold flex items-center justify-center gap-2 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            অনলাইন আবেদন ফরম
          </a>
          <a
            :href="job.officialNotification"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 font-bold flex items-center justify-center gap-2 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            অফিসিয়াল বিজ্ঞপ্তি (PDF)
          </a>
        </div>

        <!-- Main Title Box -->
        <div class="border-4 border-double border-green-700 p-6 text-center mb-8">
          <h3 class="text-2xl font-black text-gray-900 uppercase tracking-tight">নিয়োগ বিজ্ঞপ্তি</h3>
        </div>

        <p class="text-gray-800 leading-relaxed mb-8 indent-8">
          {{ job.organization }} এর রাজস্ব খাতভুক্ত নিম্নবর্ণিত শূন্য পদসমূহ পূরণের নিমিত্তে বাংলাদেশের স্থায়ী নাগরিকদের নিকট হতে অনলাইনে আবেদন আহ্বান করা যাচ্ছে:
        </p>

        <!-- Summary Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div class="border rounded">
            <div class="bg-gray-100 px-4 py-2 border-b font-bold text-sm">পদের বিবরণ ও বেতন</div>
            <div class="p-4 space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-500">পদের নাম:</span>
                <span class="font-bold text-right">{{ job.title }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">বেতন স্কেল:</span>
                <span class="font-bold">{{ job.payScale }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">পদ সংখ্যা:</span>
                <span class="font-bold">{{ job.vacancyQuota?.total || 'বিজ্ঞপ্তি দেখুন' }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">চাকরির ধরন:</span>
                <span class="bg-blue-50 text-blue-700 px-2 rounded font-bold uppercase text-[10px]">{{ job.jobType }}</span>
              </div>
            </div>
          </div>

          <div class="border rounded border-red-100">
            <div class="bg-red-50 px-4 py-2 border-b border-red-100 font-bold text-sm text-red-800">আবেদনের সময়সীমা</div>
            <div class="p-4 space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-500">আবেদন শুরু:</span>
                <span class="font-bold text-green-700">{{ formatDate(job.importantDates.applyStart) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">আবেদন শেষ:</span>
                <span class="font-bold text-red-600">{{ formatDate(job.importantDates.applyEnd) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">আবেদন ফি:</span>
                <span class="font-bold text-gray-900">{{ job.applicationFee }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-500">স্থিতি:</span>
                <StatusBadge :deadline="job.importantDates.applyEnd" />
              </div>
            </div>
          </div>
        </div>

        <!-- How to Apply Section -->
        <div class="mb-10">
          <div class="flex items-center gap-2 mb-4">
            <div class="h-6 w-1 gov-bg-green"></div>
            <h4 class="text-lg font-bold text-gray-800 uppercase tracking-tight">আবেদনের নিয়মাবলী ও শর্তাবলী</h4>
          </div>
          <div class="bg-gray-50 border border-gray-100 p-6 text-sm leading-loose whitespace-pre-line text-gray-700">
            {{ job.howToApply }}
          </div>
        </div>

        <!-- Official Footer Info -->
        <div class="border-t pt-6 text-center text-xs text-gray-500 italic">
          <p>For more information please visit: <a :href="job.sourceWebsite" target="_blank" class="text-blue-600 font-bold hover:underline">{{ job.sourceWebsite }}</a></p>
          <p class="mt-4 font-bold text-gray-400">সর্বশেষ আপডেট: {{ formatDate(job.lastUpdated) }}</p>
        </div>
      </div>
    </div>

    <!-- Print Button (Floating) -->
    <button 
      @click="window.print()" 
      class="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-xl hover:bg-black transition print:hidden"
      title="প্রিন্ট করুন"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useJobStore } from '@/stores/jobStore'
import StatusBadge from '@/components/StatusBadge.vue'
import type { Job } from '@/types'

const route = useRoute()
const store = useJobStore()

const jobId = computed(() => route.params.id as string)
const job = computed(() => store.jobs.find((j) => j.id === jobId.value))

// SEO and JSON-LD
watch(() => job.value, (newJob) => {
  if (newJob) {
    useHead({
      title: `${newJob.title} - ${newJob.ministry} | সরকারি চাকরি`,
      meta: [
        { name: 'description', content: `${newJob.ministry} এর অধীনে ${newJob.title} পদে নিয়োগ বিজ্ঞপ্তি। আবেদনের শেষ তারিখ: ${newJob.importantDates.applyEnd}` }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": newJob.title,
            "description": `${newJob.ministry} এর অধীনে ${newJob.title} পদে নিয়োগ।`,
            "datePosted": newJob.circularDate || newJob.lastUpdated,
            "validThrough": newJob.importantDates.applyEnd,
            "hiringOrganization": {
              "@type": "Organization",
              "name": newJob.ministry,
              "logo": "/favicon.svg"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Bangladesh",
                "addressCountry": "BD"
              }
            }
          })
        }
      ]
    })
  }
}, { immediate: true })

const formatDate = (iso: string) => {
  if (!iso) return 'উল্লেখ নেই'
  return new Date(iso).toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const window = globalThis as any
</script>

<style>
@media print {
  body {
    background: white;
  }
  .container {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
