import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/option/packages',
      component: require('page/Main').default,
      children: [
        {
          path: 'intro',
          name: 'Intro',
          component: require('page/home/app').default
        },
        {
          path: 'option',
          name: 'Option',
          component: require('page/option/app').default,
          children: [
            {
              path: 'packages',
              name: 'Packages',
              component: require('page/packages/app').default
            },
            {
              path: 'gofood',
              name: 'GoFood',
              component: require('page/gofood/app').default
            }
          ]
        }
      ]
    }
  ]
})
