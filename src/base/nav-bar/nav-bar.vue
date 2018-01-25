<template>
  <div class='nav-bar-wrapper' ref='navBarWrapper'>
    <!--
      响应布局 当屏幕宽度小于768px时 nav改为竖直排列
    -->
    <ul class='nav-content'>
      <li><a href='#'>首页</a></li>
      <li><a href='#'>关于润捷</a></li>
      <li><a href='#'>服务项目</a></li>
      <li><a href='#'>新闻</a></li>
      <li><a href='#'>成功案例</a></li>
      <li><a href='#'>证书样本</a></li>
      <li><a href='#'>招聘</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    created () {
      this.$root.eventBus.$on('showNav', (msg) => {
        msg === true? this.$refs.navBarWrapper.style.display = 'block': this.$refs.navBarWrapper.style.display = 'none';
      });
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .nav-bar-wrapper
    width: 100%
    position: fixed
    background-color: $color-background-blue
    display: none
    top: 102px
    left: 0
    z-index: 100
    .nav-content
      display: flex
      flex-direction: column
      padding: 10px 0
      li
        flex: 1
        display: flex
        justify-content: left
        line-height: 58px
        height: 58px

        a
          color: $color-text-white
          padding-left: 4%
          font-size: $font-size-medium-x
          flex: 1
        >a:hover
          background: $color-background-dark

</style>