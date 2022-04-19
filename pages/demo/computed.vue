<template lang="pug">
  .page-computed
      p FirstName: {{ firstName }}
      p LastName: {{ lastName }}
      p FullName: {{ fullName }}
      .multiplication
        p {{ a }}
        p {{ b }}
        p {{ multiplication }}
</template>
<script>
export default {
  data() {
    return {
      firstName: 'Taro',
      lastName: 'Tanaka',
      a: 10,
      b: 6,
    }
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName
    },
    multiplication() {
      const answer = this.a * this.b
      if(answer <= 50){
        return answer
      } else {
        return "50以上です。"
      }
    }
  }
}
</script>
<style lang="stylus">
.page-computed
  padding-top 80px
  p
    font-size rem(20px)
    line-height rem(28px)
</style>
