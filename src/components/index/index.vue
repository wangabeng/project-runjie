<template>
  <div class='index-wrapper'>
    <div class='title-wrapper' ref='titleWrapper'> <!-- 100% 相对定位-->
      <div class='move-wrapper' ref='moveWrapper'> <!-- 200% 绝对定位  不显示滚动条-->
        <h3> <!-- 50% 浮动-->
          {{newsTitle[currentIndex]}}
        </h3>
        <h3> <!-- 50% 浮动-->
          {{newsTitle[currentIndex + 1]}}
        </h3>      
      </div>
    </div>

  </div>
</template>

<script>
  import addP from 'src/api/addp.js'

  export default {
    data () {
      return {
        allNews: [],
        currentIndex: 0
      };
    },
    computed: {
      newsTitle () {
        var titleArr = [];
        for (var i = 0; i < this.allNews.length; i++) {
          titleArr.push(this.allNews[i].title);
        }
        return titleArr;
      }
    },
    created () {
      // console.log(addP);
      this.request();
      this.autoBroadcast();
    },
    methods: {
      // 发送ajax请求新闻内容
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
      },
      // 新闻轮播
      autoBroadcast () {
        var _this = this;
        clearInterval(timer);
        var timer= setInterval(() => {
          // console.log(_this.$refs.moveWrapper);
          $(_this.$refs.moveWrapper).animate({
            left: '-100px'
          }, 100);
        }, 1500);
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

    .title-wrapper
      position: relative
      left: 0;
      top: 0;
      width: 100%
      -overflow: hidden

      .move-wrapper
        width: 200%
        position: absolute

        h3
          width: 50%
          float: left

</style>