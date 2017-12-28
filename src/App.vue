<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import * as action from 'store/app/action-types'

export default {
  name: 'App',
  metaInfo () {
    return {
      title: this.$route.name,
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: 'Material Design Lite' },
        { name: 'description', content: 'A front-end template that helps you build fast, modern mobile web apps.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://code.getmdl.io/1.3.0/material.grey-orange.min.css' }
      ],
      script: [
        { src: 'https://code.getmdl.io/1.3.0/material.min.js', type: 'text/javascript', body: true }
      ]
    }
  },
  mounted () {
    this.$store.dispatch(action.VIEW_CONFIG)
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/base";
</style>
