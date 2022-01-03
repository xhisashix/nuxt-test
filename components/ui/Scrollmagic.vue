<template lang="pug">
  div
</template>

<script>
export default {
  components: {},
  props: {
    triggerHook: {
      type: [Number, String],
      default: 'onEnter',
    },
    offset: {
      type: [Number],
      default: 0,
    },
    duration: {
      type: [Number],
      default: 0,
    },
  },
  computed: {},
  watch: {
    offset(next) {
      this.scene.offset(next)
    },
    duration(next) {
      this.scene.duration(next)
    },
    triggerHook(next) {
      this.scene.triggerHook(next)
    },
  },
  mounted() {
    this.scene = new this.$sm.Scene({
      triggerElement: this.$el,
    })
    this.scene.on('enter', this.onEnter)
    this.scene.on('leave', this.onLeave)
    this.scene.triggerHook(this.triggerHook)
    this.scene.offset(this.offset)
    this.scene.duration(this.duration)
    this.$smController.addScene(this.scene)
  },
  methods: {
    onEnter() {
      this.$emit('onEnter')
    },
    onLeave() {
      this.$emit('onLeave')
    },
  },
  beforeDestory() {
    this.$smController.removeScene(this.scene)
    this.scene.off('enter', this.onEnter)
    this.scene.off('leave', this.onLeave)
    this.scene = this.scene.destory(true)
  },
}
</script>