<template>
  <div class='nav-bar-wrapper'>
    <!--
      响应布局 当屏幕宽度小于768px时 nav改为竖直排列
    -->
    <ul class='nav-content'>
      <li><a href='#'>首页</a></li>
      <li><a href='#'>关于我们</a></li>
      <li><a href='#'>服务项目</a></li>
      <li><a href='#'>首页</a></li>
      <li><a href='#'>首页</a></li>
      <li><a href='#'>首页</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .nav-bar-wrapper
    width: 100%
    height: 40px
    background-color: $color-background-blue

    .nav-content li
      float: left

      a
        color: $color-text-white
</style>