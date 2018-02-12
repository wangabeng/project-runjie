<template>
  <div class='field-wrapper'>
    <h2>业务领域</h2>
    <div class='list-wrapper'>
      <ul class='clearfix'>
        <li>
          <img src='./img/9001.png'>
          <h3>体系认证咨询</h3>
          <p>ISO9000、ISO14000、ISO20000等质量管理体系</p>
          <input class='more' type='button' value='了解更多'>
        </li>
        <li>
          <img src='./img/14000.png'>
          <h3>国内认证咨询</h3>
          <p>中国环境标志产品认证咨询服务、绿色食品认证咨询服务等</p>
          <input class='more' type='button' value='了解更多'>
        </li>
        <li>
          <img src='./img/18001.png'>
          <h3>安全、消防管理及技术</h3>
          <p>安全评价、安全生产标准化咨询服务， 职业卫生技术服务。</p>
          <input class='more' type='button' value='了解更多'>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
      };
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  
  .field-wrapper
    padding-bottom: 20px
    h2
      color: $color-text-basic
      text-align: center
      padding: 80px 0 20px 0
      font-weight: 700
    .list-wrapper
      li
        width: 27.33%
        float: left
        text-align: center
        padding: 10px 3%
        img
          height: 60px
        h3
          color: $color-text-basic
          padding-top: 10px
          font-weight: bold
          font-size: $font-size-medium
        p
          color: $color-text-basic
          padding-top: 20px
          padding-bottom: 25px
          font-size: $font-size-medium
          line-height: 25px
        input
          color: $color-text-green
          border: 1px solid $color-text-green
          padding-left: 10%
          padding-right: 10%
          height: 30px
          line-height: 30px
          background-color: $color-background
          border-radius: 30px
          font-size: $font-size-medium
  
  @media (max-width: 920px)
    .field-wrapper
      padding-bottom: 20px
      h2
        color: $color-text-basic
        text-align: center
        padding: 80px 0 20px 0
        font-weight: 700
      .list-wrapper
        li
          width: 94%
          text-align: center
          padding: 20px 3%
          img
            height: 60px
          h3
            color: $color-text-basic
            padding-top: 10px
            font-weight: bold
            font-size: $font-size-medium
          p
            color: $color-text-basic
            padding-top: 20px
            padding-bottom: 25px
            font-size: $font-size-medium
          input
            color: $color-text-green
            border: 1px solid $color-text-green
            padding-left: 10%
            padding-right: 10%
            height: 30px
            line-height: 30px
            background-color: $color-background
            border-radius: 30px
            font-size: $font-size-medium
</style>