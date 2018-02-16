<template>
  <div class="footer-wrapper" ref='mFooter'>
    <p>
      <span>© 2015-2018 襄阳润捷公司版权所有</span>
      <span class='split'>|</span>
      <span>地址：湖北襄阳樊城高新区东风汽车大道锦绣天池A1-1-2206室</span>
      <span class='split'>|</span>
      <span>电话：0710-2354970</span>
    </p>
    <div class='scroll-top add-link' @click='goTop'>
      <i class="fa fa-chevron-circle-up fa-1x bound"></i>
      <span>返回顶部</span>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    this.boundAnimation();
  },
  methods: {
    boundAnimation () {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        $('.bound').animate({top: '-5'}, 300).animate({top: '0'}, 300);
      } ,2000);
    },
    goTop () {
      $("html, body").animate({scrollTop: '0'}, 300);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .footer-wrapper
    background: $color-background-footer
    padding: 50px 25% 50px 5%
    height: 30px
    color: $color-text-basic
    font-size: $font-size-small
    border-top: 1px solid $color-text-white
    position: relative
    p
      line-height: 20px
      .split
        padding-left: 5px
        padding-right: 5px
    .scroll-top
      font-size: $font-size-medium
      position: absolute
      right: 4%
      top: 30px
      color: red
      text-align: center
      color: $color-text-blue
      i
        display: inline-block
        width: 100%
        padding-bottom: 10px
        font-size: $font-size-large-xx
        position: relative
      span
        display: inline-block
        width: 100%

</style>
