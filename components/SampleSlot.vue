<template lang="pug">
.sample-slot
  a(v-bind:href="url" class="nav-link")
    slot
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="stylus"></style>
