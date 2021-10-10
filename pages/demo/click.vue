<template lang="pug">
  .page-click-event
    h1 ボタンのイベント取得
    button(@click="click")  クリック
    button(@dblclick="dblclick") ダブルクリック
    button(@click.right="rightClick") 右クリック
    .input-area
      h1 押したキーの取得
      input(@keydown="onKeydown")
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    click() {
      alert('click')
    },
    dblclick() {
      alert('ダブルクリック')
    },
    rightClick() {
      alert('右クリック')
    },
    onKeydown(event) {
      alert(event.key)
    },
  },
}
</script>

<style lang="stylus">
.page-click-event
  button
    border 1px solid main-color
    background main-color
    color #fff
    font-weight bold
    margin-top 20px
    margin-left 30px
    border-radius 10px
    padding 10px
  .input-area
    margin-top 30px
    input
      margin-top 20px
</style>
