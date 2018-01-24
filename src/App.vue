<template>
  <div id="app">
    <m-header></m-header>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import MHeader from 'base/m-header/m-header.vue'
import NavBar from 'base/nav-bar/nav-bar.vue'

export default {
  name: 'App',
  components: {
    MHeader,
    NavBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  #app
    width: 100%
</style>
