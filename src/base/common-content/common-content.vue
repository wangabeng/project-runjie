<template>
  <div class='common-content' ref='commonContent'
    :class='{"if-visiable":!showFlag}'
  >
    <h3 class='title add-link'>{{queryTitleCn}}</h3>
    <div class='news-list'>
      <ul>
        <li class='clearfix add-link'
          v-for='(newsItem, index) in subjectContent' 
          @click='_selectItem(newsItem,index,subjectContent)'
        >
            <span class='title-content'>{{newsItem.title}}</span>
            <span class='title-date'>{{newsItem.publicDate}}</span>
        </li>
      </ul>
    </div>

    <div class='page-info'>
      <span>共{{pageCount}}页</span>
      <span>第{{curPage}}页</span>
      <span @click='selectPage(0+1)' :class='{"unactive": curPage===1}'>首页</span>
      <span @click='firstFlag && selectPage(curPage-1)' ref='firstPage' :class='{"unactive": curPage===1}'>上一页</span>
      <span :class='{"active-page": (index+1)===curPage}'
        v-for='(item, index) in pageCount'
        @click='selectPage(index+1)'
      >{{index  + 1}}</span>
      <span @click='lastFlag && selectPage(curPage+1)' ref='lastPage' :class='{"unactive": curPage===pageCount}'>下一页</span>
      <span @click='selectPage(pageCount)' :class='{"unactive": curPage===pageCount}'>尾页</span>
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
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        selected: '',
        curPage: 0,
        firstFlag: false,
        lastFlag: true,
        moveFlag: false,
        _queryTitle: {}
      };
    },
    props: {
      queryTitle: {
        type: String,
        default: ''
      },
      queryTitleCn: {
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
    computed: {
      ...mapGetters([
        'showFlag'
      ])
    },
    methods: {
      ...mapActions([
        'selectItem',
        'toggleShowFlag'
      ]),
      selectPage (selected) {
        // 改变当前页 由watch监控当前页
        this.curPage = selected;
        this.selected = selected;
        // console.log('curpage', this.curPage);
        // 如果已经是第一页 点击上一页显示灰色 并且点击的时候返回空

      },
      _selectItem (item, index, contArr) {
        var _this = this;
        // console.log(item, index);
        this.$router.push({
          path: `/${this.queryTitle}/${item.title}`
        });
        // 然后把此item的写入vuex 子路由组件detail通过vuex读取
        this.selectItem({item, index, contArr});

        // 点击时候 设置隐藏
        this.toggleShowFlag({flag: false});

      }
    },
    created () {
      var _this =this;
      this.curPage = this.originCurPage;
      this.selected= this.originCurPage;

      // console.log(' commomn content created showFlag:', this.showFlag);
    },
    mounted () {
    },
    updated () {
      var _this = this;
      // 实现列表页的隔行变色
      // created mounted updated生命周期 created是vue对象创建后 mounted是虚拟dom挂载后 updated是data加载后
      $('.news-list li:odd').addClass('odd-dark');

      // console.log('commomn content update');
    },
    destroyed () {
      // 销毁时候 设置隐藏
      this.toggleShowFlag({flag: false});
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
    width: 41.17647059%
    float: left
    position: relative

    &.if-visiable
      visibility: hidden

    .title
      margin-left: 1%
      margin-right: 1%
      margin-top: 10px
      padding-left: 1%
      font-size: $font-size-medium
      color: $color-text-blue
      font-weight: bold
      border-bottom: 1px dashed $color-text-basic
      line-height: 40px
      height: 40px

    .news-list
      margin-left: 0%
      margin-right: 0%
      ul
        li
          font-size: $font-size-medium
          color: $color-text-basic
          overflow: hidden
          height: 35px
          line-height: 35px
          margin-left: 2%
          margin-right: 52px
          min
          .title-content
            float: left
            width: 70%
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
          .title-date
            float: right
            width: 30%
            text-align: center
          &.odd-dark
            background-color: $color-background-light
          &:hover
            cursor: pointer  

    .page-info
      margin-left: 2%
      margin-right: 1%
      margin-top: 30px
      margin-bottom: 10px
      font-size: $font-size-medium
      color: $color-text-basic
      line-height: 30px

      span
        margin-right: 5px
        &.active-page
          font-weight: bold
        &.unactive
          color: $color-text-unactive  
      select
        font-size: $font-size-medium
        color: $color-text-basic
        &:hover
          cursor: pointer
        option
          font-size: $font-size-medium
          color: $color-text-basic
          &:hover
            cursor: pointer  
</style>