<template>
  <div class='header'>
    <div>
      <img class='logoare' src='./logo.png'/>
    </div>
    <h1 class='corpTitle'>襄阳润捷企业管理</h1>
    <i class="fa fa-bars fa-2x icon-bars"></i>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .header
    background: $color-background-header
    height: 102px
    position: relative
    width: 100%

    .logoare
      height: 60px
      position: absolute
      left:4%
      top:15px

    /* 公司名称h1 用于SEO优化 不显示 */  
    .corpTitle
      font-size: 20px
      position: absolute
      left: 95px
      top: 56px
      font-size: 16px
      color: $color-text-blue
      margin-left: -500px
    .icon-bars
      color: $color-text-blue
      position: absolute
      right: 30px
      top: 34px
      padding: 5px 15px
      border: 1px solid $color-text-blue
      border-radius: 5px
      font-size: 20px
    .icon-bars:hover
      border: 1px solid $color-text-white
        
</style>