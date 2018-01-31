<template>
  <div class='index-wrapper'>
    <div>
      <p>this is index{{allNews}}{{good}}</p>
      
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        allNews: [],
        good: '66'
      };
    },
    created () {
      this.request();
    },
    methods: {
      request () {
        var _this = this;
        this.$root.$http.get('http://localhost:3002/find', {
          params: {
            contentName: 'news'
          }        
        }).then(function (response) {
          console.log(response.data);
          _this.allNews = response.data;
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .index-wrapper
    width: 100%
    height: 88px
    background-color: $color-background-blue

</style>