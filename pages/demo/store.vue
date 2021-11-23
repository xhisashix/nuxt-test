<template lang="pug">
.page-store
  p {{ $store.state.message }}
  input(type="text" v-model="message" @keyup.enter="changeMessage")
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    changeMessage(e) {
      this.$store.commit('changeMessage',  e.target.value)
    }
  }
}
</script>
<style lang="stylus"></style>
