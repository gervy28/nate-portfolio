import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'my-coding',
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
