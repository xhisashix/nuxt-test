<template lang="pug">
.hum_menu_area
  .hum_btn(@click="isOpen" :class="{open : isShow}")
    .btn
  transition(name="fade")
    .hum_menu(v-show="isShow")
      .dummy_menu(@click="isOpen")
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
      isShow: false,
    }
  },
  methods: {
    isOpen() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style lang="stylus">
.hum_menu_area
  .hum_btn
    width: 30px
    height: 30px
    cursor pointer
    &.open
      .btn
        top 12px
        transform: rotate(45deg)
        &::before
          transform: rotate(-90deg)
          top 0px
        &::after
          content none
    .btn
      width: 30px
      height: 4px
      border-radius: 100vh
      background: color-base
      position: relative
      transition: .5s
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
    z-index 100
    .dummy_menu
      width: 30vw
      height: 100vh
      background: rgba(0 0 0 0.7)
      position: absolute
      top 0
      left 0
    .menu
      width: 70vw
      height: 100vh
      background: #fff
      position: absolute
      top 0
      right: 0
/* フェードイン・フェードアウト中の設定 */
.fade-enter-active, .fade-leave-active {
    opacity 1
    transition: .5s;
    transform: translateX(0)
}
/* フェードイン開始時・フェードアウト終了時の設定 */
.fade-enter, .fade-leave-to {
    opacity: 0;
    transition: .5s
    transform: translateX(100%)
}
</style>
