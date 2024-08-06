import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginUsuarioView from '../views/LoginUsuarioView.vue'
import VistaClienteView from '../views/VistaClienteView.vue'
import MisVehiculosView from '../views/MisVehiculosView.vue'
import MisOrdenesView from '../views/MisOrdenesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/LoginUsuario',
      name: 'LoginUsuario',
      component: LoginUsuarioView
    },
    {
      path: '/MisOrdenes',
      name: 'MisOrdenes',
      component: MisOrdenesView
    },
    {
      path: '/MisVehiculos',
      name: 'MisVehiculos',
      component: MisVehiculosView
    }
  ]
})

export default router
