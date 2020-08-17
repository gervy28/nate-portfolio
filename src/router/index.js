import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/my-coding',
    name: 'MyCoding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyCoding.vue')
  },
  {
    path: '/my-career',
    name: 'MyCareer',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyCareer.vue')
  },
  {
    path: '/my-details',
    name: 'MyDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
