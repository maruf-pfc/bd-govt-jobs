<template>
  <div class="max-w-6xl mx-auto space-y-12 py-6 pb-20">
    <!-- Formal Header -->
    <section class="bg-white border-b-4 border-indigo-700 pb-6">
      <h1 class="text-3xl font-black text-gray-900">প্রাইভেট ব্যাংক জব প্রস্তুতি গাইডলাইন</h1>
      <p class="text-gray-600 mt-2 font-medium">বেসরকারি ব্যাংকের নিয়োগ প্রক্রিয়া, পদসমূহ ও প্রস্তুতির কৌশল</p>
    </section>

    <!-- Qualification & Skills -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-indigo-50 border rounded-xl p-8">
        <h2 class="text-xl font-black text-indigo-900 mb-6 flex items-center gap-2">
          <span class="w-2 h-6 bg-indigo-600 rounded"></span>
          প্রয়োজনীয় দক্ষতা (Core Skills)
        </h2>
        <ul class="space-y-4 text-indigo-800 font-medium text-sm">
          <li class="flex items-center gap-2">🔹 Problem Solving Skills</li>
          <li class="flex items-center gap-2">🔹 Leadership & Teamwork</li>
          <li class="flex items-center gap-2">🔹 English Language Proficiency</li>
          <li class="flex items-center gap-2">🔹 Computer Literacy (MS Office)</li>
        </ul>
      </div>

      <div class="bg-gray-50 border rounded-xl p-8">
        <h2 class="text-xl font-black text-gray-900 mb-6">সাধারণ পদসমূহ</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="pos in positions" :key="pos" class="bg-white border px-3 py-1 rounded-full text-xs font-bold text-gray-700">{{ pos }}</span>
        </div>
      </div>
    </section>

    <!-- Recruitment Process -->
    <section class="bg-white border rounded p-8 shadow-sm">
      <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">নিয়োগ প্রক্রিয়া (Recruitment Method)</h3>
      <div class="space-y-6">
        <div v-for="(step, index) in recruitmentSteps" :key="index" class="flex gap-6">
          <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black">{{ index + 1 }}</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-1">{{ step.title }}</h4>
            <p class="text-sm text-gray-600 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="bg-gray-900 text-white rounded-xl p-8 shadow-xl">
      <h3 class="text-xl font-black mb-6 text-indigo-400 border-b border-gray-800 pb-4">সরকারি বনাম বেসরকারি ব্যাংক প্রস্তুতি</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div class="space-y-4">
          <h4 class="font-bold text-gray-300 uppercase tracking-widest text-[10px]">প্রিলিমিনারি ও লিখিত</h4>
          <p class="text-gray-400 leading-relaxed">বেসরকারি ব্যাংকে সাধারণত একই দিনে একই প্রশ্নপত্রে এমসিকিউ ও লিখিত পরীক্ষা অনুষ্ঠিত হয়। সময় কম থাকে (প্রায় ১.৫ ঘণ্টা)।</p>
        </div>
        <div class="space-y-4">
          <h4 class="font-bold text-gray-300 uppercase tracking-widest text-[10px]">অনলাইন টেস্ট</h4>
          <p class="text-gray-400 leading-relaxed">অনেক বেসরকারি ব্যাংক (যেমন ইস্টার্ন ব্যাংক) সরাসরি অনলাইন টেস্ট ও ভাইভার মাধ্যমে নিয়োগ দেয়। এক্ষেত্রে আইবিএ প্যাটার্ন বেশি ফলো করা হয়।</p>
        </div>
      </div>
    </section>

    <!-- Credit Section -->
    <div class="text-center pt-12 border-t mt-12">
      <p class="text-gray-400 text-xs mb-2">এই গাইডলাইনের মূল তথ্যসূত্র এবং কৃতজ্ঞতা:</p>
      <a href="https://livemcq.com/private-bank-job-preparation-guideline/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline text-sm">
        Live MCQ™ (প্রাইভেট ব্যাংক জব প্রস্তুতি গাইডলাইন)
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'প্রাইভেট ব্যাংক জব প্রস্তুতি | বেসরকারি ব্যাংক নিয়োগ গাইডলাইন',
  meta: [
    { name: 'description', content: 'বেসরকারি ব্যাংকের ট্রেইনি অফিসার ও প্রবেশনারি অফিসার পদের নিয়োগ প্রক্রিয়া, প্রয়োজনীয় দক্ষতা ও প্রস্তুতির নিয়ম।' },
    { name: 'keywords', content: 'Private Bank Job Preparation, Private Bank Exam Pattern, প্রাইভেট ব্যাংক জব, ব্যাংক নিয়োগ' }
  ]
})

const positions = [
  'Trainee Officer', 'Probationary Officer', 'Executive Officer',
  'Junior Officer', 'Customer Service Officer', 'Relationship Officer',
  'Credit Officer', 'Operation Officer'
]

const recruitmentSteps = [
  { 
    title: 'অনলাইন আবেদন ও প্রাথমিক বাছাই', 
    desc: 'সিজিপিএ, বিশ্ববিদ্যালয় এবং অন্যান্য যোগ্যতার ভিত্তিতে প্রার্থীদের প্রাথমিকভাবে বাছাই করা হয়। অনেক ক্ষেত্রে অনলাইন টেস্ট নেওয়া হয়।' 
  },
  { 
    title: 'প্রিলিমিনারি ও লিখিত পরীক্ষা', 
    desc: 'এমসিকিউ অংশে ৫০-৮০ নম্বর এবং লিখিত অংশে ২০-৪০ নম্বর থাকে। বাংলা, ইংরেজি, গণিত ও আইসিটি থেকে প্রশ্ন আসে।' 
  },
  { 
    title: 'মৌখিক পরীক্ষা (Viva)', 
    desc: 'লিখিত পরীক্ষায় উত্তীর্ণরা ভাইভা বোর্ডে অংশগ্রহণ করেন। এখানে প্রার্থীর যোগাযোগ দক্ষতা ও স্মার্টনেস বেশি গুরুত্ব পায়।' 
  }
]
</script>
