import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUpPage from '../views/SignUpPage.vue'

const routes = [
  {
    path: '/home/:id',
    name: 'home',
    component: HomeView,
    props:true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
