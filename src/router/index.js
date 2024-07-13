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
    path: '/animaciones',
    name: 'Animations',
    component: () => import(/* webpackChunkName "animations" */ '@/views/Animations.vue'),
    meta: {
      title: `Animaciones ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/animaciones/:id',
    name: 'Animation',
    component: () => import(/* webpackChunkName "animation" */ '@/views/Animation.vue'),
    meta: {
      title: `Animación ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/buscar',
    name: 'Search',
    component: () => import(/* webpackChunkName "search" */ '@/views/Search.vue'),
    meta: {
      title: `Buscar ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/disenos-graficos',
    name: 'GraphicDesigns',
    component: () => import(/* webpackChunkName "graphic-designs" */ '@/views/GraphicDesigns.vue'),
    meta: {
      title: `Diseños gráficos ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/disenos-graficos/:id',
    name: 'GraphicDesign',
    component: () => import(/* webpackChunkName "graphic-design" */ '@/views/GraphicDesign.vue'),
    meta: {
      title: `Diseño gráfico ${BASE_URL_TITLE}`
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
    path: '/proyectos/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName "project" */ '@/views/Project.vue'),
    meta: {
      title: `Proyecto ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/videos',
    name: 'Videos',
    component: () => import(/* webpackChunkName "videos" */ '@/views/Videos.vue'),
    meta: {
      title: `Videos ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/videos/:id',
    name: 'Video',
    component: () => import(/* webpackChunkName "video" */ '@/views/Video.vue'),
    meta: {
      title: `Video ${BASE_URL_TITLE}`
    }
  },
  {
    path: '/:id',
    name: 'Page',
    component: () => import(/* webpackChunkName "page" */ '@/views/Static.vue'),
    meta: {
      title: `Página ${BASE_URL_TITLE}`
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