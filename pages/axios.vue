<template lang="pug">
  .page
    label 名前の検索
    input(v-model="name")
    ul
      li(v-for="i in fInfo" :key="i.id")
        p 名前：{{ i.name }}
        p メールアドレス：{{i.email}}
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
