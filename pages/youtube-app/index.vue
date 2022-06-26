<template lang="pug">
.youtube-app
  h1 Youtube動画検索
  input(type="text" v-model="query")
  button(@click="searchContent") 検索
  ul
    li(v-for="item in  response" :key="item.id")
      p {{ item.snippet }}
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      response: '',
      query: '',
      key: 'AIzaSyD-orNDwpIToOHyLfzroXJPyUcIs36cwFM'
    }
  },
  methods: {
    searchContent(){
      axios
      .get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + this.query + '&key=' + this.key)
      .then(response => (this.response = response))
    }
  },
}
</script>

<style lang="stylus">
.youtube-app
  max-width: 1100px
  width: 80%
  margin 0 auto
  margin-top: 30px
</style>
