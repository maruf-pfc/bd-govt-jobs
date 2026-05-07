<template>
  <div class="max-w-6xl mx-auto space-y-12 py-6 pb-20">
    <!-- Formal Header -->
    <section class="bg-white border-b-4 border-blue-700 pb-6">
      <h1 class="text-3xl font-black text-gray-900">ব্যাংক জব প্রস্তুতি পূর্ণাঙ্গ গাইডলাইন</h1>
      <p class="text-gray-600 mt-2 font-medium">সরকারি ও বেসরকারি ব্যাংকে নিয়োগ পরীক্ষার সিলেবাস ও প্রস্তুতি কৌশল</p>
    </section>

    <!-- Qualification Section -->
    <section class="bg-blue-50 border rounded-xl p-8">
      <h2 class="text-xl font-black text-blue-900 mb-6 flex items-center gap-2">
        <span class="w-2 h-6 bg-blue-600 rounded"></span>
        ব্যাংকে চাকরির যোগ্যতা (Bank Job Qualification)
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-bold text-blue-800 mb-3 underline">সরকারি ব্যাংকে যোগ্যতা</h3>
          <p class="text-sm text-blue-900 leading-relaxed">
            সিনিয়র অফিসার, অফিসার (জেনারেল), অফিসার (ক্যাশ) পদে যেকোনো অনুষদের স্নাতক বা সমমানের ডিগ্রী প্রার্থীরা আবেদন করতে পারেন। মাধ্যমিক বা সমমানের পরীক্ষায় নূন্যতম ১টি প্রথম শ্রেণি থাকতে হবে এবং কোন পর্যায়ে ৩য় শ্রেণি গ্রহণযোগ্য হবে না।
          </p>
        </div>
        <div>
          <h3 class="font-bold text-blue-800 mb-3 underline">বাংলাদেশ ব্যাংকে যোগ্যতা</h3>
          <p class="text-sm text-blue-900 leading-relaxed">
            যেকোনো অনুষদ থেকে স্নাতক বা সমমানের ডিগ্রী। মাধ্যমিক, উচ্চ মাধ্যমিক ও স্নাতক পর্যায়ের যেকোন একটিতে প্রথম শ্রেণি থাকলে এবং কোন পর্যায়ে ৩য় শ্রেণি না থাকলে সহকারী পরিচালক (AD) পদে আবেদন করা যায়।
          </p>
        </div>
      </div>
    </section>

    <!-- Exam Method -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-8">
        <div class="bg-white border rounded shadow-sm overflow-hidden">
          <div class="bg-gray-50 px-6 py-4 border-b">
            <h3 class="font-bold text-gray-900 uppercase text-sm tracking-tight">সরকারি ব্যাংক প্রিলিমিনারি মানবন্টন (MCQ)</h3>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="item in preliMarks" :key="item.subject" class="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span class="text-sm font-bold text-gray-700">{{ item.subject }}</span>
                <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-black">{{ item.marks }}</span>
              </div>
            </div>
            <p class="mt-4 text-xs text-gray-500">* ভুল উত্তরের জন্য ০.২৫ নম্বর কর্তন করা হয়। সময়: ১ ঘণ্টা।</p>
          </div>
        </div>

        <!-- Strategy Section -->
        <div class="space-y-6">
          <h3 class="text-xl font-black text-gray-900 flex items-center gap-2">
            <span class="w-2 h-8 bg-blue-600 rounded-full"></span>
            ব্যাংক জব প্রস্তুতি কৌশল
          </h3>
          <div v-for="s in strategies" :key="s.title" class="bg-white border rounded p-6 shadow-sm">
            <h4 class="font-bold text-lg text-blue-800 mb-3">{{ s.title }}</h4>
            <p class="text-sm text-gray-600 leading-loose">{{ s.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Sidebar: Booklist -->
      <div class="space-y-6">
        <div class="bg-white border rounded p-6 shadow-sm">
          <h4 class="text-sm font-black mb-6 text-gray-900 border-b pb-4 uppercase tracking-widest">প্রয়োজনীয় বই (ব্যাংক)</h4>
          <div class="space-y-6">
            <div v-for="book in booklist" :key="book.category" class="space-y-2">
              <p class="text-[10px] font-black uppercase text-gray-400 tracking-widest">{{ book.category }}</p>
              <ul class="space-y-1">
                <li v-for="item in book.items" :key="item" class="text-sm text-gray-600 flex items-center gap-2">
                  <span class="text-blue-600">✓</span> {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Written Exam -->
    <section class="bg-white border rounded p-8 shadow-sm">
      <h3 class="text-2xl font-black text-gray-900 mb-6">লিখিত পরীক্ষা (২০০ নম্বর)</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-3 border">বিষয়</th>
              <th class="p-3 border">নম্বর (Sr. Officer)</th>
              <th class="p-3 border">নম্বর (AD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-3 border">Focus Writing (Bangla)</td><td class="p-3 border">35</td><td class="p-3 border">35</td></tr>
            <tr><td class="p-3 border">Focus Writing (English)</td><td class="p-3 border">35</td><td class="p-3 border">35</td></tr>
            <tr><td class="p-3 border">Argument Writing</td><td class="p-3 border">30</td><td class="p-3 border">30</td></tr>
            <tr><td class="p-3 border">Mathematics</td><td class="p-3 border">30</td><td class="p-3 border">30</td></tr>
            <tr><td class="p-3 border">General Knowledge</td><td class="p-3 border">30</td><td class="p-3 border">30</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Credit Section -->
    <div class="text-center pt-12 border-t mt-12">
      <p class="text-gray-400 text-xs mb-2">এই গাইডলাইনের মূল তথ্যসূত্র এবং কৃতজ্ঞতা:</p>
      <a href="https://livemcq.com/bank-job-preparation/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline text-sm">
        Live MCQ™ (ব্যাংক জব প্রস্তুতি গাইডলাইন)
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const preliMarks = [
  { subject: 'বাংলা ভাষা ও সাহিত্য', marks: 25 },
  { subject: 'ইংরেজি', marks: 25 },
  { subject: 'সাধারণ গণিত ও মানসিক দক্ষতা', marks: 20 },
  { subject: 'সাধারণ জ্ঞান', marks: 20 },
  { subject: 'আইসিটি (ICT)', marks: 10 }
]

const strategies = [
  { 
    title: 'গণিত প্রস্তুতি', 
    desc: 'ব্যাংক জবে গণিত অনেক বেশি পাটিগণিত নির্ভর। প্রশ্ন ইংরেজিতে হয় বিধায় ভাষাগত দক্ষতা জরুরি। R.S. Agarwal এর Quantitative Aptitude অনুসরণ করতে পারেন।' 
  },
  { 
    title: 'ইংরেজি প্রস্তুতি', 
    desc: 'ব্যাংকে ইংরেজিতে Vocabulary-based প্রশ্ন বেশি আসে। Synonyms, Antonyms, Analogy তে জোর দিন। Grammar এর জন্য Cliff\'s TOEFL সহায়ক।' 
  },
  { 
    title: 'ফোকাস রাইটিং', 
    desc: 'লিখিত পরীক্ষায় নির্দিষ্ট পেইজ থাকে। অল্প কথায় তথ্যবহুল ও প্রাঞ্জল ভাষায় নির্দিষ্ট টপিকে ফোকাসড থাকতে হবে। গ্রাফ বা ডায়াগ্রাম ব্যবহার করা ভালো।' 
  }
]

const booklist = [
  { category: 'ইংরেজি', items: ['Cliff\'s TOEFL', 'Saifur\'s Student Vocabulary'] },
  { category: 'গণিত', items: ['Quantitative Aptitude by R.S. Agarwal', '৮ম-১০ম বোর্ড বই'] },
  { category: 'অন্যান্য', items: ['সৌমিত্র শেখরের জিজ্ঞাসা', '৯ম-১০ম ব্যাকরণ বোর্ড বই'] }
]
</script>
