import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import RoomGame from '../views/RoomGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: RoomGame
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
