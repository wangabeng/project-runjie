<template>
  <transition name='detail-anim'>
    <div class='detail-wrapper'>
      <div class='content-wrapper'>
        <h2>{{curItem.title}}</h2>
        <div class='article-note'>
          <span>发布日期</span>
          <span>{{curItem.publicDate}}</span>
          <span>阅读</span>
          <span>{{curItem.pageView}}</span>
        </div>
        <div class='content-txt' v-html='contentTxt'></div>
        <div class='item-toggle'>
          <div>
            <span 
              @click='curIndex!=0 && _toggleItem(curIndex-1)'
              :class='{"unactive":curIndex===0}'
              class='add-link'
            >上一条：{{preTitle}}</span>
          </div>
          <div>
            <span 
              @click='curIndex!=(curPageArr.length-1) && _toggleItem(curIndex+1)'
              :class='{"unactive":curIndex===curPageArr.length-1}'
              class='add-link'
            >下一条：{{nextTitle}}
            </span>
          </div>
          <div>
            <span @click='closeBack' class='add-link'>关闭此条</span>
          </div>
          <div>
            <span @click='checkMore' class='add-link'>查看更多</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  // 导入组件
  import CommonLeft from 'src/base/common-left/common-left.vue'
  import CommonContent from 'src/base/common-content/common-content.vue'
  import {PAGECAPACITY} from 'src/api/config.js'
  import addP from 'src/common/js/addP.js'
  import getRouterPath from 'src/common/js/getpath.js'

  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        curPath: ''
      };
    },
    created () {
      this.curPath = getRouterPath(this.$route.path);
      // console.log(this.curPath);
    },
    updated () {
      // 路由组件创建时让父组件不可见

    },
    destroyed () {
      var _this = this;
      // 此时该组件销毁 让父组件可见
      this.toggleShowFlag({flag: true});
    },
    computed: {
      ...mapGetters([
        'curItem',
        'curIndex',
        'curPageArr',
        'navShow',
        'showFlag'
      ]),
      contentTxt () {
        return addP(this.curItem.txt);
      },
      preTitle () {
        return this.curIndex === 0? '没有了': this.curPageArr[this.curIndex - 1].title;
      },
      nextTitle () {
        return this.curIndex === this.curPageArr.length - 1? '没有了': this.curPageArr[this.curIndex + 1].title;
      },

    },
    methods: {
      ...mapActions([
        'toggleItem',
        'toggleShowFlag'
      ]),
      _toggleItem (index) {
        // 切换当天item 改写vuex
        // console.log('改写：', index);
        var item = this.curPageArr[index];
        // var curPageArr = this.curPageArr;
        this.toggleItem({item, index});
      },
      closeBack () {
        this.$router.back();
      },
      checkMore () {
        this.$router.push({
          path: `/${this.curPath}`
        });
      }
    } 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .detail-wrapper
    width: 41.17647059%
    float: left
    position: relative
    left: -41.17647059%
    color: $color-text-black
    background: $color-background

    &.detail-anim-enter, &.detail-anim-leave-to
      transform: translate3d(100%, 0, 0)
    &.detail-anim-enter-active, &.detail-anim-leave-active
      transition-duration: 0.3s
      transition-timing-function: ease-in-out

    .content-wrapper
      padding-left: 4%
      padding-right: 52px
      padding-bottom: 60px
      h2
        font-size: $font-size-large-x
        padding-top: 40px
        padding-bottom: 30px
      .article-note
        font-size: $font-size-small
        color: $color-text-basic
        padding-bottom: 15px
      .content-txt /* 若要子元素生效 需要去掉父组件detail组件的scoped属性 */
        p
          color: $color-text-black
          font-size: $font-size-medium
          font-weight: 400
          line-height: 1.5em
          padding-top: 10px
      .item-toggle
        padding-top: 40px
        padding-bottom: 30px
        div
          padding-top: 8px
          span
            font-size: $font-size-small
            color: $color-text-basic
            &.unactive
              color: $color-text-unactive
        
</style>