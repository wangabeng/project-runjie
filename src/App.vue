<template>
  <div id="app">
    <m-header></m-header>
    <nav-bar></nav-bar>
    <poster-pic></poster-pic>
    <router-view/>
    <m-footer></m-footer>
    <contact-qq></contact-qq>
  </div>
</template>

<script>
import MHeader from 'base/m-header/m-header.vue'
import NavBar from 'base/nav-bar/nav-bar.vue'
import PosterPic from 'base/poster-pic/poster-pic.vue'
import MFooter from 'base/m-footer/m-footer.vue'
import ContactQq from 'base/contact-qq/contact-qq.vue'

export default {
  name: 'App',
  components: {
    MHeader,
    NavBar,
    PosterPic,
    MFooter,
    ContactQq
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

</style>
