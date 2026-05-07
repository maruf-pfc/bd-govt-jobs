<template>
  <div class="max-w-6xl mx-auto space-y-12 py-6 pb-20">
    <!-- Formal Header -->
    <section class="bg-white border-b-4 border-yellow-600 pb-6">
      <h1 class="text-3xl font-black text-gray-900">প্রাথমিক সহকারী শিক্ষক নিয়োগ গাইডলাইন</h1>
      <p class="text-gray-600 mt-2 font-medium">প্রাথমিক বিদ্যালয়ের সহকারী শিক্ষক নিয়োগ পরীক্ষার পূর্ণাঙ্গ সিলেবাস ও কৌশল</p>
    </section>

    <!-- Qualification & Selection -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-yellow-50 border rounded-xl p-8">
        <h2 class="text-xl font-black text-yellow-900 mb-6 flex items-center gap-2">
          <span class="w-2 h-6 bg-yellow-600 rounded"></span>
          আবেদনের যোগ্যতা
        </h2>
        <ul class="space-y-4 text-yellow-800 font-medium text-sm">
          <li class="flex items-center gap-2">🔹 যেকোনো বিষয়ে দ্বিতীয় শ্রেণি বা সমমানের স্নাতক ডিগ্রি।</li>
          <li class="flex items-center gap-2">🔹 বয়সসীমা: সর্বোচ্চ ৩০ বছর (কোটার ক্ষেত্রে ৩২ বছর)।</li>
          <li class="flex items-center gap-2">🔹 বাংলাদেশের স্থায়ী নাগরিক ও সংশ্লিষ্ট জেলার বাসিন্দা হতে হবে।</li>
        </ul>
      </div>

      <div class="bg-gray-50 border rounded-xl p-8">
        <h2 class="text-xl font-black text-gray-900 mb-6">নির্বাচন পদ্ধতি</h2>
        <div class="space-y-4 text-sm text-gray-700">
          <p><strong>১. এমসিকিউ পরীক্ষা (৮০ নম্বর):</strong> বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞান থেকে ২০ নম্বর করে মোট ৮০টি প্রশ্ন থাকে। সময় ৬০ মিনিট।</p>
          <p><strong>২. মৌখিক পরীক্ষা (২০ নম্বর):</strong> লিখিত পরীক্ষায় উত্তীর্ণরা ভাইভা বোর্ডে অংশগ্রহণ করেন।</p>
        </div>
      </div>
    </section>

    <!-- Marks Distribution -->
    <section class="bg-white border rounded shadow-sm overflow-hidden">
      <div class="bg-gray-50 px-6 py-4 border-b">
        <h3 class="font-bold text-gray-900 uppercase text-sm tracking-tight">এমসিকিউ পরীক্ষার মানবন্টন (৮০ নম্বর)</h3>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="item in marks" :key="item.subject" class="p-4 bg-gray-50 rounded border border-gray-100 text-center">
            <p class="text-xs font-black text-gray-400 uppercase mb-1">{{ item.subject }}</p>
            <p class="text-2xl font-black text-yellow-700">{{ item.marks }}</p>
          </div>
        </div>
        <div class="mt-6 p-4 bg-red-50 border border-red-100 rounded text-xs text-red-800">
          * প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা হবে। পাস নম্বর সাধারণত ৪০% হলেও প্রতিযোগিতার কারণে ৬০+ নম্বর পাওয়া নিরাপদ।
        </div>
      </div>
    </section>

    <!-- Strategy Section -->
    <section class="space-y-6">
      <h3 class="text-xl font-black text-gray-900 flex items-center gap-2">
        <span class="w-2 h-8 bg-yellow-600 rounded-full"></span>
        বিষয়ভিত্তিক প্রস্তুতি কৌশল
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="s in strategies" :key="s.title" class="bg-white border rounded p-6 shadow-sm">
          <h4 class="font-bold text-lg text-yellow-800 mb-3">{{ s.title }}</h4>
          <p class="text-sm text-gray-600 leading-loose">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Booklist -->
    <section class="bg-gray-900 text-white rounded-xl p-8 shadow-xl">
      <h3 class="text-xl font-black mb-6 text-yellow-400">প্রয়োজনীয় বইয়ের তালিকা</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div v-for="group in booklist" :key="group.category">
          <h4 class="font-bold text-gray-300 uppercase tracking-widest text-[10px] mb-3">{{ group.category }}</h4>
          <ul class="space-y-2">
            <li v-for="item in group.items" :key="item" class="text-gray-400">✓ {{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const marks = [
  { subject: 'বাংলা', marks: 20 },
  { subject: 'ইংরেজি', marks: 20 },
  { subject: 'গণিত', marks: 20 },
  { subject: 'সাধারণ জ্ঞান', marks: 20 }
]

const strategies = [
  { 
    title: 'বাংলা প্রস্তুতি', 
    desc: 'ব্যাকরণ অংশের জন্য ৯ম-১০ম শ্রেণির বোর্ড বই সবচেয়ে গুরুত্বপূর্ণ। সাহিত্য অংশে বিখ্যাত ১০-১২ জন সাহিত্যিকের জীবনী ও সাহিত্যকর্ম পড়লেই হবে।' 
  },
  { 
    title: 'গণিত প্রস্তুতি', 
    desc: 'পাটিগণিত থেকে বেশি প্রশ্ন আসে। ৫ম থেকে ৮ম শ্রেণির বোর্ড বইয়ের অংকগুলো ভালোভাবে সমাধান করতে হবে।' 
  },
  { 
    title: 'ইংরেজি প্রস্তুতি', 
    desc: 'Grammar-এ Parts of Speech, Tense, Voice, Narration ও Spelling থেকে প্রশ্ন থাকে। বিগত বছরের প্রশ্ন সমাধান করা বাধ্যতামূলক।' 
  },
  { 
    title: 'সাধারণ জ্ঞান', 
    desc: 'মুক্তিযুদ্ধ, বঙ্গবন্ধু ও বাংলাদেশের ভৌগোলিক অবস্থান থেকে প্রশ্ন বেশি আসে। সাম্প্রতিক তথ্যের জন্য শেষ ৩ মাসের কারেন্ট অ্যাফেয়ার্স দেখুন।' 
  }
]

const booklist = [
  { category: 'বোর্ড বই', items: ['৫ম-৮ম শ্রেণির গণিত', '৯ম-১০ম শ্রেণির ব্যাকরণ', '৯ম-১০ম শ্রেণির বিজ্ঞান'] },
  { category: 'গাইড বই', items: ['প্রফেসর\'স প্রাথমিক শিক্ষক নিয়োগ গাইড', 'বিগত সালের প্রশ্নব্যাংক'] },
  { category: 'অন্যান্য', items: ['ইংরেজি গ্রামার (Basic)', 'কারেন্ট অ্যাফেয়ার্স'] }
]
</script>
