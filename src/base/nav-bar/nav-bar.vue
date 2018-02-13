<template>
  <transition name='navBarAnim'>
    <div class='nav-bar-wrapper' ref='navBarWrapper' v-if='navShow' @click.stop='hideNav'>
      <!--
        响应布局 当屏幕宽度小于920px时 nav改为竖直排列
      -->
      <ul class='nav-content'>
        <li class='clearfix'>
          <router-link tag='a' to='/index' @click.native='routeAnimateIndex'>
            <i class="fa fa-home fa-1x"></i>&nbsp;&nbsp;首页
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/aboutus' @click.native='routeAnimate'>
            <i class="fa fa-globe fa-1x"></i>&nbsp;&nbsp;关于润捷
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/service'><i class="fa fa-list fa-1x" @click.native='routeAnimate'>
            </i>&nbsp;&nbsp;服务项目
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/news' @click.native='routeAnimate'>
            <i class="fa fa-newspaper-o fa-1x"></i>&nbsp;&nbsp;新闻
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/case' @click.native='routeAnimate'>
            <i class="fa fa-book fa-1x"></i>&nbsp;&nbsp;成功案例
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/sample' @click.native='routeAnimate'>
            <i class="fa fa-university fa-1x"></i>&nbsp;&nbsp;证书样本
          </router-link></li>
        <li class='clearfix'>
          <router-link tag='a' to='/jobs' @click.native='routeAnimate'>
            <i class="fa fa-handshake-o fa-1x"></i>&nbsp;&nbsp;招聘
          </router-link>
        </li>
      </ul>
    </div>
  </transition>  
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
      };
    },
    computed: {
      ...mapGetters([
        'navShow'
      ])
    },
    methods: {
      ...mapActions([
        'showNav'
      ]),
      hideNav () {
        this.showNav({flag: false});
      },
      routeAnimate () {
        var scrollHeight = $('.poster-outer-wrapper').innerHeight();
        // console.log(scrollHeight);
        var curScrollTop = $("html, body").scrollTop();
        $("html, body").animate({ scrollTop: scrollHeight - 2}, 200);
        return false;
      },
      routeAnimateIndex () {
        $("html, body").animate({ scrollTop: 0}, 200);
      }
    },
    created () {
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