<template lang="html">
  <div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
    <main class="mdl-layout__content" style="padding-bottom: 100px;">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="demo-blog__posts center mdl-grid">
          <card
            :avatar="require('assets/img/logo_sroto2.png')"
            name=""
            size="6"/>
        </div>
      </div>
      <div class="demo-blog__posts mdl-grid">
        <card
          :showImage="false"
          :image="require('assets/img/imageMain.jpeg')"
          :bigImage="true"
          description="<p>
            <b>Deskripsi Resto</b> (contoh: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)
          </p>"
          :links="[
            {
              title: 'Location',
              type: 'break',
              list: [
                { text: 'Jl. Giring - Giring 4 no. 424 Depok II Tengah, Jawa Barat', link: 'https://www.google.co.id/maps/place/Jl.+Giring+Giring+IV,+Mekar+Jaya,+Sukmajaya,+Kota+Depok,+Jawa+Barat+16411/@-6.3960621,106.8329995,17z/data=!4m5!3m4!1s0x2e69ebeeab316f2f:0x858a434930b1587!8m2!3d-6.395937!4d106.8352606?hl=en' }
              ]
            },
            {
              title: 'Contact Us',
              type: 'break',
              list: [
                { head: 'Telp : ', text: '0878-7792-3910', link: 'tel:087877923910' },
                { head: 'E-Mail : ', text: 'neni.rokhayati.mail@gmail.com', link: 'mailto:neni.rokhayati.mail@gmail.com' }
              ]
            },
            {
              title: 'Social Media',
              type: 'inline',
              list: [
                { text: 'Facebook', link: 'https://www.facebook.com/Sroto-Soekarno-143634219655879/' },
                { text: 'Instagram', link: 'https://www.instagram.com/srotosoekarno/' }
              ]
            }
          ]"
          size="12"/>
        <card
          :image="require('assets/img/image1.jpeg')"
          description="<p>
            <b>Deskripsi Menu</b> (contoh: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.)
          </p>"
          subTitle="Keterangan Biaya"
          size="6"/>
          <card
            :image="require('assets/img/image2.jpeg')"
            description="<p>
              <b>Deskripsi Menu</b> (contoh: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.)
            </p>"
            subTitle="Keterangan Biaya"
            size="6"/>
        <card
          :image="require('assets/img/image3.jpeg')"
          description="<p>
            <b>Deskripsi Menu</b> (contoh: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.)
          </p>"
          subTitle="Keterangan Biaya"
          size="6"/>
        <card
          :image="require('assets/img/image4.jpeg')"
          description="<p>
            <b>Deskripsi Menu</b> (contoh: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.)
          </p>"
          subTitle="Keterangan Biaya"
          size="6"/>
        <!-- <card
          :showImage="false"
          size="8"/>
        <card
          :showImage="false"
          text="Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad sunt ullamco officia. Ex officia laborum et consequat duis."
          size="4"/> -->
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

<style lang="scss" scoped>
  .center {
    display: flex;
    justify-content: center;
  }
  .mdl-card {
    min-height: 0px;
    border-radius: 4px;
  }
</style>
