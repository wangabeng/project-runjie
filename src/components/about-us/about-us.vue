<template>
  <div class='outer-subject-wrapper' >
    <div class='inner-subject-wrapper clearfix'>
      <common-left></common-left>
      <m-article></m-article>
    </div>
  </div>
</template>

<script>
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import MArticle from 'src/base/m-article/m-article.vue'

  export default {
    components: {
      CommonLeft,
      MArticle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .outer-subject-wrapper
    width: 100%
    overflow: hidden
    .inner-subject-wrapper
      width: 170%

</style>