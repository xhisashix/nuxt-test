<template lang="pug">
.page-blog-list
  TopTitle(title="BLOG" subTitle="ブログ")
  .blog-list
    ul
      li(v-for="post in posts" :key="post.id")
        a(:href="post.link" target="_blank")
          div.thumbnail(v-for="item in post['_embedded']['wp:featuredmedia']")
            img(:src="item.media_details.sizes.medium.source_url")
          .post-title
            h3 {{ post.title.rendered }}
            .description(v-html='post.excerpt.rendered')
</template>

<script>
import axios from 'axios'
import TopTitle from '~/components/ui/TopTitle.vue'
export default {
  components: {
    TopTitle,
  },
  data() {
    return {
      posts: '',
      thumbnail: ''
    }
  },
  mounted() {
    axios
      .get('https://pg-log.com/wp-json/wp/v2/posts?_embed')
      .then((response) => (this.posts = response.data))
  }
}
</script>
<style lang="stylus">
.page-blog-list
  margin-top 120px
  padding-top 100px
  padding-bottom 100px
  background rgba(204 204 204 0.2)
  .blog-list
    margin 0 auto
    max-width 1200px
    width 95%
    +bp(md)
      max-width 95%
  ul
    li
      box-sizing border-box
      margin-top 40px
      padding 20px
      border 1px solid #3b4043
      box-shadow 2px 2px 8px gray
      transition 0.5s
      &:hover
        transform translate(5px, 5px)
      a
        display flex
        justify-content flex-start
        align-items flex-start
        width 100%
        +bp(md)
          flex-direction column
          justify-content center
          align-items center
        .thumbnail
          width 30%
          +bp(md)
            display flex
            justify-content center
            align-items center
            width 100%
        .post-title
          margin-left 10px
          width 70%
          +bp(md)
            margin-top 15px
            margin-left 0
            width 100%
          h3
            font-weight bold
            font-size rem(24px)
            line-height rem(40px)
          p
            margin-top 15px
            font-size rem(18px)
            line-height rem(32px)
</style>
