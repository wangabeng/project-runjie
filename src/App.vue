<template>
  <div id="app">
    <m-header></m-header>
    <nav-bar></nav-bar>
    <poster-pic></poster-pic>
  </div>
</template>

<script>
import MHeader from 'base/m-header/m-header.vue'
import NavBar from 'base/nav-bar/nav-bar.vue'
import PosterPic from 'base/poster-pic/poster-pic.vue'

export default {
  name: 'App',
  components: {
    MHeader,
    NavBar,
    PosterPic
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

</style>
