import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserPage.vue'),
      meta: {
        requiresAuth: true,
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/user/new',
      name: 'new',
      component: () => import('../views/NewUserPage.vue'),
      meta: {
        requiresAuth: true,
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/SignIn.vue'),
      meta: {
        layout: 'LoginLayout'
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue'),
      meta: {
        layout: 'LoginLayout'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    const match = document.cookie.match(new RegExp('(^| )' + 'token' + '=([^;]+)'));
    if (!match){
      next({
        name: 'sign-in'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})


export default router
