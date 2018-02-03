<template>
  <div class='common-content'>
  </div>
</template>

<script>
  // 根据父元素传递过来的数据请求对应的数据 比如父元素传递过来news 就请求news的内容

  export default {
    props: {
      queryTitle: {
        type: String,
        default: ''
      }
    },
    created () {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .common-content
    width: 70%
    float: right
    height: 1500px

</style>