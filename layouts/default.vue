<template lang="pug">
  div
    .main
      Header(ref="reference")
      .nuxt
        Nuxt
      Footer
    transition(name="home")
      Loading(v-if="isShow")
</template>

<script>
import Loading from '~/components/ui/Loading.vue'
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isShow: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false
      }, 700)
    })
  },
}
</script>

<style lang="stylus">
div
  .nuxt
    max-width 1280px
    margin 0 auto
    padding-top 70px
h1
  border-left 3px solid main-color
  padding-left 15px
  box-sizing border-box
  font-size rem(24px)
  line-height rem(32px)
  margin-bottom 30px
.home-enter-active, .home-leave-active
  transition: opacity .7s
.home-enter, .home-leave-active
  opacity: 0
</style>
