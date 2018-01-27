<template>
  <transition name='navBarAnim'>
    <div class='nav-bar-wrapper' ref='navBarWrapper' v-if='ifShow'>
      <!--
        响应布局 当屏幕宽度小于768px时 nav改为竖直排列
      -->
      <ul class='nav-content'>
        <li class='clearfix'><router-link tag='a' to='/'>首页</router-link></li>
        <li class='clearfix'><router-link tag='a' to='/aboutus'>关于润捷</router-link></li>
        <li class='clearfix'><router-link tag='a' to='/service'>服务项目</router-link></li>
        <li class='clearfix'><router-link tag='a' to='/news'>新闻</router-link></li>
        <li class='clearfix'><router-link tag='a' to='/case'>成功案例</router-link></li>
        <li class='clearfix'><router-link tag='a' to='/sample'>证书样本</router-link></li>
        <li class='clearfix'><router-link tag='a' to='/jobs'>招聘</router-link></li>
      </ul>
    </div>
  </transition>  
</template>

<script>
  export default {
    data () {
      return {
        ifShow: false
      };
    },
    created () {
      this.$root.eventBus.$on('showNav', (msg) => {
        this.ifShow = msg;
      });
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .nav-bar-wrapper
    width: 100%
    position: fixed
    background-color: $color-background-blue-pure
    top: 102px
    left: 0
    z-index: 100
    .nav-content
      display: flex
      flex-direction: column
      padding: 10px 0
      li
        width: 100%
        a
          float:left
          width: 100%
          line-height: 58px
          height: 58px
          color: $color-text-white
          padding-left: 4%
          font-size: $font-size-medium-x

        >a:hover
          background: $color-background-dark

    &.navBarAnim-enter, &.navBarAnim-leave-to
      transform: translate3d(0,-100%,0)
    &.navBarAnim-enter-active, &.navBarAnim-leave-active
      transition-duration: 0.3s
      transition-timing-function: ease-in-out
</style>