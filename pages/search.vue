<template lang="pug">
  .page-search
    h1 ユーザー情報一覧
    button(ref="btn") 情報取得
    .user-list
      ul
        li(v-for="user in users" :key="user.id")
          p {{ user.name }}
          p {{user.username}}
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.$refs.btn.addEventListener('click',  this.getUsers)
  },
  methods : {
    getUsers() {
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => (this.users = response.data))
    }
  },
}
</script>

<style lang="stylus">
.page-search
  .user-list
    ul
      display flex
      justify-content space-between
      flex-wrap wrap
      li
        margin-top 15px
        width 25%
</style>
