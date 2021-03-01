import Vue from 'vue';
import VueRouter from 'vue-router';
import ErrorExample from '../views/ErrorExample.vue';
import Home from '../views/Home.vue';
import History from '../views/History.vue';
import Headline from '../views/Headline.vue';
import Sources from '../views/Sources.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/headline',
    name: 'Headline',
    component: Headline,
  },
  {
    path: '/sources',
    name: 'Sources',
    component: Sources,
  },
  {
    path: '/error',
    name: 'ErrorExample',
    component: ErrorExample,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
