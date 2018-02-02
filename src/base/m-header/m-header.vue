<template>
  <div class='header clearfix'>
    <div>
      <img class='logoare' src='./logo.png'/>
    </div>
    <h1 class='corpTitle'>襄阳润捷企业管理</h1>

    <div class='nav-bar'>
      <ul class='nav-content clearfix'>
        <li class='clearfix'>
          <router-link tag='a' to='/'>
            <i class="fa fa-home fa-1x"></i>&nbsp;&nbsp;首页
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/aboutus'>
            <i class="fa fa-globe fa-1x"></i>&nbsp;&nbsp;关于润捷
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/service'><i class="fa fa-list fa-1x">
            </i>&nbsp;&nbsp;服务项目
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/news'>
            <i class="fa fa-newspaper-o fa-1x"></i>&nbsp;&nbsp;新闻
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/case'>
            <i class="fa fa-book fa-1x"></i>&nbsp;&nbsp;成功案例
          </router-link>
        </li>
        <li class='clearfix'>
          <router-link tag='a' to='/sample'>
            <i class="fa fa-university fa-1x"></i>&nbsp;&nbsp;证书样本
          </router-link></li>
        <li class='clearfix'>
          <router-link tag='a' to='/jobs'>
            <i class="fa fa-handshake-o fa-1x"></i>&nbsp;&nbsp;招聘
          </router-link>
        </li>
      </ul>
    </div>
    <i class="fa fa-2x icon-bars" :class="{'fa-bars': !ifShow, 'fa-close': ifShow }" @click.stop='showNav'></i>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ifShow: false
      };
    },
    methods: {
      showNav () {
        this.ifShow = !this.ifShow;
        this.$root.eventBus.$emit('showNav', this.ifShow);
      }
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
      margin-left:4%
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
      margin-left: 3%
      @media (max-width: 800px)
        &
          display: none
      li
        float: left
        a
          padding-right: 15px
          font-size: $font-size-medium
          font-weight: bold
          color: $color-text-basic
          &.router-link-exact-active
            color: $color-text-blue

        a:hover
          display: inline-block
          color: $color-text-blue
          transform: scale(1.1)

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
      @media (max-width: 800px)
        &
          display: block
    .icon-bars:hover
      border: 1px solid $color-text-white
      transform: scale(1.1)

</style>