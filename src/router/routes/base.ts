import { REDIRECT_ROUTE_NAME } from '@/router/constants';
import { AppRouteRecordRaw } from './types';

export const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue');

export const REDIRECT_MAIN: AppRouteRecordRaw = {
  path: '/redirect',
  name: 'redirectWrapper',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [
    {
      path: '/redirect/:path',
      name: REDIRECT_ROUTE_NAME,
      component: () => import('@/views/redirect/index.vue'),
      meta: {
        requiresAuth: false,
        hideInMenu: true,
      },
    },
  ],
};

export const NOT_FOUND_ROUTE = {
  path: '/notFound',
  name: 'notFound',
  component: () => import('@/views/not-found/index.vue'),
};