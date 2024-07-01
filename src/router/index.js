import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName "contact" */ '@/views/Contact.vue')
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: () => import(/* webpackChunkName "projects" */ '@/views/Projects.vue')
  },
  {
    path: '/proyecto/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName "projects" */ '@/views/Project.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router