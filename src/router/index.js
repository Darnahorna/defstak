import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import AdminPage from '../pages/AdminPage.vue'
import authService from '../services/authenticate.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !authService.isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

export default router
