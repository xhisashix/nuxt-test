<template lang="pug">
.top-main
  .main-mv
    img(src="image/top/main.png" alt="altText")
    .main-text
      p eLogs
</template>
<script>
export default {}
</script>
<style lang="stylus">
.top-main
  .main-mv
    position: relative
    img
      width: 100%
      height: auto
    .main-text
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      top 0
      left 0
      width: 100%
      height: 100%
    p
      font-size rem(128px)
      font-family: 'Pinyon Script', cursive;
      font-weight bold
      +bp(md)
        font-size rem(72px)
</style>
