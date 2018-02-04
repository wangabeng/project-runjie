<template>
  <div class='common-content'>
    <div class='page-info'>
      <span>共{{subjectCount}}页</span>
      <span>第{{curPage}}页</span>
      <span @click='selectPage(0+1)'>首页</span>
      <span @click='selectPage(curPage-1)' ref='firstPage'>上一页</span>
      <span 
        v-for='(item, index) in subjectContent.length'
        @click='selectPage(index+1)'
      >{{index  + 1}}</span>
      <span @click='selectPage(curPage+1)' ref='lastPage'>下一页</span>
      <span @click='selectPage(subjectContent.length)'>尾页</span>
      <span>转到第</span>
      <select @change='selectPage(selected)' v-model='selected'>
        <option v-for='(item, index) in subjectContent.length' 
        :value='index + 1'>{{index  + 1}}</option>
      </select>
      <span>页</span>selected{{selected}}

    </div>
  </div>
</template>

<script>
  // 根据父元素传递过来的数据请求对应的数据 比如父元素传递过来news 就请求news的内容

  export default {
    data () {
      return {
        selected: '',
        curPage: 0
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
      selectPage (selected) {
        // 改变当前页 并发出ajax请求 
        this.curPage = selected;
        this.selected = selected;
        // console.log('curpage', this.curPage);
        // 如果已经是第一页 点击上一页显示灰色 并且点击的时候返回空

      }
    },
    created () {
      this.curPage = this.originCurPage;
      this.selected= this.originCurPage;

    },
    watch: {
      curPage (val) {
        console.log('curpage change:', val);
        this.$emit('curPageChange', this.curPage);
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .common-content
    width: 70%
    float: right
    height: 1500px

</style>