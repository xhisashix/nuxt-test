<template lang="pug">
.hum_menu_area
  .hum_btn(@click="isOpen")
    .btn
  .hum_menu(v-show="isShow")
    .menu
      ul
        li テスト
        li テスト
        li テスト
        li テスト
        li テスト
        li テスト
        li テスト
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods:{
    isOpen(){
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="stylus">
.hum_menu_area
  .hum_btn
    width: 30px
    height: 30px
    z-index 100
    .btn
      width: 30px
      height: 4px
      border-radius: 100vh
      background: color-base
      position: relative
      &::before, &::after
        width: 30px
        height: 4px
        border-radius: 100vh
        background: color-base
        content ''
        position: absolute
        top 10px
        left: 0
      &::after
        top 20px
  .hum_menu
    width: 100vw
    height: 100vh
    position: fixed
    top 70px
    left: 0
    background: rgba(0 0 0 0.7)
    z-index 100
    .menu
      width: 70vw
      height: 100vh
      background: #fff
      position: absolute
      top 0
      right: 0
</style>
