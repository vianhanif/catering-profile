<template>
  <div :class="(quote ? 'amazing' : '') + ' mdl-card mdl-cell ' + (!avatar && showImage ? '' : 'something-else') + ' mdl-cell--' + size + '-col'">
    <div class="mdl-card__title mdl-color-text--grey-50" v-if="quote">
      <h3 class="quote">{{quote}}</h3>
    </div>
    <div class="mdl-card__media mdl-color-text--grey-50" v-if="!avatar && showImage" :style="showImage ? `background-image: url('${image}'); ${bigImage ? 'height: 400px;' : ''}` : ''">
      <h3 v-if="title"><a href="#">{{title}}</a></h3>
    </div>
    <div class="mdl-card__media dark" v-if="avatar && showImage">
      <img :src="avatar" style="width: 100%;height: auto;">
      {{name}}
    </div>
    <div class="mdl-color-text--grey-600 mdl-card__supporting-text" v-html="description" v-if="description">
    </div>
    <div class="mdl-color-text--grey-600 text" v-html="text" v-if="text">
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
    bigImage: {
      default: false
    },
    image: {
      default: null
    },
    showImage: {
      default: true
    },
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
    text: {
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
.text {
  padding: 10px;
  height: 100%;
}
.dark {
  background-color: rgb(9,50,12);
}
.mdl-card__supporting-text {
  background: none !important;
  width: 95%;
}
</style>
