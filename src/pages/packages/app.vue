<template>
  <div class="mdl-grid">
    <Card
      v-for="(item, index) in viewConfig.list.packages"
      v-if="item !== undefined"
      :key="index"
      :showImage="true"
      :image="item.image"
      :title="item.name"
      :subTitle="item.pricing"
      :options="item.options"
      size="12"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as action from 'store/app/action-types'

export default {
  name: 'Packages',
  computed: {
    ...mapGetters({
      viewConfig: action.VIEW_CONFIG
    })
  },
  data: () => ({

  }),
  components: {
    Card: require('components/card/app').default
  }
}
</script>
<style lang="scss" scoped>
</style>
