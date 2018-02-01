<template>
  <div class='index-wrapper'>
    <broad></broad>
    <field></field>
  </div>
</template>

<script>
  import Broad from 'components/broad/broad.vue'
  import Field from 'components/field/field.vue'

  export default {
    data () {
      return {
      };
    },
    components: {
      Broad,
      Field
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  

</style>