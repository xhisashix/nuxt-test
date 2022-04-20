<template lang="pug">
.ui-top-title
  h2(v-html="title")
  .line
  p(v-html="subTitle")
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
.ui-top-title
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  h2
    font-size rem(48px)
    line-height: rem(52px)
    font-family-Robot()
    font-weight bold
  .line
    width: 150px
    height: 1px
    background #000
    margin 8px 0
  p
    font-family-NotoSans()
    font-size rem(32px)
    line-height: rem(40px)
</style>
