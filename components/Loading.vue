<template lang="pug">
.content
  .load-wrapp
    .load-6
      p Loading 6
      .letter-holder
        .l-1.letter L
        .l-2.letter o
        .l-3.letter a
        .l-4.letter d
        .l-5.letter i
        .l-6.letter n
        .l-7.letter g
        .l-8.letter .
        .l-9.letter .
        .l-10.letter .
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="stylus">
.content
    padding 15px
    overflow hidden
    background-color #e7e7e7
    background-color rgba(0, 0, 0, 0.06)

.load-wrapp
    float left
    width 100px
    height 100px
    margin 0 10px 10px 0
    padding 20px 20px 20px
    border-radius 5px
    text-align center
    background-color #d8d8d8

.letter-holder
    padding 16px

.letter
    float left
    font-size 14px
    color #777

.load-6
  .letter
      animation-name loadingF
      animation-duration 1.6s
      animation-iteration-count infinite
      animation-direction linear

.l-1
    animation-delay 0.48s

.l-2
    animation-delay 0.6s

.l-3
    animation-delay 0.72s

.l-4
    animation-delay 0.84s

.l-5
    animation-delay 0.96s

.l-6
    animation-delay 1.08s

.l-7
    animation-delay 1.2s

.l-8
    animation-delay 1.32s

.l-9
    animation-delay 1.44s

.l-10
    animation-delay 1.56s

@keyframes loadingF
  0%
    opacity 0
  100%
    opacity 1
</style>
