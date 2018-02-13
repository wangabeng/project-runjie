<template>
  <div class='poster-outer-wrapper'><!-- 宽度100%  -->
    <div class='poster-inner-wrapper clearfix'><!-- 宽度200% overflow: hidden -->
      
      <div class='poster-pic-wrapper' ref='posterPicWrapper'>
        <img class='poster-pic' ref='posterPic' src='./business-blur.jpg'/><!--浮动-->
      </div>

      <div class='text' ref='text'><!--浮动-->
        <h2>专业的一体化认证体系解决方案提供商</h2>
        <p>襄阳润捷企业管理有限公司是国内领先的体系认证咨询、企业管理咨询、企业管理培训、验厂认证咨询及产品认证咨询机构</p>
        <p class='p-bottmom'>致力于为企业、 政府及非盈利组织提供体系认证、企业发展战略制定、组织变革、 运营改善到文化管理、品牌提升、品质方法实训、品质效率改进等多项专业服务。</p>
        <div class='get-you'><a href='#/service'>获取属于您的体系认证解决方案</a></div>
      </div>

      <div class='mask' ref='mask'></div><!-- 绝对定位 -->
      
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posterHeight: ''
      };
    },
    methods: {
      getPosterSize () {

      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .poster-outer-wrapper
    margin-top: 102px
    width: 100%
    overflow: hidden
    .poster-inner-wrapper
      width: 200%
      background: $color-background-black
      position: relative
      left: 0
      top:  0

      .poster-pic-wrapper
        float: left
        width: 50%
        height: 0
        padding: 21% 0 0 0
        position: relative
        .poster-pic
          width: 100%
          height: 100%
          position: absolute
          left: 0
          top: 0
      .text
        color: $color-text-white
        z-index: 15
        float: left
        width: 50%
        position: relative
        left: -50%
        h2
          text-align: center
          width: 50%
          margin: 0 auto
          padding-top: 70px
          font-size: $font-size-large
          line-height: 40px
        p
          text-align: center
          width: 80%
          margin: 0 auto
          padding-top: 10px
          line-height: 30px
          font-size: $font-size-medium
        .p-bottmom
          padding-bottom: 20px
        .get-you
          text-align: center
          margin: 0 auto
          padding-top: 4%
          padding-bottom: 7%
          a
            color: $color-text-white
            font-size: $font-size-medium-x
            display: inline-block
            background-color:$color-background-green
            padding: 15px 30px
            border-radius: 20px

      .mask
        width: 100%
        height: 100%
        position: absolute
        background-color: $color-background-mask
        left: 0
        top: 0
        z-index: 10

</style>