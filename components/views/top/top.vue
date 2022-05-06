<template lang="pug">
.top-main
  .main-mv
    img(src="image/top/main.png" alt="altText")
    .main-text
      p(:class="{ act: isAnim }")
        span e
        span L
        span o
        span g
        span s
</template>
<script>
import Scrollmagic from '~/components/ui/Scrollmagic'
export default {
  components: {
    Scrollmagic
  },
  data() {
    return {
      isAnim: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isAnim = true
      }, 1000)
    })
  }
}
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
      &.act
        span
          opacity 1
          transform: translateX(0)
          &:nth-child(2)
            transition-delay: .3s
          &:nth-child(3)
            transition-delay: .5s
          &:nth-child(4)
            transition-delay: .7s
          &:nth-child(5)
            transition-delay: .9s
      span
        display: inline-block
        opacity: 0
        transition: .7s
        transform: translateX(10px) rotate(-30deg)
</style>
