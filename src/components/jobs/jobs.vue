<template>
  <div class='outer-subject-wrapper'>
    <div class='inner-subject-wrapper clearfix' >
      <common-left></common-left>
      <m-article 
        :contentData='jobsContent' 
        :subject='subject'
        
      ></m-article>
    </div>
  </div>
</template>

<script>
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import MArticle from 'src/base/m-article/m-article.vue'

  import {getJobs} from 'src/api/getjobs.js'

  export default {
    data () {
      return {
        jobsContent: [],
        subject: 'jobs'
      };
    },
    created () {
      this._getJobs();
    },
    // test
    mounted () {
      // $.scrollTo('.outer-subject-wrapper',500);
      
       window.addEventListener('scroll',() => {
      });

    }, 
    methods: {
      _getJobs () {
        var _this = this;
        getJobs().then(function (response) {
          _this.jobsContent = response.data;
          // console.log(_this.jobsContent);
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