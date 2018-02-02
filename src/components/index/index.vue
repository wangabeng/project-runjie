<template>
  <div class='index-wrapper'>
    <broad></broad>
    <field></field>
    <div class='aboutus'>
      {{aboutUs}}{{corporationName}}
    </div>
  </div>
</template>

<script>
  import Broad from 'components/broad/broad.vue'
  import Field from 'components/field/field.vue'

  import getAboutus from 'src/api/getaboutus.js'

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
  

</style>