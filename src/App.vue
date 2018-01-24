<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from 'base/m-header/m-header.vue'

export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  #app
    width: 100%
</style>
