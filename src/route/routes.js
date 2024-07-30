const routes = [
  {
    path: '/',
    name: "home",
    component: () => import("@/pages/home/home.vue")
  },
  {
    path: '/base/base',
    name: 'base',
    component: () => import('@/pages/base/base.vue'),
  },
  {
    path: '/base/base1',
    name: 'base1',
    component: () => import('@/pages/base/base1.vue'),
  },
]

export default routes
