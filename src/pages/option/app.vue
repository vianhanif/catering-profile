<template>
  <div class="demo-blog__posts mdl-grid">
    <Card
      :showImage="false"
      :image="require('assets/img/imageMain.jpeg')"
      :bigImage="true"
      :description="viewConfig.description"
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
    <div class="option-container">
      <div
      v-for="(item, index) in viewConfig.menu"
      :key="index"
      :class="{'option-item green': true, 'active': isPath(item.url)}"
      @click="$router.push(item.url)" v-html="item.text">
      </div>
    </div>
    <div class="route-container">
      <router-view></router-view>
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
    border-radius: 6px;
    width: 100%;
    margin: 8px;
    .option-item {
      cursor: pointer;
      padding: 14px;
      padding-left: 30px;
      padding-right: 30px;
      background-color: white;
      font-size: 22px;
      font-weight: 400;
      border-bottom: 2px solid white;
      width: 100%;
      text-align: center;
    }
    .active {
      font-weight: 500;
      border-bottom: 2px solid #1FD230;
    }
    .green {
      color: #1FD230;
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
