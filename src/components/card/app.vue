<template>
  <div :class="(quote ? 'amazing' : '') + ' mdl-card mdl-cell ' + (!avatar ? 'coffee-pic' : 'something-else') + ' mdl-cell--' + size + '-col'">
    <div class="mdl-card__title mdl-color-text--grey-50" v-if="quote">
      <h3 class="quote">I couldn’t take any pictures but this was an amazing thing…</h3>
    </div>
    <div class="mdl-card__media mdl-color-text--grey-50" v-if="!avatar && title">
      <h3><a href="#">{{title}}</a></h3>
    </div>
    <div class="mdl-card__media mdl-color--white mdl-color-text--grey-600" v-if="avatar">
      <img :src="avatar">
      {{name}}
    </div>
    <div class="mdl-color-text--grey-600 mdl-card__supporting-text" v-html="description" v-if="description">
    </div>
    <div class="mdl-card__supporting-text meta mdl-color-text--grey-600" v-if="subTitle || caption">
      <div :class="icon" v-if="icon"></div>
      <div>
        <strong>{{subTitle}}</strong>
        <span>{{caption}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardApp',
  props: {
    size: {
      default: '12'
    },
    quote: {
      default: null
    },
    title: {
      default: null
    },
    subTitle: {
      default: null
    },
    caption: {
      default: null
    },
    description: {
      default: null
    },
    icon: {
      default: null
    },
    avatar: {
      default: null
    },
    name: {
      default: 'Avatar'
    }
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
