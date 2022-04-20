<template lang="pug">
.top-page
  top
  profile
  contentList
  blogList
</template>

<script>
import top from '~/components/views/top/top.vue'
import profile from '~/components/views/top/profile.vue'
import contentList from '~/components/views/top/contentList.vue'
import blogList from '~/components/views/top/blogList.vue'
export default {
  components: {
    top,
    profile,
    contentList,
    blogList,
  }
}
</script>

<style lang="stylus">
</style>
