import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})

const style = document.createElement('style')
style.innerHTML = `
  #nprogress .bar {
    background: #f472b6 !important;
    height: 2px !important;
    box-shadow: 0 0 5px rgba(244, 114, 182, 0.7) !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 15px #f472b6, 0 0 10px #f472b6 !important;
    opacity: 1 !important;
  }
  #nprogress .spinner {
    display: none !important;
  }
`
document.head.appendChild(style)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
