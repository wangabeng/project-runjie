<template>
  <div class='news-wrapper clearfix'>
    <common-left></common-left>
    <common-content 
      :queryTitle='queryTitle' 
      :originCurPage='originCurPage' 
      :subjectCount='newsCount' 
      :subjectContent='news'
      @curPageChange='curPageChange'
    ></common-content><!-- 给子元素传递requestTitle news -->
    <div class='test'>
    </div>
  </div>
</template>

<script>
  // 导入组件
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import CommonContent from 'src/base/common-content/common-content.vue'

  // 导入api
  import {getNews, getNewsCount} from 'src/api/getnews.js'

  export default {
    data () {
      return {
        queryTitle: 'news',
        news:[],
        newsCount: 0,
        originCurPage: 2
      };
    },
    components: {
      CommonLeft,
      CommonContent
    },
    created () {
      // 请求一共有多少页
      // 请求当前页的内容 默认是第一页的内容
      var _this = this;
      this._getNewsCount();
      this._getNews(this.curPage);
      // 然后把以上数据传给子元素
    },
    methods: {
      _getNews (curPage) {
        var _this = this;
        getNews(curPage).then(function (response) {
          // 获取到新闻列表 是个数组
          _this.news = response.data;
          console.log('all news:',response.data);
        }).catch(function (error) {
          console.log(error);
        });
      },
      _getNewsCount () {
        var _this = this;
        getNewsCount(this.curPage).then(function (response) {
          // 获取到新闻列表 是个数组
          _this.newsCount = response.data;
          console.log('count',response.data);
        }).catch(function (error) {
          console.log(error);
        });
      },
      curPageChange (curPage) {
        console.log('父元素监听到:', curPage);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .news-wrapper
    width: 100%

</style>