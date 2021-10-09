<template lang="pug">
div.scroll
  .scroll-position スクロール位置の取得 : {{ scrollY }}
  .section(ref="section1" :class="{now : now }")
    p section1の高さ：{{section1}}
  .section(ref="section2")
    p section2の高さ：{{section2}}
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      section1: '',
      now: false,
      section2: '',
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll)
    this.getHeight()
  },
  methods: {
    getScroll() {
      this.scrollY = window.scrollY
      this.addClass()
    },
    getHeight() {
      this.section1 = this.$refs.section1.offsetTop
      this.section2 = this.$refs.section2.offsetTop
    },
    addClass() {
      if (this.scrollY > this.section1) {
        setTimeout(() => {
          this.now = true
        }, 3000)
      }
    },
  },
}
</script>

<style lang="stylus">
.scroll
  .scroll-position
    position fixed
    width 250px
    top 100px
    left 0
    right 0
    margin auto
  .section
    height 100vh
</style>
