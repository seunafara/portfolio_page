import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// vue lazy loader
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

// page transitions
import VuePageTransition from 'vue-page-transition';

Vue.use(VuePageTransition);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
