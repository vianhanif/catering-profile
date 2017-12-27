import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Main from 'page/Main'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
