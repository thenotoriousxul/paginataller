import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import LoginUsuarioView from '../views/LoginUsuarioView.vue'
import VistaClienteView from '../views/VistaClienteView.vue'

import MisVehiculosView from '@/views/MisVehiculosView.vue'
import PerfilView from '@/views/PerfilView.vue'
import DetalleDeMisOrdenesView from '@/views/DetalleDeMisOrdenesView.vue'

=======
import HomeView from '../views/HomeView.vue'
import LoginUsuarioView from '../views/LoginUsuarioView.vue'
import VistaClienteView from '../views/VistaClienteView.vue'
>>>>>>> 0a9462cf67b4e995cbcbe02f6b90c1a0e1a8e1b1
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
=======
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
>>>>>>> 0a9462cf67b4e995cbcbe02f6b90c1a0e1a8e1b1
      path: '/LoginUsuario',
      name: 'LoginUsuario',
      component: LoginUsuarioView
    },
    {
      path: '/VistaCliente',
      name: 'VistaCliente',
<<<<<<< HEAD
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
=======
      component: VistaClienteView
>>>>>>> 0a9462cf67b4e995cbcbe02f6b90c1a0e1a8e1b1
    }
  ]
})

export default router
