<template>
  <div class='contact-msg' ref='contactMsg' >
    <contact-msg-comp :contactSubject='contactPhone'></contact-msg-comp>
    <!--  -->
    <contact-msg-comp :contactSubject='contactQq'></contact-msg-comp>
    <div class='close add-link' ref='close' @click='closeContact' title='联系我们'>
      <i class="fa fa-close fa-1x"></i>
      <i>关闭</i>
    </div>

    <div class='open add-link' v-show='ifShow' @click='openContact' @mouseenter='openContact'>
      <i class="fa fa-angle-left fa-1x"></i>
    </div>
  </div>

</template>

<script>
  import ContactMsgComp from 'base/contact-msg-comp/contact-msg-comp.vue'

  export default {
    data () {
      return {
        ifShow: false,
        contactPhone: {
          icon: 'fa-phone',
          leftTxt: '0710-2354970',
          bottomTxt: '客服热线',
          href: '',
          target: ''
        },
        contactQq: {
          icon: 'fa-qq',
          leftTxt: '285457718',
          bottomTxt: '在线QQ',
          href: 'http://wpa.qq.com/msgrd?v=3&uin=285457718&site=qq&menu=yes',
          target: '_blank'
        }
      };
    },
    components: {
      ContactMsgComp
    },
    methods: {
      closeContact () {
        var _this = this;
        clearTimeout(this.timerOpen);
        clearTimeout(this.timerClose);
        this.timerClose = setTimeout(() => {
          $(this.$refs.contactMsg).animate({right: '-50px'}, 300, function () {
            clearTimeout(timer);
            var timer = setTimeout(() => {
              _this.ifShow = true;
            }, 200);
          });
        }, 100);
      },
      openContact () {
        var _this = this;
        clearTimeout(this.timerOpen);
        clearTimeout(this.timerClose);
        this.timerOpen = setTimeout(() => {
          $(this.$refs.contactMsg).animate({right: '0'}, 300, function () {
            _this.ifShow = false;
          });
        }, 100);

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .contact-msg
    position: fixed
    right: 0
    top: 30%
    z-index: 500
    text-align: center
    .close
      padding-top: 10px
      padding-bottom: 10px
      background: $color-background-light
      i
        font-style: normal
        font-size: $font-size-medium

    .open
      position: absolute
      top: 106px
      left: -14px
      i
        padding-right: 8px
        padding-left: 2px
        color: $color-text-blue
        text-shadow: 0px 0px 0px $color-text-white
        font-size: $font-size-large-x

        
        
</style>