<script setup lang="ts">
import { ref, computed } from 'vue'

interface Platform {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  url: string
  category: string
  badge?: string
  badgeEn?: string
  active: boolean
}

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: 'সব', labelEn: 'All' },
  { id: 'commission', label: 'কমিশন', labelEn: 'Commissions' },
  { id: 'banking', label: 'ব্যাংক', labelEn: 'Banking' },
  { id: 'soe', label: 'রাষ্ট্রায়ত্ত', labelEn: 'State Enterprises' },
  { id: 'education', label: 'শিক্ষা', labelEn: 'Education' },
  { id: 'defense', label: 'প্রতিরক্ষা', labelEn: 'Defense & Security' },
  { id: 'ministry', label: 'মন্ত্রণালয়', labelEn: 'Ministries' },
]

const platforms: Platform[] = [
  {
    id: 'bpsc',
    name: 'বাংলাদেশ সরকারি কর্ম কমিশন',
    nameEn: 'Bangladesh Public Service Commission',
    description: 'BCS ক্যাডার ও নন-ক্যাডার পদে নিয়োগ পরীক্ষা পরিচালনাকারী সর্বোচ্চ সংস্থা।',
    descriptionEn: 'The apex body conducting BCS cadre and non-cadre recruitment examinations.',
    url: 'https://bpsc.gov.bd',
    category: 'commission',
    badge: 'বিসিএস',
    badgeEn: 'BCS',
    active: true,
  },
  {
    id: 'teletalk-alljobs',
    name: 'টেলিটক অল জবস পোর্টাল',
    nameEn: 'Teletalk All Jobs Portal',
    description: 'সরকারি চাকরির আবেদন গ্রহণের কেন্দ্রীয় অনলাইন পোর্টাল।',
    descriptionEn: 'Central online portal for submitting government job applications.',
    url: 'https://alljobs.teletalk.com.bd',
    category: 'commission',
    badge: 'কেন্দ্রীয়',
    badgeEn: 'Central',
    active: true,
  },
  {
    id: 'portal-gov',
    name: 'বাংলাদেশ জাতীয় পোর্টাল',
    nameEn: 'Bangladesh National Web Portal',
    description: 'সরকারি নোটিশ, বিজ্ঞপ্তি ও তথ্যের একীভূত জাতীয় প্ল্যাটফর্ম।',
    descriptionEn: 'Unified national platform for government notices, circulars and information.',
    url: 'https://www.portal.gov.bd',
    category: 'commission',
    active: true,
  },
  {
    id: 'bangladesh-bank',
    name: 'বাংলাদেশ ব্যাংক',
    nameEn: 'Bangladesh Bank',
    description: 'বাংলাদেশের কেন্দ্রীয় ব্যাংকের সহকারী পরিচালক ও অন্যান্য পদে নিয়োগ বিজ্ঞপ্তি।',
    descriptionEn: "Recruitment notices for AD and other positions at Bangladesh's central bank.",
    url: 'https://erecruitment.bb.org.bd',
    category: 'banking',
    badge: 'কেন্দ্রীয় ব্যাংক',
    badgeEn: 'Central Bank',
    active: true,
  },
  {
    id: 'dpe',
    name: 'প্রাথমিক শিক্ষা অধিদপ্তর',
    nameEn: 'Directorate of Primary Education (DPE)',
    description: 'সরকারি প্রাথমিক বিদ্যালয়ে সহকারী শিক্ষক ও প্রধান শিক্ষক নিয়োগ।',
    descriptionEn: 'Recruitment for assistant teachers and head teachers in govt primary schools.',
    url: 'https://www.dpe.gov.bd',
    category: 'education',
    badge: 'প্রাথমিক',
    badgeEn: 'Primary',
    active: true,
  },
  {
    id: 'bangladesh-army',
    name: 'বাংলাদেশ সেনাবাহিনী',
    nameEn: 'Bangladesh Army',
    description: 'সেনাবাহিনীতে অফিসার ও সৈনিক নিয়োগ সংক্রান্ত সকল বিজ্ঞপ্তি।',
    descriptionEn: 'All officer and soldier recruitment notices for the Bangladesh Army.',
    url: 'https://www.army.mil.bd',
    category: 'defense',
    active: true,
  },
  {
    id: 'mohw',
    name: 'স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
    nameEn: 'Ministry of Health & Family Welfare',
    description: 'ডাক্তার, নার্স ও স্বাস্থ্য কর্মী নিয়োগের বিজ্ঞপ্তি।',
    descriptionEn: 'Notices for doctor, nurse and health worker recruitment.',
    url: 'https://mohfw.gov.bd',
    category: 'ministry',
    active: true,
  },
]

const filteredPlatforms = computed(() => {
  let list = platforms.filter((p) => p.active)
  if (selectedCategory.value !== 'all') {
    list = list.filter((p) => p.category === selectedCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    )
  }
  return list
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
}

const getCategoryLabel = (categoryId: string) => {
  const cat = categories.find((c) => c.id === categoryId)
  return cat ? cat.label : categoryId
}

const categoryColors: Record<string, string> = {
  commission: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  banking: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  soe: 'bg-orange-100 text-orange-700 border-orange-200',
  education: 'bg-blue-100 text-blue-700 border-blue-200',
  defense: 'bg-red-100 text-red-700 border-red-200',
  ministry: 'bg-purple-100 text-purple-700 border-purple-200',
}

const categoryIcons: Record<string, string> = {
  commission: '🏛️',
  banking: '🏦',
  soe: '🏭',
  education: '🎓',
  defense: '🛡️',
  ministry: '📋',
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 py-8 sm:px-6">
        <h1 class="text-2xl font-bold text-gray-900">অফিসিয়াল উৎস সমূহ</h1>
        <p class="text-gray-500 text-sm mt-1">Official Job Portals & Platforms</p>
        <p class="text-gray-600 text-sm mt-2">
          বাংলাদেশের সকল সরকারি চাকরির নিয়োগ বিজ্ঞপ্তির অফিসিয়াল ওয়েবসাইট সমূহের তালিকা।
        </p>
      </div>
    </div>

    <!-- Filters -->
    <div class="max-w-6xl mx-auto px-4 py-5 sm:px-6">
      <div class="flex flex-col sm:flex-row gap-3">
        <!-- Search -->
        <div class="relative flex-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="প্ল্যাটফর্ম খুঁজুন / Search platforms..."
            class="w-full pl-4 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <!-- Category buttons -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="[
              'px-3 py-2 rounded-xl text-xs font-medium border transition-all',
              selectedCategory === cat.id
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-400',
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Reset button -->
      <p v-if="searchQuery || selectedCategory !== 'all'" class="mt-3 text-sm text-gray-500">
        {{ filteredPlatforms.length }}টি ফলাফল
        <button @click="resetFilters" class="ml-2 text-green-600 hover:underline">
          রিসেট করুন
        </button>
      </p>
    </div>

    <!-- Platform Grid -->
    <div class="max-w-6xl mx-auto px-4 pb-12 sm:px-6">
      <div v-if="filteredPlatforms.length === 0" class="text-center py-16 text-gray-500">
        <p class="font-medium">কোনো ফলাফল পাওয়া যায়নি।</p>
        <p class="text-sm mt-1">No results found.</p>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="platform in filteredPlatforms"
          :key="platform.id"
          :href="platform.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:border-green-300 transition flex flex-col gap-3"
        >
          <!-- Header -->
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span
                  :class="[
                    'text-xs font-medium px-2 py-0.5 rounded-full border',
                    categoryColors[platform.category],
                  ]"
                >
                  {{ categoryIcons[platform.category] }} {{ getCategoryLabel(platform.category) }}
                </span>
                <span
                  v-if="platform.badge"
                  class="text-xs font-bold px-2 py-0.5 rounded-full bg-green-600 text-white"
                >
                  {{ platform.badge }}
                </span>
              </div>
              <h3
                class="font-semibold text-gray-900 text-sm leading-snug group-hover:text-green-700"
              >
                {{ platform.name }}
              </h3>
              <p class="text-xs text-gray-500 mt-0.5">{{ platform.nameEn }}</p>
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs text-gray-600 leading-relaxed line-clamp-2">
            {{ platform.description }}
          </p>

          <!-- URL -->
          <div class="mt-auto pt-2 border-t border-gray-100">
            <span class="text-xs text-gray-400 font-mono truncate block">
              {{ platform.url.replace('https://', '').replace('http://', '') }}
            </span>
          </div>
        </a>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="max-w-6xl mx-auto px-4 pb-8 sm:px-6">
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800">
        <strong>⚠️ দায়িত্ব অস্বীকার:</strong> এই তালিকাটি শুধুমাত্র তথ্যের উদ্দেশ্যে। আবেদনের আগে
        অফিসিয়াল ওয়েবসাইট থেকে যাচাই করুন।
      </div>
    </div>
  </div>
</template>
