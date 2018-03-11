<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="demo-blog__posts center mdl-grid">
          <card
            :avatar="require('assets/img/logo_sroto2.png')"
            name=""
            size="6"/>
        </div>
      </div>
      <Card
        :showImage="false"
        :image="require('assets/img/imageMain.jpeg')"
        :bigImage="true"
        :links="[
          {
            title: viewConfig.address.name,
            type: 'break',
            list: [
              { text: viewConfig.address.text, link: viewConfig.address.link }
            ]
          },
          {
            title: viewConfig.contact.name,
            type: 'break',
            list: [
              { head: 'Telp : ', text: viewConfig.contact.phone, link: `tel:${viewConfig.contact.phone.split('-').join('')}` },
              { head: 'E-Mail : ', text: viewConfig.contact.email, link: `mailto:${viewConfig.contact.email}` }
            ]
          },
          {
            title: viewConfig.links.name,
            type: 'inline',
            list: [
              { text: 'Facebook', link: viewConfig.links.facebook },
              { text: 'Instagram', link: viewConfig.links.instagram }
            ]
          }
        ]"
        size="12"/>
    </div>
    <div class="mdl-cell mdl-cell--12-col-phone mdl-cell--8-col-tablet">
      <div class="option-container">
        <div
        v-for="(item, index) in viewConfig.menu"
        :key="index"
        :class="{'option-item green': true, 'active': isPath(item.url)}"
        @click="$router.replace(item.url)" v-html="item.text">
        </div>
      </div>
      <div class="route-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as action from 'store/app/action-types'

export default {
  name: 'OptionPage',
  computed: {
    ...mapGetters({
      viewConfig: action.VIEW_CONFIG
    })
  },
  methods: {
    isPath (path) {
      return this.$route.path === path
    }
  },
  data: () => ({

  }),
  components: {
    Card: require('components/card/app').default
  }
}
</script>
<style lang="scss" scoped>
.mdl-grid {
  justify-content: center;
  .option-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background-color: white;
    border-radius: 4px;
    width: auto;
    margin: 8px;
    .option-item {
      cursor: pointer;
      padding: 14px;
      padding-left: 30px;
      padding-right: 30px;
      background-color: white;
      font-size: 22px;
      font-weight: 400;
      width: 100%;
      opacity: .5;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 1.2;
      &:nth-child(odd) {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:nth-child(even) {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    .active {
      opacity: 1;
      font-weight: 500;
      background-color: rgba(#FFA711,.58);
    }
    .green {
      color: rgb(24,98,20);
    }
    .yellow {
      color: #FFA711;
    }
  }
  .route-container {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 400px;
  }
}
</style>
