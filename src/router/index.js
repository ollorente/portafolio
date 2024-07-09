import { createRouter, createWebHashHistory } from 'vue-router'

const BASE_URL_TITLE = '© Oscar Llorente'

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
    component: () => import(/* webpackChunkName "project" */ '@/views/Project.vue'),
    meta: {
      title: `Proyecto ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/accesibilidad',
    name: 'Accessibility',
    component: () => import(/* webpackChunkName "accessibility" */ '@/views/Contact.vue'),
    meta: {
      title: `Accesibilidad ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: () => import(/* webpackChunkName "cookies" */ '@/views/Contact.vue'),
    meta: {
      title: `Cookies ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/mas',
    name: 'More',
    component: () => import(/* webpackChunkName "more" */ '@/views/Contact.vue'),
    meta: {
      title: `Más ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/privacidad',
    name: 'Privacy',
    component: () => import(/* webpackChunkName "privacy" */ '@/views/Contact.vue'),
    meta: {
      title: `Privacidad ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/publicidad',
    name: 'Advertising',
    component: () => import(/* webpackChunkName "advertising" */ '@/views/Contact.vue'),
    meta: {
      title: `Publicidad ${BASE_URL_TITLE}`
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