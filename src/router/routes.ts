import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue'),
        name: 'Home'
      },
      {
        path: 'about',
        component: () => import('pages/AboutPage.vue'),
        name: 'About'
      },
      {
        path: 'setting',
        component: () => import('pages/SettingPage.vue'),
        name: 'Setting'
      },
      {
        path: 'notifications',
        component: () => import('pages/NotificationPage.vue'),
        name: 'Notification'
      }
    ],
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/MainLoginPage.vue'),
        name: 'Login'
      },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
