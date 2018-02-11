<template>
  <div class='article-wrapper' v-if='contentData.length>0'>
    <div class='content-wrapper'>
      <h2>{{contentData[0].corporationName}}</h2>
      <div class='content-txt' v-html='contTxt'></div>
      <div class='contact-msg'>
        <p>地址：湖北省襄阳市XXXX</p>
        <p>电话：0710 xxxxxxx</p>
      </div>
    </div>
  </div>
</template>

<script>
  import addP from 'src/common/js/addP.js'

  export default {
    props: {
      subject: {
        type: String,
        default: ''
      },
      contentData: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        contTxt: ''
      };
    },
    created () {
    },
    mounted () {
    },
    updated () {
    },
    watch: {
      contentData () {
        this.contTxt = addP(this.contentData[0].aboutUs);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .article-wrapper
    width: 41.17647059%
    float: left
    color: $color-text-black

    .content-wrapper
      padding-left: 4%
      padding-right: 3%
      padding-bottom: 60px
      h2
        font-size: $font-size-large-x
        padding-top: 40px
        padding-bottom: 30px
      .content-txt /* 若要子元素生效 需要去掉父组件article组件的scoped属性 */
        p
          color: $color-text-black
          font-size: $font-size-medium
          font-weight: 400
          line-height: 1.8em
          padding-top: 10px
      .contact-msg
        padding-top: 40px
        padding-bottom: 50px
        p
          color: $color-text-black
          font-size: $font-size-medium
          font-weight: 600
          line-height: 1.5em
          padding-top: 10px    
        
</style>