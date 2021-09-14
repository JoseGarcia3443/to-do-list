import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks-manager',
    name: 'Tasks',
    component: () => import('@/views/Tasks.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/views/auth/SignUp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
