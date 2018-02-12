<template>
  <div class='poster-pic-wrapper' ref='posterPicWrapper'>
    <img class='poster-pic' ref='posterPic' src='./business-blur.jpg'/>
    <div class='mask' ref='mask'></div>
    <div class='text' ref='text'>
      <h2>专业的一体化认证体系解决方案提供商</h2>
      <p>襄阳润捷企业管理有限公司是国内领先的体系认证咨询、企业管理咨询、企业管理培训、验厂认证咨询及产品认证咨询机构</p>
      <p class='p-bottmom'>致力于为企业、 政府及非盈利组织提供体系认证、企业发展战略制定、组织变革、 运营改善到文化管理、品牌提升、品质方法实训、品质效率改进等多项专业服务。</p>
      <div class='get-you'><a href='#/service'>获取属于您的体系认证解决方案</a></div>
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
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.posterHeight = Math.max(this.$refs.posterPic.clientHeight, this.$refs.text.clientHeight);
          // console.log(this.$refs.posterPic.clientHeight, this.$refs.text.clientHeight, this.posterHeight);
          this.$refs.mask.style.height = `${this.posterHeight}px`;
          this.$refs.posterPicWrapper.style.height = `${this.posterHeight}px`;
        }, 30);
      }
    },
    mounted () {
      this.getPosterSize();
      let _this = this;
      window.addEventListener('resize', () => {
        _this.getPosterSize();
      });
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .poster-pic-wrapper
    width: 100%
    position: relative
    margin-top: 102px
    background: $color-background-black
    .poster-pic
      width: 100%
      position: absolute
      left: 0
      top: 0
    .mask
      width: 100%
      position: absolute
      display: absolute
      background-color: $color-background-mask
      left: 0
      top: 0
    .text
      color: $color-text-white
      width: 100%
      position: absolute
      left: 0
      top: 0
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
        padding-top: 60px
        padding-bottom: 40px
        a
          color: $color-text-white
          font-size: $font-size-medium-x
          display: inline-block
          background-color:$color-background-green
          padding: 15px 30px
          border-radius: 20px

</style>