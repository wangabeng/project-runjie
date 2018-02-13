<template>
  <div class='broad-wrapper'>
    <div class='title-wrapper ' ref='titleWrapper'> <!-- 100%  不显示滚动条-->
      <div class='move-wrapper clearfix' ref='moveWrapper'> <!-- 200% 相对定位  -->
        <div 
          class='move-content clearfix' 
          @mouseover='stopBroad'
          @mouseout='restartBroad'
        > <!-- 50% 浮动-->
          <h3 class='bord-left'>资讯</h3>
          <h3 class='bord-center add-link' @click='_selectItem'> <!-- 50% 浮动-->
            {{newsTitle[currentIndex % newsTitle.length]}}
          </h3>
          <input class='bord-right add-link' type='button' value='了解更多' @click='checkMore'>
        </div>
        <div 
          class='move-content clearfix'
          @mouseover='stopBroad'
          @mouseout='restartBroad'

        > <!-- 50% 浮动-->
          <h3 class='bord-left'>资讯</h3>
          <h3 class='bord-center add-link' @click='_selectItem'> <!-- 50% 浮动-->
            {{newsTitle[(currentIndex + 1) % newsTitle.length]}}
          </h3>
          <input class='bord-right add-link' type='button' value='了解更多' @click='checkMore'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import addP from 'common/js/addP.js'
  import {getNews} from 'src/api/getnews.js'

  import Field from 'components/field/field.vue'
  import {mapActions} from 'vuex'

  // 定义查询当前页是第一页 每页容量为1000条
  const CURPAGE = 1
  const PAGECAPACITY = 18 // 如果不传 默认是在config中设置的PAGECAPACITY=6

  export default {
    data () {
      return {
        allNews: [],
        currentIndex: 0,
        curWidth: '',
        index: 0,
        timer: null,
        suject: 'news'
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
      this._getNews(CURPAGE, PAGECAPACITY);
    },
    mounted () {
      this.autoBroadcast();
    },
    destroyed () {
      clearInterval(this.timer);
    },
    methods: {
      ...mapActions([
        'toggleShowFlag',
        'selectItem'
      ]),
      // 发送ajax请求新闻内容
      _getNews (curPage, pageCapacity) {
        var _this = this;
        getNews(curPage, pageCapacity).then(function (response) {
          // console.log(response);
          _this.allNews = response.data;
        }).catch(function (error) {
          console.log(error);
        });
      },
      // 新闻轮播
      autoBroadcast () {
        var _this = this;
        clearInterval(this.timer);
        this.timer= setInterval(() => {
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
      },
      // 鼠标移入 停止滚动
      stopBroad () {
        clearInterval(this.timer);
        // console.log('stop currentIndex', this.currentIndex);
      },
      // 鼠标移开 继续滚动
      restartBroad () {
        this.autoBroadcast();
        // console.log('start');
      },
      _selectItem (){
        var contArr = this.allNews;
        var index = this.currentIndex;
        var item = contArr[index];

        this.$router.push({
          path: `/news/${item._id}`
        });
        // 然后把此item的写入vuex 子路由组件detail通过vuex读取
        this.selectItem({item, index, contArr});

        // 点击时候 设置隐藏
        this.toggleShowFlag({flag: false});
      },
      // 查看更多
      checkMore () {
        this.$router.push({
          path: `/news`
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  
  .broad-wrapper
    font-size: $font-size-medium
    width: 100%
    height: 50px
    padding: 19px 0
    background-color: $color-background-blue
    margin-top:1px

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
  
  @media (max-width: 920px)
    .broad-wrapper
      width: 100%
      height: auto
      background-color: $color-background-blue

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
              padding-right: 0
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