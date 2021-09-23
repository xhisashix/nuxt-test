<template lang="pug">
  .page-password-generation
    h1 6桁から8桁のパスワードを生成できます。
    .password-genetation
      input(type="number" v-model="num")
      button(@click="createPassword(num)") パスワード生成
    .password
      p {{password}}
      button(@click="copy") コピー
</template>

<script>
export default {
    data() {
        return {
            password: '',
            num: 8
        }
    },
    methods: {
        createPassword(len) {
            let passwordLength;
            const maxLength = 10
            const minLength = 6
            if (len <= minLength) {
                alert('パスワードは6文字以上から作成できます。')
            } else if (len > maxLength) {
                alert('最大の長さは10文字以下です。')
            } else {
                passwordLength = len
            }
            // 生成する文字列に含める文字セット
            const passContent = "abcdefghijklmnopqrstuvwxyz0123456789";

            const cl = passContent.length;
            this.password = ''
            for (let i = 0; i < passwordLength; i++) {
                this.password += passContent[Math.floor(Math.random() * cl)];
            }
        },
        copy() {
            const text = this.password
            navigator.clipboard.writeText(text).then(e => {
                alert('コピーできました');
            });
        }
    }
}
</script>

<style lang="stylus">
.page-password-generation
  h1
    border-left 3px solid main-color
    padding-left 15px
    box-sizing border-box
    font-size rem(24px)
    line-height rem(32px)
  .password-genetation
    display flex
    justify-content center
    align-items center
    button
      border 1px solid main-color
      background main-color
      color #fff
      font-weight bold
      margin-top 20px
      margin-left 30px
      border-radius 10px
      padding 10px
  .password
    background #eee
    width 80%
    margin 0 auto
    margin-top 20px
    min-height 200px
    p
      font-size rem(18px)
      line-height rem(24px)
      text-align center
      vertical-align middle
    button
      border 1px solid main-color
      background main-color
      color #fff
      font-weight bold
      margin-top 20px
      margin-left 30px
      border-radius 10px
      padding 10px
</style>
