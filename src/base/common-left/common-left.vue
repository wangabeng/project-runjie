<template>
  <div class='common-left' v-if='serviceList'>
    <div class='service'>
      <h3>服务项目</h3>
      <ul>
        <li
          v-for='(item, index) in serviceList'
          @click='_selectItem(item, index, serviceList)'
        >{{item.title}}</li>
      </ul>
    </div>
    <div class='service'></div>
  </div>
</template>

<script>
  import {getService, getServiceCount} from 'src/api/getservice.js'
  import {mapActions} from 'vuex'
  import getRouterPath from 'src/common/js/getpath.js'

  // 定义查询当前页是第一页 每页容量为1000条
  const CURPAGE = 1
  const PAGECAPACITY = 1000 // 如果不传 默认是在config中设置的PAGECAPACITY=6

  const SERVICE = 'service'
  const CASE = 'case'

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
      ...mapActions([
        'selectItem'
      ]),
      _getService (curPage, pageCapacity) {
        var _this = this;
        getService(curPage, pageCapacity).then(function (response) {
          _this.serviceList = response.data;
          // console.log(_this.serviceList); //取到数据
        }).catch(function (error) {
          console.log(error);
        });
      },
      _selectItem (item, index, contArr) {
        var _this = this; 
        // 记录路由跳转前路径
        var beforePath = getRouterPath(this.$route.path);

        // 对比路由变化 比如 如果在news路由页面 /news
        // 点击此条目后 路由变为 /service/5a6d7cbb84d166a57b200475
        // 如果前后一级路由不一致 先改变当前一级路由 
        if (beforePath!==SERVICE) {
          console.log('不相等');
          this.$root.eventBus.$emit('changeSubject', SERVICE);
        }

        // 路由跳转
        this.$router.push({
          path: `/${SERVICE}/${item._id}`
        });
        
        // 改写vuex的数据 改写当前页 当前数据数组 当前index
        this.selectItem({item, index, contArr});

        // 让common-content组件不显示
        this.$root.eventBus.$emit('ifVisiable', false);
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

</style>