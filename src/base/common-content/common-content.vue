<template>
  <div class='common-content'>
    <h3>{{queryTitle}}</h3>
    <div class='news-list'>
      <ul>
        <li 
          v-for='(newsItem, index) in subjectContent' 
          @click='_selectItem(newsItem,index)'
        >
            <span>{{newsItem.title}}</span>
            <span>{{newsItem.publicDate}}</span>
        </li>
      </ul>
    </div>
    <div class='page-info'>
      <span>共{{pageCount}}页</span>
      <span>第{{curPage}}页</span>
      <span @click='selectPage(0+1)'>首页</span>
      <span @click='firstFlag && selectPage(curPage-1)' ref='firstPage'>上一页</span>
      <span 
        v-for='(item, index) in pageCount'
        @click='selectPage(index+1)'
      >{{index  + 1}}</span>
      <span @click='lastFlag && selectPage(curPage+1)' ref='lastPage'>下一页</span>
      <span @click='selectPage(pageCount)'>尾页</span>
      <span>转到第</span>
      <select @change='selectPage(selected)' v-model='selected'>
        <option v-for='(item, index) in pageCount' 
        :value='index + 1'>{{index  + 1}}</option>
      </select>
      <span>页</span>

    </div>
  </div>
</template>

<script>
  // 根据父元素传递过来的数据请求对应的数据 比如父元素传递过来news 就请求news的内容

  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        selected: '',
        curPage: 0,
        firstFlag: false,
        lastFlag: true
      };
    },
    props: {
      queryTitle: {
        type: String,
        default: ''
      },
      originCurPage: {
        type: Number,
        default: 1
      },
      pageCount: {
        type: Number,
        default: 1
      },
      subjectCount: {
        type: Number,
        default: 0
      },
      subjectContent: {
        type: Array,
        default: []
      }
    },
    methods: {
      ...mapActions([
        'selectItem'
      ]),
      selectPage (selected) {
        // 改变当前页 由watch监控当前页
        this.curPage = selected;
        this.selected = selected;
        // console.log('curpage', this.curPage);
        // 如果已经是第一页 点击上一页显示灰色 并且点击的时候返回空

      },
      _selectItem (item, index) {
        var _this = this;
        console.log(item, index);
        this.$router.push({
          path: `/${this.queryTitle}/${item._id}`
        });
        // 然后把此item的写入vuex 子路由组件detail通过vuex读取
        this.selectItem({item, index});
      }
    },
    created () {
      this.curPage = this.originCurPage;
      this.selected= this.originCurPage;

    },
    watch: {
      curPage (val) {

        val === 1? this.firstFlag = false: this.firstFlag = true;
        val === this.pageCount? this.lastFlag = false: this.lastFlag = true;

        // console.log('val: ', val, 'firstFlag:', this.firstFlag, 'lastFlag:', this.lastFlag, 'this.pageCount:', this.pageCount);

        // console.log('curpage change:', val);
        if (val >= 1 && val <= this.pageCount) {
          this.$emit('curPageChange', this.curPage);
        } else {
          return;
        }
        
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .common-content
    width: 70%
    float: right

</style>