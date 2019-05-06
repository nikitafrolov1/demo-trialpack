import Vue from 'vue';
import App from './App';
import VueMq from 'vue-mq'
import VueScrollTo from 'vue-scrollto';

import styles from './assets/scss/styles.scss'
Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 834,
    desktop: Infinity
  }
});

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
