<template>
  <div class='header base-wrapper'>
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

    .logoare
      height: 90px
      position: absolute
      left:5px
      top:5px

    .corpTitle
      font-size: 20px
      position: absolute
      left: 95px
      top: 56px
      font-size: 16px
      color: $color-text-blue
    .icon-bars
      color: $color-text-blue
      position: absolute
      right: 30px
      top: 24px
      padding: 5px 15px
      border: 1px solid $color-text-blue
      border-radius: 5px
      font-size: 20px
    .icon-bars:hover
      border: 1px solid $color-text-white
        
</style>