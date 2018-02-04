<template>
  <div class='index-wrapper'>
    <broad></broad>
    <field></field>
    <div class='aboutus-wrapper'>
      <div>
        <img src='./aboutus_white.png'>
        <!--<h3>About Us</h3>
        <h4><i class='fa fa-arrow-circle-down fa-1x'></i>关于润捷</h4>-->
      </div>

      <p>
        {{aboutUs}}
      </p>
    </div>
  </div>
</template>

<script>
  import Broad from 'components/broad/broad.vue'
  import Field from 'components/field/field.vue'

  import {getAboutus} from 'src/api/getaboutus.js'

  export default {
    data () {
      return {
        aboutUs: '',
        corporationName: ''
      };
    },
    created () {
      this._getAboutus();
    },
    components: {
      Broad,
      Field
    },
    methods: {
      _getAboutus () {
        var _this = this;
        getAboutus().then(function (response) {
          _this.aboutUs = response.data[0].aboutUs;
          _this.corporationName = response.data[0].corporationName;
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  
  .aboutus-wrapper
    width: 100%
    div
      position: relative
      color: $color-text-white
      img
        width: 100%
        border: none
        display: block

      h3
        position: absolute
        left: 60%
        top: 55%
        font-size: 2em
      h4
        position: absolute
        left: 60%
        top: 80%
        font-size: 1em
        i
          padding-right: 1em
    p
      width: 90%
      padding: 30px 5%  90px 5%
      line-height: 30px
      color: $color-text-basic
      font-size: $font-size-small
      background-color: $color-background-footer
      text-align:justify

</style>