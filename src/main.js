// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.config.base with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import store from './store'
import 'assets/css/vendor.css'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-84069724-3',
  router,
  autoTracking: {
    page: true,
    transformQueryString: false,
    pageviewTemplate (route) {
      return {
        page: route.path,
        title: route.name,
        location: window.location.href
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
