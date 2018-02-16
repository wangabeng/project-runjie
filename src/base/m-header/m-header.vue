<template>
  <div class='header clearfix' ref='mHeader'>
    <div>
      <img class='logoare' src='./logo.png'/>
    </div>
    <h1 class='corpTitle'>襄阳润捷企业管理</h1>

    <div class='nav-bar'>
      <ul class='nav-content clearfix'>
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
          <router-link tag='a' to='/service' @click.native='routeAnimate'>
            <i class="fa fa-list fa-1x"></i>&nbsp;&nbsp;服务项目
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/news' @click.native='routeAnimate'>
            <i class="fa fa-newspaper-o fa-1x" ></i>&nbsp;&nbsp;新闻
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
    <div class='contact-us' @click='contactRoute'>
      <span>联系我们</span>
    </div>

    <i class="fa fa-2x icon-bars" :class="{'fa-bars': !navShow, 'fa-close': navShow }" @click.stop='_showNav'></i>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  
  import {SCREENBOUNDARY} from 'src/api/config.js'

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
      _showNav () {
        var _this = this;
        this.showNav({flag: !_this.navShow});
      },
      routeAnimate () {
        // clearTimeout(timer);
        // var timer = setTimeout(() => {
        this.$nextTick(() => {
          var scrollHeight = $('.poster-outer-wrapper').innerHeight();
          $("html, body").animate({ scrollTop: scrollHeight - 2}, 400);
          return false;        
        });

      },
      routeAnimateIndex () {
        this.$nextTick(() => {
          $("html, body").animate({ scrollTop: 0}, 200);
        });
      },
      contactRoute () {
        var _this = this;
        this.$router.push({
          path: '/aboutus'
        });
        this.$nextTick(() => {
          var scrollHeight = $('.poster-outer-wrapper').innerHeight();
          $("html, body").animate({ scrollTop: scrollHeight - 2}, 400);
          return false;        
        });
      }
    },
    mounted () {
      // 这样写 window.onresize = 不同组件会相互覆盖 导致只有一个生效 正确的方法是增加监听
      /*
      window.onresize = () => {
      };
      */
      window.addEventListener('resize', () => {
        var curTotalWidth = document.documentElement.clientWidth || document.body.clientWidth;
        // console.log('header resize', curTotalWidth);
        // 如果点击开面包屑导航 然后窗口放到宽度大于768 此时navShow是true 就设置为false
        if (curTotalWidth > SCREENBOUNDARY && this.navShow === true) {
          this.showNav({flag: false})
        }
      });
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .header
    background: $color-background-header
    height: 102px
    position: fixed
    left: 0
    top: 0
    width: 100%
    z-index: 500

    .logoare
      height: 70px
      float:left
      margin-left:2%
      margin-top:15px

    /* corpTitle公司名称h1 用于SEO优化 不显示 */  
    .corpTitle
      font-size: 20px
      position: absolute
      left: 95px
      top: 56px
      font-size: 16px
      color: $color-text-blue
      margin-left: -100%
    
    .nav-bar
      width: 60%
      float: left
      margin-top: 60px
      margin-left: 2%
      @media (max-width: 920px)
        &
          display: none
      li
        float: left
        a
          padding-right: 10px
          font-size: $font-size-medium
          font-weight: bold
          color: $color-text-basic
          /* 同时具有这两个class名才生效的写法  */
          &.router-link-active
            color: $color-text-blue

        a:hover
          display: inline-block
          color: $color-text-blue
          transform: scale(1.1)

    .contact-us
      position: absolute
      right: 10px
      top: 45px
      color: $color-text-white
      font-size: $font-size-medium
      display: inline-block
      background-color:$color-background-green
      padding: 8px 12px
      border-radius: 20px
      span
        padding-left: 3px
        color: $color-text-white
    .contact-us    
      @media (max-width: 920px)
        display: none  

    .icon-bars

      display: none
      color: $color-text-blue
      float:right
      margin-right: 2%
      margin-top: 30px
      padding: 5px 15px
      border: 1px solid $color-text-blue
      border-radius: 5px
      font-size: 20px
      @media (max-width: 920px)
        &
          display: block
    .icon-bars:hover
      border: 1px solid $color-text-white
      transform: scale(1.1)

</style>