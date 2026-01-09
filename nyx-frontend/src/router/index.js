import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import PrivacyDetail from '@/pages/PrivacyDetail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/privacy', name: 'privacy', component: PrivacyDetail },
  ],
})
