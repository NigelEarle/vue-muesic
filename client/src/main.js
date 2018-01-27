// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);

sync(store, router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
