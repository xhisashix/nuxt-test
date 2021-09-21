<template lang="pug">
  .page-countup
    h1 カウントアップデモ
    .content
      .minus_button(ref="mBtn" @click="minusBtn()")
      input(type="number" v-model="num" min="0" max="50" )
      .plus_button(ref="pBtn" @click="plusBtn()")
    .value {{ num }}
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    plusBtn() {
      this.num += 1
    },
    minusBtn() {
      this.num -= 1
    },
  },
}
</script>

<style lang="stylus">
.page-countup
  margin-top 30px
  h1
    font-size rem(28px)
    line-height rem(32px)
  .content
    display flex
    margin-top 30px
    input[type="number"]
      -webkit-outer-spin-button
      -webkit-inner-spin-button
    .minus_button
      width 30px
      height auto
      &:before
        content  url(/image/countup/subtract.svg)
    .plus_button
      width 30px
      height auto
      &:before
        content  url(/image/countup/add.svg)
</style>
