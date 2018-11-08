import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import { routes } from './routes.js';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});



/*
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
*/