import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Axios from 'axios'
import { store } from './store/store.js'
import { routes } from './routes';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

const token = localStorage.getItem('token');

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const protectedUrls = ['createAdventure']
  if ( protectedUrls.includes(to.name) && !store.getters.getLoginStatus ) {
    next({ name: 'login' });
  } else {
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
