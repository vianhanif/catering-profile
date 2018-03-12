<template>
  <div :class="(quote ? 'amazing' : '') + ' mdl-card mdl-cell ' + (!avatar && showImage ? '' : 'something-else') + ' mdl-cell--' + size + '-col' + (avatar ? ' no-bg ' : '')">
    <div class="mdl-card__title mdl-color-text--grey-50" v-if="quote">
      <h3 class="quote">{{quote}}</h3>
    </div>
    <div class="mdl-card__media mdl-color-text--grey-50 image-bg" v-if="!avatar && showImage" :style="showImage ? `background-image: url('${image}'); ${bigImage ? 'height: 400px;' : ''}` : ''">
      <h3 v-if="title" class="head-title"><a href="#" v-html="title"></a></h3>
    </div>
    <div class="mdl-card__media avatar-img" v-if="avatar && showImage">
      <img :src="avatar" style="width: 100%;height: auto;">
      {{name}}
    </div>
    <div class="mdl-color-text--grey-600 mdl-card__supporting-text description" v-html="description" v-if="description">
    </div>
    <div class="mdl-color-text--grey-600" v-if="Object.keys(options).length > 0">
      <ul class="list-options mdl-grid">
        <li v-for="(item, index) in options" class="mdl-cell--4">
          <ul>
            <li v-for="(_item, _index) in item">
              {{_item}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mdl-color-text--grey-600 text" v-html="text" v-if="text">
    </div>
    <div class="mdl-card__supporting-text meta mdl-color-text--grey-600 subtitle" v-if="subTitle || caption || links" style="width: 100%;">
      <div :class="icon" v-if="icon"></div>
      <div style="width: 100%;">
        <div v-html="subTitle"></div>
        <span>{{caption}}</span>
        <div class="link-container">
          <div v-for="(item, index) in links" :key="index" class="link-item--container">
            <div class="link-title">{{item.title}}</div>
            <div :class="{'break': item.type === 'break'}">
              <div class="link-items" v-for="(_item, _index) in item.list" :key="_index">
                <b v-if="_item.head">{{_item.head}}</b> <a :href="_item.link" target="_blank">{{_item.text}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardApp',
  props: {
    options: {
      default: []
    },
    links: {
      default: null
    },
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
.subtitle {
  font-size: 20px;
  text-align: right;
  font-weight: bold;
}
.dark {
  background-color: rgb(9,50,12);
  padding: 0px;
}
.mdl-card__supporting-text {
  background: none !important;
  width: 95%;
}
.link-container {
  text-align: left;
  .link-item--container {
    margin-bottom: 15px;
    width: 100%;
    .link-title {
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    div {
      display: flex;
      justify-content: flex-start;
      .link-items {
        margin-top: 0px;
        margin-bottom: 10px;
        line-height: 1.25;
        b {
          @media(max-width: 768px) {
            display: none;
          }
          font-size: 18px;
          padding-right: 5px;
        }
        display: flex;
        margin-left: 10px;
        a {
          font-size: 18px;
          color: rgb(24,98,20);
          text-decoration: none;
        }
      }
    }
  }
}
.break {
  display: block !important;
}
.no-bg {
  background: none;
  box-shadow: none !important;
}
.avatar-img {
  padding: 0px;
  background: none;
  img {
    border-radius: 1000px !important;
    box-shadow: 0px 0px 20px rgba(38,38,38,.99);
  }
}
.list-options {
  list-style: none;
  padding-left: 0px;
  font-size: 14px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  li {
    list-style: none;
    font-weight: bold;
    border: 1px solid rgba(#6A6A6A,.38);
    border-radius: 6px;
    margin: 5px;
    ul {
      padding-left: 0px;
      padding-right: 0px;
      list-style: none;
      li {
        border: none;
        list-style: none;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
}
.head-title {
  background-color: #4B4B4B;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 18px;
}
</style>
