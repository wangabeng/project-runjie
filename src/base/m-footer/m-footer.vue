<template>
  <div class="footer-wrapper">
    <p>
      <span>© 2015-2018 襄阳润捷公司版权所有</span>
      <span class='split'>|</span>
      <span>地址：湖北襄阳樊城高新区东风汽车大道锦绣天池A1-1-2206室</span>
      <span class='split'>|</span>
      <span>电话：0710-2354970</span>
    </p>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .footer-wrapper
    background: $color-background-footer
    padding: 50px 50px 50px 5%
    height: 30px
    color: $color-text-basic
    font-size: $font-size-small
    border-top: 1px solid $color-text-white
    p
      line-height: 20px
      .split
        padding-left: 5px
        padding-right: 5px

</style>
