<template lang="pug">
  .page-axios
    .search-area
      h1 検索
      .search-content
        label 名前の検索
        input(v-model="name")
    .menber-list
      table
        tbody
          tr
            th 名前
            th メールアドレス
          tr(v-for="i in fInfo" :key="i.id")
            td {{ i.name }}
            td {{i.email}}
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      info: [],
      name: '',
    }
  },
  computed: {
    fInfo() {
      return this.info.filter((e) => {
        return e.name.includes(this.name)
      })
    },
  },
  mounted() {
    axios
      .get('http://localhost:3001/name_list')
      .then((response) => (this.info = response.data))
  },
}
</script>

<style lang="stylus">
.page-axios
  max-width 980px
  margin 0 auto
  padding-bottom 80px
  .search-area
    margin-top 30px
    h1
      font-size rem(20px)
      line-height rem(24px)
      border-left 3px solid #F2C063
      padding-left 8px
      box-sizing border-box
    .search-content
      margin-top 10px
      label
        margin-right 20px
  .menber-list
    margin-top 30px
    table
      width 100%
      tr
        th,td
          width 50%
          padding 10px
          box-sizing border-box
          border 1px solid #eee
        th
          background #ddd

</style>