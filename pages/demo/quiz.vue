<template lang="pug">
.page-quiz
  .container
    #js-question(ref="js-question")
      | A simple primary alert—check it out!
    #type_detail
    #js-items
      button.q_btn(type='button') Primary
      button.q_btn(type='button') Primary
</template>

<script>
export default {
  data() {
    return {
      quizCount: 0,
      btnIndex: 0,
      answersIndex: 0,
      score: [],
      buttons: [],
      question: '',
    }
  },
  mounted() {
    this.buttons = document.querySelectorAll('.q_btn')
    this.question = document.getElementById('js-question')
    this.type_detail = document.getElementById('type_detail')
    this.init() // クイズの初期化
    let answersIndex = 0
    const answersLen = this.$QUIZ[this.quizCount].answers.length
    while (answersIndex < answersLen) {
      this.buttons[answersIndex].addEventListener('click', (e) => {
        this.judge(e.target)
      })
      answersIndex++
    }
  },
  methods: {
    init() {
      this.question.textContent = this.$QUIZ[this.quizCount].question
      const buttonLen = this.buttons.length
      while (this.btnIndex < buttonLen) {
        this.buttons[this.btnIndex].textContent = this.$QUIZ[
          this.quizCount
        ].answers[this.btnIndex]
        this.btnIndex++
      }
    },
    goToNext() {
      this.quizCount++
      if (this.quizCount < this.$QUIZ.length) {
        this.init(this.quizCount)
      } else {
        this.showEnd()
      }
    },
    judge(elm) {
      if (elm.textContent === 'Yes') {
        this.score.push(0)
      } else {
        this.score.push(1)
      }
      this.goToNext()
    },
    showEnd() {
      const $items = document.getElementById('js-items')
      $items.style.visibility = 'hidden'
      for (let t = 0; t < this.$TYPE_PATTERN.length; t++) {
        // 配列の中身を比較
        for (let i = 0; i < this.score.length; i++) {
          if (this.score[i] === this.$TYPE_PATTERN[t].type[i]) {
            this.question.textContent = `あなたのタイプは${this.$TYPE_PATTERN[t].type_name}です。`
            this.type_detail.textContent = `${this.$TYPE_PATTERN[t].type_details}`
            return
          }
        }
      }
    },
  },
}
</script>

<style lang="stylus">
.page-quiz
  height calc(100vh - 140px)
  display flex
  justify-content center
  align-items center
  .container
    width 50vw
    height 50vh
    display flex
    justify-content center
    align-items center
    flex-direction column
    background-color #eeeeee
    border-radius 20px
    padding 20px
    box-sizing border-box
    #js-items
      display flex
      margin-top 20px
      gap 10px
      button
        background-color blue
        border-radius 5px
        padding 15px
        color white
</style>
