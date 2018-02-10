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
  import {mapGetters} from 'vuex'
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
    updated () {

    },
    destroyed () {
      var flag = false;
      this.changeSubject({flag});
    },
    watch: {
      $route(){
        // console.log("测试路由改变");

      }
    },
    methods: {
      ...mapActions([
        'selectItem',
        'changeSubject'
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

        // 路由跳转
        this.$router.push({
          path: `/${SERVICE}/${item._id}`
        });
        
        // 改写vuex的数据 改写当前页 当前数据数组 当前index ajax请求 异步
        this.selectItem({item, index, contArr});

        // 对比路由变化 比如 如果在news路由页面 /news
        // 点击此条目后 路由变为 /service/5a6d7cbb84d166a57b200475
        // 如果前后一级路由不一致 先改变当前一级路由 
        if (beforePath!==SERVICE) {
          console.log('不相等');
          // this.$root.eventBus.$emit('changeSubject', false); // 瞬间完成
          // 改变vuex的 changeSubject
          // true表示一级路由主题改变了
          var flag = true;
          _this.changeSubject({flag});
        }

        // 让common-content组件不显示 设置vuex数据是通过ajax请求 是异步的
        // 如果增加定时器 就可以成功让common-content隐藏 这里点击-1左侧item
        // 然后-2 $emit('ifVisiable', false) 这两个步骤是异步的

        // 解决思路： 
        // 1. 在getter的数据发生变化的时候 $emit('ifVisiable', false) 用watch监控 实验证明用监控也不可以 updated是生命周期中数据从无到有 而watch是从一个数据到另外一个数据 而不是从无到有。所以这样不可以解决。 
        // 2.所以这里用update监控数据变化 然后发送让common-content不显示的信息 $emit('ifVisiable', false) 这样也不可以 update是此路由组件 common-left的数据 他的数据很简单 几乎可以说在瞬间完成的 除非添加延时 但是这样很不优雅
        // 3. 第三种尝试 点击左侧的item后 当检测到一级路由发生变化的时候 发送一个数据给common-content 让他暂存起来 然后common-content数据得到后 即updated的时候，根据这个数据判断是否hidden.还是失败 原因如下：状态1 路由在新闻页 状态2 点击左侧服务条目 此次判断主路由发生变化 发送$emit('changeSubject', false)  此时common-content路由处于销毁前 监听到$emit('changeSubject', false) 然后common-coneten销毁 然后新的路由commont-content创建 具体过程见demo结果：
        // common-left.vue?8cc7:81 不相等
        // common-content.vue?a9ec:114 msg false
        // common-content.vue?a9ec:140 commomn destroyed
        // 以上阶段还是新闻页面路由的时候
        // 以下阶段是service路由的 common-content
        // common-content.vue?a9ec:137 commomn content update
        // common-content.vue?a9ec:119 common content created
        // common-content.vue?a9ec:137 commomn content update
        // common-content.vue?a9ec:137 commomn content update
        // 可以看到service路由状态的时候 common-content 已经没有接听到msg false数据了

        // 如果破解以上难题 只有用vuex了


        //如果增加延时问题暂时可以得到解决 但是不够优雅
        // setTimeout(() => {
           // this.$root.eventBus.$emit('ifVisiable', false);
        // }, 1000);
      }
    },
    computed: {
      ...mapGetters([
        'curPageArr'
      ])
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