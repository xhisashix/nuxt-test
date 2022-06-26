<template lang="pug">
.youtube-app
  .top-10
    h1 現在の急上昇動画 {{ now }}
    ul
      li(v-for="top in topTenVideo.items")
        p {{ top.snippet.title }}
  .search-area
    h1 Youtube動画検索
    input(type="text" v-model="query")
    button(@click="searchContent") 検索
    ul(v-if="response").search-result
      li(v-for="item in  response.data.items")
        img(:src="item.snippet.thumbnails.high.url")
        .detail
          h3.title {{ item.snippet.title }}
          p.description {{ item.snippet.description }}
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      response: '',
      query: 'コムドット',
      key: 'AIzaSyD-orNDwpIToOHyLfzroXJPyUcIs36cwFM',
      topTenVideo: '',
      topTen: {
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'JP'
      }
    }
  },
  computed: {
    now() {
      const now = new Date()
      const formattedDate =
        now.getFullYear() +
        '-' +
        (now.getMonth() + 1) +
        '-' +
        now.getDate() +
        ' ' +
        now.getHours() +
        ':' +
        now.getMinutes() +
        ':' +
        now.getSeconds()
      return formattedDate
    }
  },
  mounted() {
    this.getTopTen()
  },
  methods: {
    searchContent() {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            q: this.query,
            part: 'snippet',
            key: this.key
          }
        })
        .then((response) => (this.response = response))
    },
    getTopTen() {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 10,
            regionCode: 'JP',
            key: this.key
          }
        })
        .then((response) => (this.topTenVideo = response.data))
    }
  }
}
</script>

<style lang="stylus">
.youtube-app
  max-width: 1100px
  width: 80%
  margin 0 auto
  margin-top: 30px
  .search-result
    margin-top 20px
    li
      margin-top 20px
      display flex
      justify-content space-between
      align-items flex-start
      img
        width 50%
        height auto
      .detail
        margin-left 30px
        h3
          font-size rem(24px)
          line-height rem(28px)
          font-weight bold
        p
          font-size rem(16px)
          line-height rem(24px)
          margin-top 10px
</style>
