<template lang="pug">
.load
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
export default {}
</script>

<style lang="stylus">
.load
  width: 100vw
  height: 100vh
  position: fixed
  background: #fff
  z-index 100
  top 0
  left: 0
  display: flex
  align-items: center
  justify-content: center
  .letter-holder
    padding 16px
    width: 200px
    height: 200px
    display: flex
    align-items: center
    justify-content: center
    margin: auto
  .letter
    font-size 24px
    margin-left: 5px
    font-weight bold
    color #000
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
