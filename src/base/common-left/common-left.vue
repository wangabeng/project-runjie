<template>
  <div class='common-left'>
    <common-left-component :subject='service'></common-left-component>
    <common-left-component :subject='cases' class='bottom'></common-left-component>
  </div>
</template>

<script>
  import CommonLeftComponent from 'src/base/common-left-component/common-left-component.vue'

  export default {
    data () {
      return {
        service: 'service',
        cases: 'case'
      };
    },
    components: {
      CommonLeftComponent
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'

  .common-left
    width: 17.64705882%
    background: $color-background-light
    float:left

    .bottom
      border-top: 1px solid $color-background-blue-pure
</style>