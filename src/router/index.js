import { createRouter, createWebHashHistory } from 'vue-router'

const BASE_URL_TITLE = '© Ollorente portafolio'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue'),
    meta: {
      title: `Home ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName "contact" */ '@/views/Contact.vue'),
    meta: {
      title: `Contacto ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: () => import(/* webpackChunkName "projects" */ '@/views/Projects.vue'),
    meta: {
      title: `Proyectos ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/proyecto/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName "projects" */ '@/views/Project.vue'),
    meta: {
      title: `Proyecto ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/:pathMacth(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName "not-found" */ '@/views/NotFound.vue'),
    meta: {
      title: `Página no encontrada ${BASE_URL_TITLE}`
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router