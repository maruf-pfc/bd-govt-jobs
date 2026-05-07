import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobDetailView from '@/views/JobDetailView.vue'
import OfficialSourcesView from '@/views/OfficialSourcesView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'বাংলাদেশ সরকারি চাকরি - BD Govt Jobs' },
    },
    {
      path: '/jobs/:id',
      name: 'job-detail',
      component: JobDetailView,
      props: true,
      meta: { title: 'Job Details - BD Govt Jobs' },
    },
    {
      path: '/sources',
      name: 'sources',
      component: OfficialSourcesView,
      meta: { title: 'Official Sources - BD Govt Jobs' },
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
