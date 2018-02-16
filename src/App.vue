<template>
  <div id="app">
    <m-header></m-header>
    <nav-bar></nav-bar>
    <poster-pic></poster-pic>
    <router-view/>
    <m-footer></m-footer>
    <contact-qq></contact-qq>
    <contact-msg></contact-msg>
  </div>
</template>

<script>
import MHeader from 'base/m-header/m-header.vue'
import NavBar from 'base/nav-bar/nav-bar.vue'
import PosterPic from 'base/poster-pic/poster-pic.vue'
import MFooter from 'base/m-footer/m-footer.vue'
import ContactQq from 'base/contact-qq/contact-qq.vue'
import ContactMsg from 'base/contact-msg/contact-msg.vue'

import updatePageView from 'src/api/updatepageview.js'
import getPath from 'common/js/getpath.js'

export default {
  name: 'App',
  components: {
    MHeader,
    NavBar,
    PosterPic,
    MFooter,
    ContactQq,
    ContactMsg
  },
  watch: {
    $route(){
      // console.log(this.$route.params.title, getPath(this.$route.path));
      var subject = getPath(this.$route.path);
      var title = this.$route.params.title;
      // console.log('subject, title', subject, title);
      if (title) {
        updatePageView(subject, title).then(function (response) {
          // console.log('response:', response);
        }).catch(function (error) {
          console.log(error);
        });      
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

</style>
