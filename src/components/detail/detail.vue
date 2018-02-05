<template>
  <div class='detail-wrapper clearfix'>
    this is detail {{curItem}} and {{curIndex}} adn {{navShow}}
  </div>
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
    width: 70%
    float: left
    background: red
</style>