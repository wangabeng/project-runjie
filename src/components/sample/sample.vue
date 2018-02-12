<template>
  <div class='outer-subject-wrapper'>
    <div class='inner-subject-wrapper clearfix' >
      <common-left></common-left>
      <m-article 
        :contentData='sampleContent' 
        :subject='subject'
        
      ></m-article>
    </div>
  </div>
</template>

<script>
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import MArticle from 'src/base/m-article/m-article.vue'

  import {getSample} from 'src/api/getsample.js'
  const curPage = 1
  const pageCapacity = 20

  export default {
    data () {
      return {
        sampleContent: [],
        subject: 'sample'
      };
    },
    created () {
      this._getSample(curPage, pageCapacity);
    },
    methods: {
      _getSample (curPage, pageCapacity) {
        var _this = this;
        getSample(curPage, pageCapacity).then(function (response) {
          _this.sampleContent = response.data;
          // console.log(_this.sampleContent);
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