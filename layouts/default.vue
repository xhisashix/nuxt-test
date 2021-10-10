<template lang="pug">
  div
    Header(ref="reference")
    .nuxt
      Nuxt
</template>

<script>
export default {}
</script>

<style lang="stylus">
div
  .nuxt
    max-width 1280px
    margin 0 auto
h1
  border-left 3px solid main-color
  padding-left 15px
  box-sizing border-box
  font-size rem(24px)
  line-height rem(32px)
  margin-bottom 30px
</style>
