<template>
  <div class='header clearfix'>
    <div>
      <img class='logoare' src='./logo.png'/>
    </div>
    <h1 class='corpTitle'>襄阳润捷企业管理</h1>

    <div class='nav-bar'>
      <ul class='nav-content clearfix'>
        <li><a href='#'>首页</a></li>
        <li><a href='#'>关于润捷</a></li>
        <li><a href='#'>服务项目</a></li>
        <li><a href='#'>新闻</a></li>
        <li><a href='#'>成功案例</a></li>
        <li><a href='#'>证书样本</a></li>
        <li><a href='#'>招聘</a></li>
      </ul>
    </div>
    <i class="fa fa-bars fa-2x icon-bars" @click.stop='showNav'></i>
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
        this.ifShow = !this.ifShow
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
    z-index: 100

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
      width: 50%
      float: left
      margin-top: 60px
      margin-left: 3%
      li
        float: left
        >a
          padding: 0 12px
          font-size: $font-size-medium
          font-weight: bold
          color: $color-text-basic
        >a:hover
          color: $color-text-blue

    @media (max-width: 800px)
      .nav-bar
        display: none

    .icon-bars
      color: $color-text-blue
      float:right
      margin-right: 2%
      margin-top: 30px
      padding: 5px 15px
      border: 1px solid $color-text-blue
      border-radius: 5px
      font-size: 20px
    .icon-bars:hover
      border: 1px solid $color-text-white
        
</style>