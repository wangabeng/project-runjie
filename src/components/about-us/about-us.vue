<template>
  <div class='outer-subject-wrapper'>
    <div class='inner-subject-wrapper clearfix' >
      <common-left></common-left>
      <m-article 
        :contentData='aboutusContent' 
        :subject='subject'
        
      ></m-article>
    </div>
  </div>
</template>

<script>
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import MArticle from 'src/base/m-article/m-article.vue'

  import {getAboutus} from 'src/api/getaboutus.js'

  export default {
    data () {
      return {
        aboutusContent: [],
        subject: 'aboutUs'
      };
    },
    created () {
      this._getAboutus();
    },
    methods: {
      _getAboutus () {
        var _this = this;
        getAboutus().then(function (response) {
          _this.aboutusContent = response.data;
          // console.log(_this.aboutusContent);
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    components: {
      CommonLeft,
      MArticle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .outer-subject-wrapper
    width: 100%
    overflow: hidden
    .inner-subject-wrapper
      width: 170%

</style>