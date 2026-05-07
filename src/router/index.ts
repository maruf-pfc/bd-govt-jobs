import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/preparation/bcs',
      name: 'preparation-bcs',
      component: () => import('../views/PreparationView.vue'),
    },
    {
      path: '/preparation/bank-govt',
      name: 'preparation-bank-govt',
      component: () => import('../views/BankPreparationView.vue'),
    },
    {
      path: '/preparation/bank-private',
      name: 'preparation-bank-private',
      component: () => import('../views/PrivateBankPreparationView.vue'),
    },
    {
      path: '/preparation/teacher',
      name: 'preparation-teacher',
      component: () => import('../views/TeacherPreparationView.vue'),
    },
    {
      path: '/circulars',
      name: 'circulars',
      component: () => import('../views/CircularsView.vue'),
    },
    {
      path: '/jobs/:id',
      name: 'job-detail',
      component: () => import('../views/JobDetailView.vue'),
    },
  ],
})

export default router
