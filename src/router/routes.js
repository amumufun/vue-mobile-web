export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index/Index'),
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/User'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/error/NotFound'),
  },
];
