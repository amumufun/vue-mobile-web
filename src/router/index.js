import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// import auth from '../common/auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((route, redirect, next) => {
  next();
  // if (route.path === '/login') {
  //   auth.removeToken();
  // }
  // if (!auth.getToken() && route.path !== '/login') {
  //   next({ path: '/login' });
  // } else {
  //   window.pageReturned = false;
  //   next();
  // }
});

export default router;
