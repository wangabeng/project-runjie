<template>
  <div class='news-wrapper clearfix'>
    <common-left></common-left>
    <common-content :queryTitle='queryTitle'></common-content><!-- 给子元素传递requestTitle news -->
  </div>
</template>

<script>
  // 导入组件
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import CommonContent from 'src/base/common-content/common-content.vue'

  // 导入api
  import getNews from 'src/api/getnews.js'

  export default {
    data () {
      return {
        queryTitle: 'news'
      };
    },
    components: {
      CommonLeft,
      CommonContent
    },
    created () {
      // 请求一共有多少页
      // 请求当前页的内容 默认是第一页的内容
      // 然后把以上数据传给子元素
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .news-wrapper
    width: 100%

</style>