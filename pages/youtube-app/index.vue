<template lang="pug">
.youtube-app
  .top-10
    h1 現在の急上昇動画 {{ now }}
    ul
      li(v-for="(top, index) in topTenVideo.items")
        .rank-area
          span(v-html="'第' + (index+1) + '位'")
          h3 {{top.snippet.channelTitle}}
        .content-area
          img(:src="top.snippet.thumbnails.high.url")
          .detail
            h3 {{ top.snippet.title }}
            p {{ top.snippet.description.substr(0, 150) }} ...
            button
              a(:href="'https://www.youtube.com/watch?v=' + top.id" target="_blank") 動画を見る
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
      video: '',
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
    },
  },
  mounted() {
    this.getTopTen()
    this.getVideo('HF_zchR-m0s')
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
        .get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 10,
            regionCode: 'JP',
            key: this.key
          }
        })
        .then((response) => (this.topTenVideo = response.data))
    },
    getVideo(videoId) {
      axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'statistics',
          id: videoId,
          key: this.key
        }
      })
      .then((response) => (this.video = response.data))
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
  .top-10
    li
      margin-top 20px
      .rank-area
        display flex
        justify-content flex-start
        span
          font-size rem(24px)
          line-height rem(28px)
          font-weight bold
          margin-right 10px
        h3
          font-size rem(24px)
          line-height rem(28px)
          font-weight bold
      .content-area
        margin-top 10px
        display flex
        justify-content flex-start
        align-items flex-start
        img
          width 20%
          height auto
        .detail
            margin-left 20px
          h3
            font-size rem(24px)
            line-height rem(28px)
            font-weight bold
          p
            margin-top 15px
            font-size rem(16px)
            line-height rem(22px)
          button
            margin-left auto
            margin-top 20px
            width 150px
            box-sizing border-box
            padding 5px 10px
            border-radius 10px
            border 1px solid red
            background red
            a
              text-align center
              font-weight bold
              color color-white
              font-size rem(18px)
              line-height rem(22px)

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
