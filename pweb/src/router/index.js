import { createRouter, createWebHistory } from 'vue-router'
import LoginUsuarioView from '../views/LoginUsuarioView.vue'
import VistaClienteView from '../views/VistaClienteView.vue'
import HomeView from '../views/HomeView.vue'

import MisVehiculosView from '@/views/MisVehiculosView.vue'
import PerfilView from '@/views/PerfilView.vue'
import DetalleDeMisOrdenesView from '@/views/DetalleDeMisOrdenesView.vue'



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
      path: '/VistaCliente',
      name: 'VistaCliente',
      redirect: '/VistaCliente/perfil',
      component: VistaClienteView,
      children:[
        {
          path: 'perfil',
          name: 'perfil',
          component: PerfilView
        },
        {
          path: 'misVehiculos',
          name: 'misVehiculos',
          component: MisVehiculosView
        },
        {
          path: 'detalleDeMisOrdenes',
          name: 'detalleDeMisOrdenes',
          component: DetalleDeMisOrdenesView
        }
    ]



    }
  ]
})

export default router
