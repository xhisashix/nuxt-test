<template lang="pug">
.top-page
  top
  profile
  contentList
</template>

<script>
import top from '~/components/views/top/top.vue'
import profile from '~/components/views/top/profile.vue'
import contentList from '~/components/views/top/contentList.vue'
export default {
  components: {
    top,
    profile,
    contentList,
  }
}
</script>

<style lang="stylus">
</style>
