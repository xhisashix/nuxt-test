<template lang="pug">
.page-button-generator
  .container
    .generate-color
      h1 サンプルのボタン
      .button-code(ref="code")
        .button(ref='button')
          button(type='button') Button
      .sample-code
        h1 サンプルボタンのソースコード
        button(type='button' @click="getCode") コードを表示
        client-only
          pre(v-highlightjs)
            code {{ code }}
        button(type="button" @click="copy") コピーする
    .color-pick-area
      ColorPicker(
        :gradient="gradient"
        :is-gradient="false"
        :on-end-change="color => onChange(color, 'end')"
      )
</template>

<script>
export default {
  components: {},
  data() {
    return {
      code: '',
      cssCode: '',
      gradient: {
        type: 'linear',
        degree: 0,
        points: [
          {
            left: 0,
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
          },
          {
            left: 100,
            red: 255,
            green: 0,
            blue: 0,
            alpha: 1
          }
        ]
      }
    }
  },
  mounted() {
    this.getCode()
  },
  methods: {
    onChange(attrs, name) {
      console.log(name)
      this.gradient.points.push(attrs)
    },
    getCode() {
      this.code = this.$refs.code.innerHTML
      console.log(this.code)
      this.cssCode = getComputedStyle(this.$refs.button)
      console.log(this.cssCode)
    },
    copy() {
      const copyText = this.$refs.code
      copyText.select()
      document.execCommand('copy')
      alert('Copied!')
    }
  }
}
</script>

<style lang="stylus">
.page-button-generator
  height calc(100vh - 140px)
  .container
    margin 0 auto
    display: flex
    justify-content: space-between
    padding 50px 0
    box-sizing: border-box
    width 80vw
    max-width: 1280px
    min-height 80vh
    text-align center
    font-size 10px
    .sample-code
      margin-top 40px
    .generate-color
      max-width: 50%
      .button
        padding 10px 20px
        border 1px solid #000
        border-radius 5px
        box-sizing: border-box
      code
        padding 20px
    .color-pick-area
      width: 50%
      background-color: #eee
      padding 10px
      box-sizing: border-box
      .ui-color-picker
        margin: 0
        width: 100%
        box-sizing: border-box
        .picker-area
          padding 15px
          .picking-area
            height: 200px
        .color-preview-area
          font-size rem(16px)
          .input-field
            min-width: 20%
            max-width: 150px
            width: auto
            margin-left: 8px
          input
            font-size rem(16px)
            padding 8px
</style>
