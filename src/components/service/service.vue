<template>
  <div class='outer-subject-wrapper' >
    <div class='inner-subject-wrapper clearfix'>
      <common-left></common-left>
      <common-content 
        v-if='pageCount' 
        :queryTitle='queryTitle' 
        :queryTitleCn='queryTitleCn' 
        :originCurPage='originCurPage'
        :pageCount='pageCount'  
        :subjectCount='serviceCount' 
        :subjectContent='service' 
        @curPageChange='curPageChange'
        
      ></common-content><!-- 给子元素传递requestTitle '如news' -->
      
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
  import {getService, getServiceCount} from 'src/api/getservice.js'

  export default {
    data () {
      return {
        queryTitle: 'service',
        queryTitleCn: '服务项目',
        service:[],
        serviceCount: 0,
        pageCount: null, // 由ajax请求获取 默认为空
        originCurPage: 1,
      };
    },
    components: {
      CommonLeft,
      CommonContent
    },
    created () {
      // 请求一共有多少页
      // 请求当前页的内容 默认是第一页的内容
      this._getServiceCount();
      this._getService(this.curPage);
      // 然后把以上数据传给子元素
    },
    methods: {
      _getService (curPage) {
        var _this = this;
        getService(curPage).then(function (response) {
          // 获取到新闻列表 是个数组
          _this.service = response.data;
        }).catch(function (error) {
          console.log(error);
        });
      },
      _getServiceCount () {
        var _this = this;
        getServiceCount().then(function (response) {
          // 获取到新闻列表 是个数组
          _this.serviceCount = response.data;
          // 然后计算出总页数
          _this.pageCount = Math.ceil(_this.serviceCount / PAGECAPACITY);
        }).catch(function (error) {
          console.log(error);
        });
      },
      curPageChange (curPage) {
        // console.log('父元素监听到:', curPage);
        // 监听到请求的数据curPage
        // 重新发送ajax请求当前的新闻数据 自动通过props传递给子元素
        this._getService(curPage);
      },

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .outer-subject-wrapper
    width: 100%
    -overflow: hidden
  .inner-subject-wrapper
    width: 170%



</style>