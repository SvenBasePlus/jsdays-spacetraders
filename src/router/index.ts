import { createRouter, createWebHistory } from 'vue-router'

import Contracts from '@/pages/contracts.vue'
import Index from '@/pages/index.vue'
import Ships from '@/pages/ships.vue'
import Ship from '@/pages/ship.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/contracts', name: 'contracts', component: Contracts },
    { path: '/ships', name: 'ships', component: Ships },
    { path: '/ships/:id', name: 'ship', component: Ship },
  ],
})

export default router
