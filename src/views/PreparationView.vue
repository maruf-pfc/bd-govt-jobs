<template>
  <div class="max-w-6xl mx-auto space-y-12 py-6 pb-20">
    <!-- Formal Header -->
    <section class="bg-white border-b-4 border-green-700 pb-6">
      <h1 class="text-3xl font-black text-gray-900">বিসিএস (BCS) প্রস্তুতি পূর্ণাঙ্গ গাইডলাইন</h1>
      <p class="text-gray-600 mt-2 font-medium">প্রিলিমিনারি, লিখিত ও ভাইভা পরীক্ষার সিলেবাস ও প্রস্তুতি কৌশল</p>
    </section>

    <!-- Preparation Stages Tabs -->
    <section>
      <div class="flex flex-wrap border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-6 py-4 font-bold text-sm transition-all border-b-2 whitespace-nowrap"
          :class="activeTab === tab.id ? 'border-green-600 text-green-700 bg-green-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content: Preliminary -->
      <div v-if="activeTab === 'preli'" class="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4">
        <div class="lg:col-span-2 space-y-8">
          <!-- Marks Distribution -->
          <div class="bg-white border rounded shadow-sm">
            <div class="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
              <h3 class="font-bold text-gray-900 uppercase text-sm tracking-tight">প্রিলিমিনারি মানবন্টন (২০০ নম্বর)</h3>
              <span class="text-xs font-bold text-gray-500">সময়: ২ ঘণ্টা</span>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="item in preliMarks" :key="item.subject" class="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                  <span class="text-sm font-bold text-gray-700">{{ item.subject }}</span>
                  <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black">{{ item.marks }}</span>
                </div>
              </div>
              <div class="mt-6 p-4 bg-red-50 border border-red-100 rounded flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <p class="text-xs text-red-800 font-medium">
                  <strong>সতর্কবার্তা:</strong> প্রতিটি ভুল উত্তরের জন্য ০.৫০ নম্বর কাটা হবে। প্রিলিমিনারি শুধু প্রার্থীর লিখিত পরীক্ষার যোগ্যতা যাচাই করে।
                </p>
              </div>
            </div>
          </div>

          <!-- Subject Wise Strategy -->
          <div class="space-y-6">
            <h3 class="text-xl font-black text-gray-900 flex items-center gap-2">
              <span class="w-2 h-8 bg-green-600 rounded-full"></span>
              প্রিলিমিনারি প্রস্তুতি কৌশল
            </h3>
            <div v-for="strategy in subjectStrategies" :key="strategy.title" class="bg-white border rounded p-6 shadow-sm">
              <h4 class="font-bold text-lg text-green-800 mb-3">{{ strategy.title }}</h4>
              <p class="text-sm text-gray-600 leading-loose">{{ strategy.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <div class="bg-white border rounded p-6 shadow-sm">
            <h4 class="text-sm font-black mb-6 text-gray-900 border-b pb-4 uppercase tracking-widest">প্রয়োজনীয় বই (প্রিলি)</h4>
            <div class="space-y-6">
              <div v-for="book in booklist" :key="book.category" class="space-y-2">
                <p class="text-[10px] font-black uppercase text-gray-400 tracking-widest">{{ book.category }}</p>
                <ul class="space-y-1">
                  <li v-for="item in book.items" :key="item" class="text-sm text-gray-600 flex items-center gap-2">
                    <span class="text-green-600">✓</span> {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content: Written -->
      <div v-if="activeTab === 'written'" class="space-y-8 animate-in fade-in slide-in-from-bottom-4">
        <div class="bg-white border rounded p-8 shadow-sm">
          <h3 class="text-2xl font-black text-gray-900 mb-6">লিখিত পরীক্ষা (৯০০ নম্বর)</h3>
          <p class="text-gray-600 mb-8 leading-relaxed">
            লিখিত পরীক্ষায় প্রাপ্ত নম্বরের সাথে মৌখিক পরীক্ষায় প্রাপ্ত নম্বর যোগ করেই চূড়ান্ত নিয়োগের বিষয়টি নির্ধারিত হয়। গড় পাস নম্বর ৫০%।
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-black text-green-800 mb-4 border-b pb-2 uppercase text-[10px] tracking-widest">সাধারণ ক্যাডার (General)</h4>
              <div class="space-y-3">
                <div v-for="w in writtenGeneral" :key="w.subject" class="flex justify-between text-sm p-2 bg-gray-50 rounded">
                  <span class="text-gray-700 font-medium">{{ w.subject }}</span>
                  <span class="font-black text-gray-900">{{ w.marks }}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-black text-blue-800 mb-4 border-b pb-2 uppercase text-[10px] tracking-widest">পেশাগত ক্যাডার (Technical)</h4>
              <div class="space-y-3">
                <div v-for="w in writtenTechnical" :key="w.subject" class="flex justify-between text-sm p-2 bg-gray-50 rounded">
                  <span class="text-gray-700 font-medium">{{ w.subject }}</span>
                  <span class="font-black text-gray-900">{{ w.marks }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border-2 border-blue-100 rounded p-8">
          <h4 class="text-lg font-black text-blue-900 mb-4">লিখিত পরীক্ষায় ভালো করার টিপস</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <li class="flex items-center gap-2">🔹 তথ্যবহুল এবং নির্ভুল বাক্য লিখুন</li>
            <li class="flex items-center gap-2">🔹 হাতের লেখা স্পষ্ট হওয়ার চেষ্টা করুন</li>
            <li class="flex items-center gap-2">🔹 পর্যাপ্ত চিত্র, ম্যাপ ও গ্রাফ ব্যবহার করুন</li>
            <li class="flex items-center gap-2">🔹 অনুবাদ ও ব্যাকরণে প্রতিদিন চর্চা করুন</li>
          </ul>
        </div>
      </div>

      <!-- Tab Content: Viva -->
      <div v-if="activeTab === 'viva'" class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4">
        <div class="bg-white border rounded p-8 shadow-sm">
          <h3 class="text-2xl font-black text-gray-900 mb-6">মৌখিক পরীক্ষা (২০০ নম্বর)</h3>
          <p class="text-gray-600 mb-6 italic">"ভাইভা বোর্ডে যাচাই করা হয় আপনি যা জানেন ও বোঝেন তা অন্যকে বোঝাতে পারেন কিনা।"</p>
          <div class="space-y-6">
            <div v-for="v in vivaTips" :key="v.title">
              <h4 class="font-black text-gray-800 mb-2">{{ v.title }}</h4>
              <p class="text-sm text-gray-600 leading-relaxed">{{ v.desc }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 border rounded p-8">
          <h4 class="text-xl font-black mb-6 text-gray-900">ভাইভা ড্রেস কোড ও বডি ল্যাঙ্গুয়েজ</h4>
          <div class="space-y-6 text-sm">
            <div class="border-l-4 border-green-500 pl-4">
              <p class="font-bold mb-1">পোশাক (Dress Code):</p>
              <p class="text-gray-600 leading-relaxed">পুরুষদের জন্য ফুলহাতা শার্ট, প্যান্ট ও টাই (আবশ্যক নয় তবে মার্জিত)। নারীদের জন্য শাড়ি বা মার্জিত সালোয়ার কামিজ। উজ্জ্বল রং পরিহার করুন।</p>
            </div>
            <div class="border-l-4 border-blue-500 pl-4">
              <p class="font-bold mb-1">প্রবেশ ও বসা:</p>
              <p class="text-gray-600 leading-relaxed">অনুমতি নিয়ে প্রবেশ করুন। বসার আগে অনুমতি নিন। সোজা হয়ে বসুন এবং আই-কন্টাক্ট বজায় রাখুন।</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content: Special Tips -->
      <div v-if="activeTab === 'special'" class="space-y-8 animate-in fade-in slide-in-from-bottom-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-green-50 border rounded p-8">
            <h4 class="text-lg font-black text-green-900 mb-4">অনার্স পর্যায় থেকেই প্রস্তুতি</h4>
            <p class="text-sm text-green-800 leading-relaxed">
              স্নাতক জীবনে বাড়তি সময় পাওয়া যায়। সেশনজট বা আর্থিক স্বাধীনতার কথা মাথায় রেখে অবসর সময়ে নির্দিষ্ট রুটিন মেনে প্রস্তুতি শুরু করলে অন্যদের থেকে এগিয়ে থাকা যায়। বিশেষ করে মাধ্যমিক ও উচ্চ মাধ্যমিকে পড়া বিষয়গুলো এসময় সতেজ থাকে।
            </p>
          </div>
          <div class="bg-blue-50 border rounded p-8">
            <h4 class="text-lg font-black text-blue-900 mb-4">পত্রিকা পড়ার নিয়ম</h4>
            <p class="text-sm text-blue-800 leading-relaxed">
              প্রতিদিন অন্তত ১টি বাংলা (প্রথম আলো/ইত্তেফাক) ও ১টি ইংরেজি (The Daily Star) পত্রিকা পড়ুন। গুরুত্বপূর্ণ খবরগুলো নোট করুন বা কেটে রাখুন। বিশেষ করে সম্পাদকীয় ও আন্তর্জাতিক পাতা নিয়মিত অনুসরণ করুন।
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- General Rules Grid -->
    <section class="bg-white border rounded p-8 md:p-12 shadow-sm border-l-[12px] border-l-green-700">
      <h3 class="text-xl font-black text-gray-900 mb-8 uppercase tracking-tight">প্রস্তুতির ১০টি সুবর্ণ নিয়ম</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(rule, index) in goldenRules" :key="index" class="flex gap-4">
          <span class="text-3xl font-black text-gray-100">{{ index + 1 }}</span>
          <div>
            <p class="text-gray-800 font-bold leading-tight text-sm">{{ rule }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Credit Section -->
    <div class="text-center pt-12 border-t mt-12">
      <p class="text-gray-400 text-xs mb-2">এই গাইডলাইনের মূল তথ্যসূত্র এবং কৃতজ্ঞতা:</p>
      <a href="https://livemcq.com/blog/51st-bcs-preparation-guideline/" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold hover:underline text-sm">
        Live MCQ™ (৫১তম বিসিএস প্রস্তুতি গাইডলাইন)
      </a>
      <div class="mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
        Official Syllabus Source: BPSC.GOV.BD
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('preli')

const tabs = [
  { id: 'preli', label: 'প্রিলিমিনারি' },
  { id: 'written', label: 'লিখিত পরীক্ষা' },
  { id: 'viva', label: 'মৌখিক (ভাইভা)' },
  { id: 'special', label: 'বিশেষ গাইডলাইন' },
]

const preliMarks = [
  { subject: 'বাংলা ভাষা ও সাহিত্য', marks: 35 },
  { subject: 'ইংরেজি ভাষা ও সাহিত্য', marks: 35 },
  { subject: 'বাংলাদেশ বিষয়াবলী', marks: 30 },
  { subject: 'আন্তর্জাতিক বিষয়াবলী', marks: 20 },
  { subject: 'গাণিতিক যুক্তি', marks: 15 },
  { subject: 'মানসিক দক্ষতা', marks: 15 },
  { subject: 'সাধারণ বিজ্ঞান', marks: 15 },
  { subject: 'কম্পিউটার ও তথ্যপ্রযুক্তি', marks: 15 },
  { subject: 'ভূগোল, পরিবেশ ও দুর্যোগ ব্যবস্থাপনা', marks: 10 },
  { subject: 'নৈতিকতা, মূল্যবোধ ও সুশাসন', marks: 10 },
]

const writtenGeneral = [
  { subject: 'সাধারণ বাংলা (১ম ও ২য় পত্র)', marks: 200 },
  { subject: 'সাধারণ ইংরেজি (১ম ও ২য় পত্র)', marks: 200 },
  { subject: 'বাংলাদেশ বিষয়াবলী (১ম ও ২য় পত্র)', marks: 200 },
  { subject: 'আন্তর্জাতিক বিষয়াবলী', marks: 100 },
  { subject: 'গাণিতিক যুক্তি ও মানসিক দক্ষতা', marks: 100 },
  { subject: 'সাধারণ বিজ্ঞান ও প্রযুক্তি', marks: 100 },
]

const writtenTechnical = [
  { subject: 'বাংলা', marks: 100 },
  { subject: 'ইংরেজি (১ম ও ২য় পত্র)', marks: 200 },
  { subject: 'বাংলাদেশ বিষয়াবলী', marks: 200 },
  { subject: 'আন্তর্জাতিক বিষয়াবলী', marks: 100 },
  { subject: 'গাণিতিক যুক্তি ও মানসিক দক্ষতা', marks: 100 },
  { subject: 'পদ সংশ্লিষ্ট বিষয় (২টি)', marks: 200 },
]

const subjectStrategies = [
  { 
    title: 'বাংলা ভাষা ও সাহিত্য', 
    desc: 'ভাষা অংশের জন্য ৯ম-১০ম শ্রেণির পুরাতন ব্যাকরণ বোর্ড বই (NCTB) আবশ্যিক। সাহিত্য অংশে আধুনিক যুগের রবীন্দ্রনাথ, নজরুল, বঙ্কিম সহ বিশেষ ১৫ জন সাহিত্যিককে গভীরভাবে পড়তে হবে।' 
  },
  { 
    title: 'ইংরেজি ভাষা ও সাহিত্য', 
    desc: 'ভোকাবুলারি প্রতিদিনই প্র্যাকটিস করুন। Grammer-এ Parts of Speech, Tense, Voice, Clause-এ দখল বাড়ানো জরুরি।' 
  },
  { 
    title: 'সাধারণ জ্ঞান', 
    desc: 'মুক্তিযুদ্ধ, সংবিধান ও অর্থনীতি থেকে প্রতি বছরই প্রশ্ন থাকে। মানচিত্র দেখে ভৌগোলিক সীমানা ও প্রণালি সম্পর্কে ধারণা নিন।' 
  }
]

const vivaTips = [
  { title: 'নিজের সম্পর্কে জানুন', desc: 'নিজের নাম, জেলা, স্নাতক বিষয় এবং ক্যাডার চয়েস লিস্ট সম্পর্কে স্বচ্ছ ধারণা রাখুন।' },
  { title: 'সংবিধান ও মুক্তিযুদ্ধ', desc: 'এ দুটি বিষয় থেকে ভাইভা বোর্ডে প্রায় সবসময়ই প্রশ্ন করা হয়।' }
]

const booklist = [
  { category: 'বাংলা', items: ['৯ম-১০ম ব্যাকরণ (পুরাতন)', 'সৌমিত্র শেখরের জিজ্ঞাসা'] },
  { category: 'ইংরেজি', items: ['Master English - জাহাঙ্গীর আলম', 'Wren & Martin Grammar'] },
  { category: 'অন্যান্য', items: ['৬ষ্ঠ-১০ম বোর্ড বই', 'Computer & ICT Cloud'] }
]

const goldenRules = [
  'সিলেবাসটি মুখস্থ না হলেও ভালোভাবে আত্মস্থ করুন।',
  'বিগত সালের প্রশ্ন ব্যাংক অন্তত ৩ বার রিভিশন দিন।',
  'রুটিন মাফিক দৈনিক অন্তত ৮-১০ ঘণ্টা পড়াশোনা করুন।',
  'ইংরেজি ও গণিতে কোনোভাবেই দুর্বলতা রাখা যাবে না।',
  'সাম্প্রতিক তথ্যের জন্য দৈনিক পত্রিকা ও কারেন্ট অ্যাফেয়ার্স পড়ুন।',
  'বেশি বেশি মডেল টেস্ট দিন এবং ভুলগুলো সংশোধন করুন।',
  'শর্টকাট পরিহার করে বেসিক ক্লিয়ার করার চেষ্টা করুন।',
  'অনার্স পর্যায় থেকেই ধীরে ধীরে প্রস্তুতি শুরু করা উত্তম।',
  'অপ্রয়োজনীয় সোশ্যাল মিডিয়া ব্যবহার পরিহার করুন।',
  'ধৈর্য ধরে লক্ষ্য না পৌঁছানো পর্যন্ত লেগে থাকুন।'
]
</script>

<style scoped>
.animate-in {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
