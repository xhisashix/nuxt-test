<template lang="pug">
  .form-check
    form(action='cgi-bin/formmail.cgi' method='post')
      div
        | 名前：
        input(type='text' name='name')
      div
        | メールアドレス：
        input(type='text' name='email')
      div
        | 性別：
        input(type='radio' name='sex' value='male')
        | 男
        input(type='radio' name='sex' value='female')
        | 女
      div
        | 血液型：
        select(name='blood')
          option(value='A') A型
          option(value='B') B型
          option(value='O') O型
          option(value='AB') AB型
      div
        | ご感想：
        br
        textarea(name='kanso' rows='4' cols='40')
      div.btn-area
        input(type='submit' value='送信')
        input(type='reset' value='リセット')

</template>
<script>
export default {}
</script>
<style lang="stylus">
.form-check
  min-height: 50vh
  form
    width: 50%
    margin 0 auto
    background: #eee
    padding 30px
    border-radius: 5px
    display: flex
    justify-content: flex-start
    align-items: flex-start
    flex-direction: column
    div
      margin-top: 20px
    .btn-area
      display: flex
      justify-content: center
      align-items: center
      input
        width: 150px
        height: 30px
        margin-left: 30px
</style>
