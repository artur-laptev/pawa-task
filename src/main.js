import Vue from 'vue';
import App from './App.vue';
import store from './store';
import api from './api';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

store.$api = api;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
