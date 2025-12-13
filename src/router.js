import { createRouter, createWebHistory } from 'vue-router'
import { createApp, h } from 'vue'
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
    height: 3px !important;
    box-shadow: 0 0 5px rgba(244, 114, 182, 0.7) !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 15px #f472b6, 0 0 10px #f472b6 !important;
    opacity: 1 !important;
  }
`
document.head.appendChild(style)

let loadingApp = null;
let loadingNode = null;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Loading.vue'),
      meta: { requiresIndexLoading: true }
    },
    {
      path: '/datascreen',
      name: 'Datascreen',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/datasource',
      name: 'Datasource',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/record',
      name: 'Record',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/variables',
      name: 'Variables',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/files',
      name: 'Files',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/maps',
      name: 'Maps',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/tools',
      name: 'Tools',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresIndexLoading) {
    NProgress.start()
  } else {
    NProgress.done()
    NProgress.remove()

    loadingNode = document.createElement('div');
    loadingNode.id = 'custom-loading';
    document.body.appendChild(loadingNode);

    try {
      const LoadingComponent = (await import('@/components/index/Loading.vue')).default;
      loadingApp = createApp({
        render: () => h(LoadingComponent)
      });
      loadingApp.mount(loadingNode);
    } catch (error) {
      console.error('Failed to load custom loading component:', error);
      NProgress.start();
      document.body.removeChild(loadingNode);
      loadingNode = null;
    }
  }

  next();
});

router.afterEach((to) => {
  if (to.meta.requiresIndexLoading && loadingApp) {
    setTimeout(() => {
      if (loadingApp) {
        loadingApp.unmount();
        loadingApp = null;
      }

      if (loadingNode && document.body.contains(loadingNode)) {
        document.body.removeChild(loadingNode);
        loadingNode = null;
      }
    }, 3000);
  }

  if (!to.meta.requiresIndexLoading && NProgress.isStarted()) {
    NProgress.done();
  }
});

export default router
