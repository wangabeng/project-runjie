<template>
  <div class='common-left-component' v-if='subjectList'>
    <div class='subject'>
      <h3>{{subjectCNname}}</h3>
      <ul>
        <li
          v-for='(item, index) in subjectList'
          @click='_selectItem(item, index, subjectList)'
        >{{item.title}}</li>
        <li>查看更多&nbsp;&nbsp;<i class="fa fa-chevron-right fa-1x"></i><i class="fa fa-chevron-right fa-1x"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getService, getServiceCount} from 'src/api/getservice.js'
  import {getCase, getCaseCount} from 'src/api/getcase.js'

  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  import getRouterPath from 'src/common/js/getpath.js'

  // 定义查询当前页是第一页 每页容量为1000条
  const CURPAGE = 1
  const PAGECAPACITY = 8 // 如果不传 默认是在config中设置的PAGECAPACITY=6


  export default {
    data () {
      return {
        subjectList: []
      };
    },
    props: {
      subject: {
        type: String,
        default: ''
      }
    },
    created () {
      // 发送ajax请求 请求case service数据
      if (this.subject === 'service') {
        this._getService(CURPAGE, PAGECAPACITY);
      } else if (this.subject === 'case') {
        this._getCase(CURPAGE, PAGECAPACITY);
      }
      
    },
    mounted () {
      // dom创建的时候 让中间部分显示（控制点1）
      this.toggleShowFlag({flag: true});
    },
    updated () {

    },
    destroyed () {
      this.$root.eventBus.$off('changeSubject');
    },
    watch: {
      $route(){
      }
    },
    methods: {
      ...mapActions([
        'selectItem',
        'toggleShowFlag'
      ]),
      _getService (curPage, pageCapacity) {
        var _this = this;
        getService(curPage, pageCapacity).then(function (response) {
          _this.subjectList = response.data;
          // console.log(_this.subjectList); //取到数据
        }).catch(function (error) {
          console.log(error);
        });
      },
      _getCase (curPage, pageCapacity) {
        var _this = this;
        getCase(curPage, pageCapacity).then(function (response) {
          _this.subjectList = response.data;
          // console.log(_this.subjectList); //取到数据
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
          path: `/${_this.subject}/${item._id}`
        });
        
        // 改写vuex的数据 改写当前页 当前数据数组 当前index ajax请求 异步
        this.selectItem({item, index, contArr});

        // 让中间部分隐藏 true表示显示 false隐藏 （控制点2）
        this.toggleShowFlag({flag: false});

        // 对比路由变化 比如 如果在news路由页面 /news
        // 点击此条目后 路由变为 /service/5a6d7cbb84d166a57b200475
        // 如果前后一级路由不一致 先改变当前一级路由 
        if (beforePath!==this.subject) {
          // console.log('不相等');
          // 改变vuex的 showFlag
          // true表示一级路由主题改变了 true的时候 common-content不显示
          // this.$root.eventBus.$emit('changeSubject', false); // 瞬间完成

          setTimeout(() => {
            this.toggleShowFlag({flag: false});
          },10);
        }

      }
    },
    computed: {
      ...mapGetters([
        'curPageArr'
      ]),
      subjectCNname () {
        if (this.subject === 'case') {
          return '成功案例';
        } else if (this.subject === 'service') {
          return '服务项目';
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .common-left-component
    -width: 17.64705882%
    background: $color-background-light
    float:left
    .subject
      padding-left: 4%
      padding-right: 4%
      padding-top: 15px
      padding-bottom: 15px
      h3
        line-height: 36px
        height: 36px
        border-bottom: 1px dashed $color-text-basic
        font-size: $font-size-medium
        color: $color-text-blue
        font-weight: bold
      ul
        li
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          line-height: 30px
          height: 30px
          font-size: $font-size-small
          color: $color-text-black
          i
            margin-left: -3px
            font-weight: normal

</style>