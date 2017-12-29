<template lang="html">
  <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
    <main class="mdl-layout__content" style="padding-bottom: 100px;">
      <div class="demo-blog__posts mdl-grid">
        <card
          title="Title"
          description="Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad sunt ullamco officia. Ex officia laborum et consequat duis."
          size="8"/>
        <card
          avatar="require('assets/app/logo.png')"
          name="Profile"
          size="4"/>
        <card
          title="Title"
          subTitle="Sub Title"
          caption="Caption"
          size="6"/>
        <card
          title="Title"
          subTitle="Sub Title"
          caption="Caption"
          size="6"/>
        <card
          title="Title"
          subTitle="Sub Title"
          caption="Caption"
          size="6"/>
        <card
          title="Title"
          subTitle="Sub Title"
          caption="Caption"
          size="6"/>
        <card
          quote="I couldn’t take any pictures but this was an amazing thing…"
          size="8"/>
        <card
          title="Title"
          description="Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis."
          size="4"/>
      </div>
      <!-- <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer--left-section">
          <button class="mdl-mini-footer--social-btn social-btn social-btn__twitter">
            <span class="visuallyhidden">Twitter</span>
          </button>
          <button class="mdl-mini-footer--social-btn social-btn social-btn__blogger">
            <span class="visuallyhidden">Facebook</span>
          </button>
          <button class="mdl-mini-footer--social-btn social-btn social-btn__gplus">
            <span class="visuallyhidden">Google Plus</span>
          </button>
        </div>
        <div class="mdl-mini-footer--right-section">
          <button class="mdl-mini-footer--social-btn social-btn__share">
            <i class="material-icons" role="presentation">share</i>
            <span class="visuallyhidden">share</span>
          </button>
        </div>
      </footer> -->
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
    ...mapGetters([
      `${action.VIEW_CONFIG}`
    ])
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
