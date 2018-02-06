<template>
  <transition name='detail-anim'>
    <div class='detail-wrapper clearfix'>
      this is detail {{curItem}} and {{curIndex}} adn {{navShow}}
    </div>
  </transition>
</template>

<script>
  // 导入组件
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import CommonContent from 'src/base/common-content/common-content.vue'
  import {PAGECAPACITY} from 'src/api/config.js'

  import {mapGetters} from 'vuex'

  // 导入api
  import {getNews, getNewsCount} from 'src/api/getnews.js'

  export default {
    created () {
    },
    computed: {
      ...mapGetters([
        'curItem',
        'curIndex',
        'navShow'
      ])
    } 
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .detail-wrapper
    width: 41.17647059%
    float: left
    background: red
    position: relative
    left: -41.17647059%

    &.detail-anim-enter, &.detail-anim-leave-to
      transform: translate3d(100%, 0, 0)
    &.detail-anim-enter-active, &.detail-anim-leave-active
      transition-duration: 0.3s
      transition-timing-function: ease-in-out
</style>