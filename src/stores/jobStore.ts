import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Job } from '@/types'

export const useJobStore = defineStore('jobs', () => {
  const jobs = ref<Job[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  const filters = ref({ search: '', division: '', jobType: '', status: '' })

  async function fetchJobs() {
    try {
      loading.value = true
      // Cache-busting: add timestamp to bypass browser cache
      const res = await fetch(`/jobs.json?t=${Date.now()}`)
      if (!res.ok) throw new Error('Failed to load job notices')
      jobs.value = await res.json()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  const filteredJobs = computed<Job[]>(() => {
    let result = [...jobs.value]
    const { search, division, jobType, status } = filters.value

    // Search filter (title, org in Bengali or English)
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.titleEn?.toLowerCase().includes(q) ||
          j.organization.toLowerCase().includes(q),
      )
    }

    // Division filter
    if (division) {
      result = result.filter((j) => j.division === division)
    }

    // Job type filter
    if (jobType) {
      result = result.filter((j) => j.jobType === jobType)
    }

    // Status filter based on deadline
    if (status) {
      const now = new Date()
      result = result.filter((j) => {
        const end = new Date(j.importantDates.applyEnd)
        const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        if (status === 'open') return daysLeft > 7
        if (status === 'closing') return daysLeft > 0 && daysLeft <= 7
        if (status === 'closed') return daysLeft <= 0
        return true
      })
    }

    // Sort by deadline (urgent first)
    return result.sort(
      (a, b) =>
        new Date(b.importantDates.applyEnd).getTime() -
        new Date(a.importantDates.applyEnd).getTime(),
    )
  })

  return { jobs, loading, error, filters, filteredJobs, fetchJobs }
})
