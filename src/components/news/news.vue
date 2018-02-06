<template>
  <div class='outer-news-wrapper'>
    <div class='inner-news-wrapper clearfix'>
      <common-left></common-left>
      <common-content 
        v-if='pageCount' 
        :queryTitle='queryTitle' 
        :queryTitleCn='queryTitleCn' 
        :originCurPage='originCurPage'
        :pageCount='pageCount'  
        :subjectCount='newsCount' 
        :subjectContent='news' 
        @curPageChange='curPageChange'
      ></common-content><!-- 给子元素传递requestTitle news -->
      
      <router-view/><!-- detail组件 -->
    </div>
  </div>
</template>

<script>
  // 导入组件
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import CommonContent from 'src/base/common-content/common-content.vue'
  import {PAGECAPACITY} from 'src/api/config.js'

  // 导入api
  import {getNews, getNewsCount} from 'src/api/getnews.js'

  export default {
    data () {
      return {
        queryTitle: 'news',
        queryTitleCn: '新闻',
        news:[],
        newsCount: 0,
        pageCount: null, // 由ajax请求获取 默认为空
        originCurPage: 1
      };
    },
    components: {
      CommonLeft,
      CommonContent
    },
    created () {
      // 请求一共有多少页
      // 请求当前页的内容 默认是第一页的内容
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
        }).catch(function (error) {
          console.log(error);
        });
      },
      _getNewsCount () {
        var _this = this;
        getNewsCount().then(function (response) {
          // 获取到新闻列表 是个数组
          _this.newsCount = response.data;
          // 然后计算出总页数
          _this.pageCount = Math.floor(_this.newsCount / PAGECAPACITY);
        }).catch(function (error) {
          console.log(error);
        });
      },
      curPageChange (curPage) {
        console.log('父元素监听到:', curPage);
        // 监听到请求的数据curPage
        // 重新发送ajax请求当前的新闻数据 自动通过props传递给子元素
        this._getNews(curPage);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .outer-news-wrapper
    width: 100%
    overflow: hidden
  .inner-news-wrapper
    width: 170%

</style>