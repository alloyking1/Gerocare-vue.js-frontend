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
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/elderly/add',
              name: 'page-2',
              component: () => import('./views/pages/dashBoardSponsor/AddElderly.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/elderly/all',
              name: 'page-2',
              component: () => import('./views/pages/dashBoardSponsor/AllElderly.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },

            {
              path: '/appointment',
              name: 'appointment',
              component: () => import('./views/pages/dashBoardSponsor/Appointment.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/medical/request',
              name: 'appointment',
              component: () => import('./views/pages/dashBoardSponsor/MedRequest.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/message',
              name: 'message',
              component: () => import('./views/pages/dashBoardSponsor/Message.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/subscription',
              name: 'message',
              component: () => import('./views/pages/dashBoardSponsor/Subscription.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/complaint',
              name: 'complaint',
              component: () => import('./views/pages/dashBoardSponsor/Complaint.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/specialoffer',
              name: 'special/offer',
              component: () => import('./views/pages/dashBoardSponsor/SpecialOffer.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/billing',
              name: 'billing',
              component: () => import('./views/pages/dashBoardSponsor/PaymentDetails.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/sponsor/profile',
              name: 'sponsor/profile',
              component: () => import('./views/pages/dashBoardSponsor/SponsorProfile.vue'),
              meta: {
                requiresAuth: true,
              }, 
            },
            {
              path: '/teleconsultation',
              name: 'teleconsultation',
              component: () => import('./views/pages/dashBoardSponsor/TeleConsultation.vue'),
              meta: {
                requiresAuth: true,
              }, 
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
              path: '/register/email/verify',
              name: 'page-register-verify',
              component: () => import('@/views/pages/register/RegistrationCompleted.vue'),
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



router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (localStorage.getItem('key')) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
  next();
});

export default router
