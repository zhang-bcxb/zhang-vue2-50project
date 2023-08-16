import Vue from 'vue'
import VueRouter from 'vue-router'
import {initRouter, proRouterHandle} from './router-all.js'

Vue.use(VueRouter)

const routes = [
  ...initRouter,
  ...proRouterHandle()
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
