<template>
  <span :class="badgeClass" class="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
    {{ statusText }}
    <span v-if="days > 0 && days <= 7" class="ml-1">({{ days }} দিন)</span>
  </span>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ deadline: string }>()

const now = new Date()
const end = new Date(props.deadline)
const days = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

const badgeClass = computed(() => {
  if (days <= 0) return 'bg-gray-200 text-gray-700'
  if (days <= 3) return 'bg-red-100 text-red-700 animate-pulse'
  if (days <= 7) return 'bg-yellow-100 text-yellow-700'
  return 'bg-green-100 text-green-700'
})

const statusText = computed(() => {
  if (days <= 0) return 'বন্ধ'
  if (days <= 3) return 'শেষ'
  if (days <= 7) return 'প্রায় শেষ'
  return 'চলছে'
})
</script>
