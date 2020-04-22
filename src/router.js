/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
          path: '/home',
          component: () => import('./layouts/main/Main.vue'),
          children: [
            {
              path: '/',
              name: 'home',
              component: () => import('./views/pages/dashBoardSponsor/Home.vue'),
              // router guard
              // beforeEnter: (to, from, next) => {
              //   console.log(store.state.user.name)
              //   if(to.name === 'home' && !store.state.user.name) next({name:'page-login'})
              //   else next()
              // }
            },
            {
              path: '/elderly',
              name: 'page-2',
              component: () => import('./views/pages/dashBoardSponsor/Elderly.vue')
            },
            {
              path: '/appointment',
              name: 'appointment',
              component: () => import('./views/pages/dashBoardSponsor/Appointment.vue')
            },
          ],
        },

        {
          path: '/pages',
          component: () => import('@/layouts/full-page/FullPage.vue'),
          children: [
            {
              path: '/login',
              name: 'page-login',
              component: () => import('@/views/pages/Login.vue')
            },
            {
              path: '/register',
              name: 'page-register',
              component: () => import('@/views/pages/register/Register.vue'),
            },
            {
              path: '/forgot-password',
              name: 'page-forgot-password',
              component: () => import('@/views/pages/ForgotPassword.vue'),
            },
            {
              path: '/reset-password',
              name: 'page-reset-password',
              component: () => import('@/views/pages/ResetPassword.vue'),
            },
            {
              path: '/error-404',
              name: 'page-error-404',
              component: () => import('@/views/pages/Error404.vue')
            },
          ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/login'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
