<template lang="pug">
  .page-bottom-scroll
    h1 一番下までスクロールしたとき
    p 要素の高さ（見えている部分）：{{ clientHeight }}
    p 要素の高さ（見得ていない部分も含めたもの）：{{ scrollHeight }}
    p 要素の内容が垂直にスクロールした位置：{{ scrollTop }}
    .scroll-section(ref="reference")
      section
        p section
      section
        p section
      section
        p section
      section
        p section
      section
        p section
      section
        p section
      section
        p section
      section
        p section
    button.btn.btn-primary(type='submit' v-show="isActive") Submit
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      clientHeight: '',
      scrollHeight: '',
      scrollTop: '',
    }
  },
  mounted() {
    const reference = this.$refs.reference

    const self = this
    reference.onscroll = function () {
      const element = self.$refs.reference
      const clientHeight = element.clientHeight
      const scrollHeight = element.scrollHeight

      self.clientHeight = clientHeight
      self.scrollHeight = scrollHeight
      self.scrollTop = element.scrollTop

      // 一番下まで行ったかの判定
      if (scrollHeight - (clientHeight + element.scrollTop) < 1) {
        self.isActive = true
      }
    }
  },
}
</script>

<style lang="stylus">
.page-bottom-scroll
  .scroll-section
    border 1px solid #000
    width 50%
    height 500px
    margin 0 auto
    overflow-y scroll
    section
      min-height 500px
  button
    width: 200px
    height: 70px
    background: #fdcb6e
    border-radius: 100vh
    margin 0 auto
    margin-top: 30px
    display: block
</style>
