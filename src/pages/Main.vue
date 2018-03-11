<template lang="html">
  <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
    <main class="mdl-layout__content" style="padding-bottom: 100px;">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import * as action from 'store/app/action-types'
import card from 'components/card/app'

export default {
  name: 'Main',
  computed: {
    ...mapGetters({
      viewConfig: action.VIEW_CONFIG
    })
  },
  mounted () {
    Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function (el) {
      let link = el.querySelector('a')
      if (!link) {
        return
      }
      let target = link.getAttribute('href')
      if (!target) {
        return
      }
      el.addEventListener('click', function () {
        location.href = target
      })
    })
  },
  data () {
    return {

    }
  },
  components: {
    card
  }
}
</script>

<style lang="scss" scoped>
  .center {
    display: flex;
    justify-content: center;
  }
  .mdl-card {
    min-height: 0px;
    border-radius: 4px;
  }
  .mdl-layout__content {
    padding-top: 100px !important;
  }
</style>
