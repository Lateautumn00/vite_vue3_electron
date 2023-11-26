import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw
  } from 'vue-router'
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('../views/Home.vue')
    }
    //   {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
  ]
  
  const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: process.env.IS_ELECTRON
      ? createWebHashHistory(process.env.BASE_URL)
      : createWebHistory(process.env.BASE_URL), //解决打包后白屏
    routes
  })
  
  export default router
  