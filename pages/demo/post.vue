<template lang="pug">
.page-post
  h1 ブログ記事一覧
  .post
    ul
      li(v-for="post in posts")
        a(:href="post.guid.rendered")
          p {{ post.title.rendered }}
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: '',
    }
  },
  mounted() {
    axios
      .get('https://pg-log.com/wp-json/wp/v2/posts?per_page=100&page=1')
      .then((response) => (this.posts = response.data))
  },
}
</script>

<style lang="stylus">
.page-post
  margin-top 30px
  margin-bottom 50px
  .post
    ul
      li
        margin-top 15px
        padding-left 15px
        box-sizing border-box
        position relative
        &::before
          position absolute
          top 0
          left 0
          bottom 0
          margin auto
          content ''
          width 5px
          height 5px
          border-radius 50%
          background main-color
</style>
