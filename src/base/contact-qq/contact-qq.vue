<template>
  <div class='contact-qq' >
    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=285457718&site=qq&menu=yes">
      <i class="fa fa-qq fa-2x"></i>
    </a>
  </div>

</template>

<script>
  import addP from 'src/common/js/addP.js'

  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .contact-qq
    position: fixed
    right: 0
    top: 30%
    display: none
    a
      display: inline-block
      height: 20px
      width: 20px
      line-height: 30px
      i
        color: gray
        
</style>