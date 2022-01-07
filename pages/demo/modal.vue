<template lang="pug">
.page-modal
  button(@click="isOpen") モーダルを開く
  transition(name="fade")
    .modal(v-show="open")
      .detail
        .close
          button(@click="isOpen")
        p モーダルウィンドウ
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    isOpen() {
      this.open = !this.open
    },
  },
}
</script>
<style lang="stylus">
.page-modal
  max-width 960px
  margin 0 auto
  margin-top 30px
  button
    box-sizing border-box
    width 270px
    height 50px
    border-radius 5px
    background main-color
  .modal
    position fixed
    top 0
    left 0
    background rgba(0 0 0 .2)
    width 100vw
    height 100vh
    display flex
    justify-content center
    align-items center
    z-index 1
    .detail
      width 50vw
      height 50vh
      background #fff
      border-radius 50px
      box-sizing border-box
      padding 30px
      position relative
      z-index 10
      .close
        position absolute
        top 20px
        right 30px
        button
          border 1px solid #000
          background #fff
          position relative
          width 30px
          height 30px
          border-radius 50%
          &::before,
          &::after
            position absolute
            top 0
            left 0
            bottom 0
            right 0
            margin auto
            width 15px
            height 2px
            background #000
            border-radius 100vh
            content ''
            transform rotate(45deg)
          &::after
            transform: rotate(-45deg)
.fade-enter-active, .fade-leave-active
  transform: scale(1);
  transition: opacity 0.5s;
.fade-enter, .fade-leave-to
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);
</style>
