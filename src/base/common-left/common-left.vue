<template>
  <div class='common-left'>
    <div class='service'>
      <h3>服务项目</h3>
      <ul>
        <li
          v-for='(item, index) in serviceList'
        >{{item.title}}</li>
      </ul>
    </div>
    <div class='service'></div>
  </div>
</template>

<script>
  import {getService, getServiceCount} from 'src/api/getservice.js'

  // 定义查询当前页是第一页 每页容量为1000条
  const CURPAGE = 1
  const PAGECAPACITY = 1000 // 如果不传 默认是在config中设置的PAGECAPACITY=6

  export default {
    data () {
      return {
        serviceList: []
      };
    },
    created () {
      // 发送ajax请求 请求case service数据
      this._getService(CURPAGE, PAGECAPACITY);
    },
    methods: {
      _getService (curPage, pageCapacity) {
        var _this = this;
        getService(curPage, pageCapacity).then(function (response) {
          _this.serviceList = response.data;
          // console.log(_this.serviceList); 取到数据
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .common-left
    width: 17.64705882%
    background: blue
    float:left
    height: 200px

</style>