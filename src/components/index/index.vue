<template>
  <div class='index-wrapper'>
    <div class='title-wrapper ' ref='titleWrapper'> <!-- 100%  不显示滚动条-->
      <div class='move-wrapper clearfix' ref='moveWrapper'> <!-- 200% 相对定位  -->
        <div class='move-content clearfix'> <!-- 50% 浮动-->
          <h3 class='bord-left'>认证资讯</h3>
          <h3 class='bord-center'> <!-- 50% 浮动-->
            {{newsTitle[currentIndex % newsTitle.length]}}
          </h3>
          <input class='bord-right' type='button' value='了解更多'>
        </div>
        <div class='move-content clearfix'> <!-- 50% 浮动-->
          <h3 class='bord-left'>咨询</h3>
          <h3 class='bord-center'> <!-- 50% 浮动-->
            {{newsTitle[(currentIndex + 1) % newsTitle.length]}}
          </h3>
          <input class='bord-right' type='button' value='了解更多'>
        </div>
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
        currentIndex: 0,
        curWidth: '',
        index: 0
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
      this.request();
    },
    mounted () {
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
          this.index++;
          this.currentIndex++;
          this.getWidth();
          this.$refs.moveWrapper.style.left = '0';
          $(_this.$refs.moveWrapper).animate({
            left: _this.curWidth
          }, {
            easing: 'swing'
          }, 3500);
        }, 5000);
      },
      // 实时计算显示区宽度
      getWidth () {
        this.curWidth = '-' + this.$refs.titleWrapper.clientWidth + 'px';
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .index-wrapper
    width: 100%
    height: 50px
    padding: 19px 0
    background-color: $color-background-blue

    .title-wrapper
      width: 100%
      overflow: hidden

      .move-wrapper
        width: 200%
        position: relative
        left: 0;
        top: 0;
        .move-content
          width: 50%
          float: left

          .bord-left
            widht: 20%
            float: left
            line-height: 50px
            height: 50px
            margin-left: 5%
            padding-right: 2%
            border-right: 1px solid $color-text-white
            color: $color-text-white
          .bord-center
            width: 50%
            float: left
            line-height: 50px
            height: 50px
            margin-left: 2%
            color: $color-text-white
          .bord-right
            float: right
            margin-right: 5%
            color: $color-text-white
            background-color: $color-background-blue
            border: 1px solid $color-text-white
            padding: 0 40px
            margin-top: 4px
            height: 40px
            line-height: 40px
            border-radius: 40px
  
  @media (max-width: 768px)
    .index-wrapper
      width: 100%
      height: auto

      .title-wrapper
        width: 100%

        .move-wrapper
          width: 200%
          position: relative
          left: 0;
          top: 0;
          .move-content
            width: 50%
            float: left

            .bord-left
              float: none
              line-height: 50px
              height: 50px
              color: $color-text-white
              text-align: center
              margin: 0 auto
              border: none
            .bord-center
              width: 100%
              float: none
              line-height: 50px
              height: 50px
              color: $color-text-white
              text-align: center
              margin: 0
            .bord-right
              float: none
              color: $color-text-white
              background-color: $color-background-blue
              border: 1px solid $color-text-white
              height: 40px
              line-height: 40px
              border-radius: 40px
              margin: 0 auto
              display: block

</style>