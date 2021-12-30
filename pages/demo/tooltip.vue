<template lang="pug">
.page-tooltip
  button(v-tooltip.auto="'TOPにメッセージが表示されます'") TOP
</template>
<script>
export default {}
</script>
<style lang="stylus">
.page-tooltip
  max-width 960px
  margin 0 auto
  margin-top 30px
  button
    box-sizing: border-box
    width 270px
    height 50px
    border-radius 5px
    background: main-color
</style>
