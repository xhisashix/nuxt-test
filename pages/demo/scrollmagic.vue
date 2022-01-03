<template lang="pug">
.page-scroll-magic
  .section
    .box
  .section
    Scrollmagic(triggerHook="onCenter" @onEnter="enter" :offset="100"  @onLeave="isAnim= false" )
    transition(name="slide")
      .box(v-if="isAnim")
  .section
    .box
  .section
    .box
</template>
<script>
import Scrollmagic from '~/components/ui/Scrollmagic'
export default {
  components: {
    Scrollmagic,
  },
  data() {
    return {
      isAnim: false,
    }
  },
  methods: {
    enter() {
      this.isAnim = true
    },
  },
}
</script>
<style lang="stylus">
.page-scroll-magic
  .section
    min-height 100vh
    .box
      width: 200px
      height 200px
      background main-color
.slide-enter-active
  transition all .3s ease
  opacity 1
.slide-leave-active
  transition: all .8s
  opacity 1
  transform: rotateX(0)
.slide-enter,
.slide-leave-to
  opacity 0
  transform: rotateX(-10px)
</style>
