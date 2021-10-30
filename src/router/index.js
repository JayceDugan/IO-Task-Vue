import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Tasks from '../views/Tasks.vue';
import Calendar from '../views/Calendar.vue';
import Kanban from '../views/Kanban.vue';
import Contacts from '../views/Contacts.vue';
import Projects from '../views/Projects.vue';
import AccountFormSplashScreen from '../views/AccountFormSplashScreen.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/kanban-desk',
    name: 'Kanban Desk',
    component: Kanban,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/create-account',
    name: 'Create Account',
    component: AccountFormSplashScreen,
    props: {
      form: 'create-account-wizard',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: AccountFormSplashScreen,
    props: {
      form: 'sign-in-form',
    },
  },
  {
    path: '/password-recovery',
    name: 'Password Recovery',
    component: AccountFormSplashScreen,
    props: {
      form: 'password-recovery-form',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters['user/isLoggedIn'];

  if (!['/login', '/password-recovery', '/create-account'].includes(to.path) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
