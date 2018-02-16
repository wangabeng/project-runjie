<template>
  <div class='contact-msg-wrapper' @mouseleave.stop='mouseOut' ref='contactMsgWrapper'>
    <div class='main-wrapper' @mouseenter.stop='mouseIn' ref='mainWrapper'>
      <div class='main' ref='main'>
        <i class="fa fa-1x" :class='{"fa-phone": "fa-phone"===contactSubject.icon,"fa-qq": "fa-qq"===contactSubject.icon}'></i>
        <span>{{contactSubject.bottomTxt}}</span>
      </div>
    </div>
    
    <div class='left-detail' ref='leftDetail'>
      <a :href='contactSubject.href' :target='contactSubject.target'>
        <i class="fa fa-1x" :class='{"fa-phone": "fa-phone"===contactSubject.icon,"fa-qq": "fa-qq"===contactSubject.icon}'></i>
        <span>{{contactSubject.leftTxt}}</span>
      </a>
    </div>
  </div>

</template>

<script>
  import addP from 'src/common/js/addP.js'

  export default {
    props: {
      contactSubject: {
        type: Object,
        default: {}
      }
    },
    methods: {
      mouseIn () {
        var _this = this;
        clearTimeout(this.timerIn);
        clearTimeout(this.timerOut);
        this.timerIn = setTimeout(() => {
          $(_this.$refs.main).animate({top: '-51px'}, 300);
          $(this.$refs.leftDetail).animate({left: '-151px'}, 300);        
        }, 50);
      },
      mouseOut () {
        var _this = this;
        clearTimeout(this.timerOut);
        clearTimeout(this.timerIn);
        this.timerOut = setTimeout(() => {
          $(_this.$refs.main).animate({top: '0'}, 300);
          $(this.$refs.leftDetail).animate({left: '0'}, 300);
        }, 50);
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .contact-msg-wrapper
    width: 50px
    height: 50px
    text-align: center
    color: $color-text-white
    border-bottom: 1px solid $color-text-white
    position: relative
    
    .main-wrapper
      position: relative
      width: 50px
      height: 50px
      overflow: hidden
      .main
        position: absolute
        width: 50px
        height: 102px
        left: 0
        top: 0
        z-index: 55
        i
          font-size: $font-size-large-x
          background: $color-background-blue-pure
          width: 50px
          height: 50px
          line-height: 50px
          border-bottom: 1px solid $color-text-white
        span
          font-size: $font-size-medium
          display: inline-block
          padding: 5px
          line-height: 20px
          height: 40px
          background: $color-background-blue-pure
    .left-detail
      border-right: 1px solid $color-text-white
      font-size: $font-size-medium-x
      height: 50px
      line-height: 50px
      position: absolute
      bottom: 0
      left:0
      z-index: 50
      background: $color-background-blue-pure
      margin-right:1px
      width: 150px
      text-align: left
      text-indent: 5px
      a
        color: $color-text-white
        span
          padding-left: 5px



</style>