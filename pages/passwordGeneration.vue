<template lang="pug">
  .page-password-generation
    input(type="number" v-model="num")
    button(@click="createPassword(num)") パスワード生成
    p {{password}}
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
            const c = "abcdefghijklmnopqrstuvwxyz0123456789";

            const cl = c.length;
            this.password = ''
            for (let i = 0; i < passwordLength; i++) {
                this.password += c[Math.floor(Math.random() * cl)];
            }
        },
    }
}
</script>

<style lang="stylus">
.page-password-generation
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
