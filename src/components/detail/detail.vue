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
            >上一条：{{preTitle}}</span>
          </div>
          <div>
            <span 
              @click='curIndex!=(curPageArr.length-1) && _toggleItem(curIndex+1)'
              :class='{"unactive":curIndex===curPageArr.length-1}'
            >下一条：{{nextTitle}}
            </span>
          </div>
          <div>
            <span @click='closeBack'>关闭此条</span>
          </div>
          <div>
            <span @click='closeBack'>查看更多</span>
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

  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    created () {
      // console.log('created');
      // 路由组件创建时让父组件不可见
      this.$root.eventBus.$emit('ifVisiable', false);
    },
    updated () {
      // 路由组件创建时让父组件不可见
      this.$root.eventBus.$emit('ifVisiable', false);
    },
    destroyed () {
      // 此时该组件销毁 让父组件可见
      // console.log('desctroyed1');
      // 路由组件销毁时让父组件可见
      this.$root.eventBus.$emit('ifVisiable', true);

      // 关闭eventbus
      this.$root.eventBus.$off('ifVisiable');
    },
    computed: {
      ...mapGetters([
        'curItem',
        'curIndex',
        'curPageArr',
        'navShow',
        'changeSubject'
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
        'toggleItem'
      ]),
      _toggleItem (index) {
        // 切换当天item 改写vuex
        // console.log('改写：', index);
        var item = this.curPageArr[index];
        // var curPageArr = this.curPageArr;
        this.toggleItem({item, index});
      },
      closeBack () {
        console.log('this.$route', this.$router);
        this.$router.back();
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
    -background: white

    &.detail-anim-enter, &.detail-anim-leave-to
      transform: translate3d(100%, 0, 0)
    &.detail-anim-enter-active, &.detail-anim-leave-active
      transition-duration: 0.3s
      transition-timing-function: ease-in-out

    .content-wrapper
      padding-left: 3%
      padding-right: 3%
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