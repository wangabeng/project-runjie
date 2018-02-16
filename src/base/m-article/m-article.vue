<template>
  <div class='article-wrapper' >
    <!-- aboutus页面 -->
    <div class='content-wrapper' v-if='contentData.length>0 && subject==="aboutUs"'>
      <h2>{{contentData[0].corporationName}}</h2>
      <div class='content-txt' v-html='contTxt'></div>
      <div class='contact-msg'>
        <p>地址：湖北襄阳樊城高新区东风汽车大道锦绣天池A1-1-2206室</p>
        <p>联系人：周经理</p>
        <p>电话：0710-2354970</p>
      </div>
    </div>

    <!-- jobs页面 -->
    <div class='content-wrapper' v-if='contentData.length>0 && subject==="jobs"'>
      <h2>{{contentData[0].title}}</h2>
      <div class='content-txt' v-html='contTxt'></div>
    </div>

    <!-- sample页面 -->
    <div class='content-wrapper sample' v-if='contentData.length>0 && subject==="sample"'>
      <h3 class='sampleTitle'>证书样本</h3>
      <ul class='clearfix'>
        <li v-for='(item, index) in contentData'  >
          <div class='img-wrapper' 
            :class='{"first-img-wrapper": index===0, "last-img-wrapper": index===contentData.length-1}' 
          >
            <a :href='item.urlLink' target='_blank' title='查看大图'>
              <div>
                <img :src='item.urlLink'>
              </div>
              <h3>{{item.title}}</h3>
            </a>
          </div>
        </li>
      </ul>
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
        if (this.subject==="aboutUs") {
          this.contTxt = addP(this.contentData[0].aboutUs);
        } if (this.subject==="jobs") {
          this.contTxt = addP(this.contentData[0].content);
        }
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
      padding-right: 52px
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

  .sample
    .sampleTitle
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
    ul
      li
        float: left
        width: 50%
        text-align: left
        .img-wrapper
          padding: 20px 10%
          a
            font-size: 12px
            div
              width: 78%
              height: 0
              padding: 120% 0 0 0
              position: relative
              left: 0
              top: 0
              img
                width: 100%
                height: auto
                position: absolute
                left: 0
                top: 0
            h3
              color: $color-text-basic
              height: 3em

          &.first-img-wrapper
            a
              div
                img
                  top: 35% 

          &.last-img-wrapper
            a
              div
                img
                  top: 10%       
        
</style>