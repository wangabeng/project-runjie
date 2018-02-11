<template>
  <div class='article-wrapper'>
    <div class='content-wrapper'>
      <h2>h2</h2>
      <div class='content-txt'>dsfsdfsdfsdfsdfdsfsd</div>
    </div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .article-wrapper
    height: 500px
    width: 41.17647059%
    float: left
    color: $color-text-black

    .content-wrapper
      padding-left: 4%
      padding-right: 3%
      padding-bottom: 60px
      h2
        font-size: $font-size-large-x
        padding-top: 40px
        padding-bottom: 30px
      .content-txt /* 若要子元素生效 需要去掉父组件article组件的scoped属性 */
        p
          color: $color-text-black
          font-size: $font-size-medium
          font-weight: 400
          line-height: 1.5em
          padding-top: 10px

        
</style>