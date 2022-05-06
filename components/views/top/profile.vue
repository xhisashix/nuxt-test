<template lang="pug">
.top-profile
  TopTitle(title="PROFILE" subTitle="プロフィール")
  .prof-area
    img(:src="'image/top/profile.png'" alt="altText")
    .prof-text
      h3
        span Hisashi
      p Webエンジニア
      .skill
        Scrollmagic(triggerHook="onCenter" @onEnter="isAnim1 = true " :offset="0")
        ul(:class="{ act1 : isAnim1 }")
          li
            .img
              img(:src="'image/top/html.svg'" alt="altText")
            p HTML
          li
            .img
              img(:src="'image/top/css.svg'" alt="altText")
            p CSS
          li
            .img
              img(:src="'image/top/js.svg'" alt="altText")
            p JavaScript
          li
            .img
              img(:src="'image/top/vue.svg'" alt="altText")
            p Vue
        Scrollmagic(triggerHook="onCenter" @onEnter="isAnim2 = true " :offset="0")
        ul(:class="{ act2 : isAnim2 }")
          li
            .img
              img(:src="'image/top/nuxt.svg'" alt="altText")
            p Nuxt
          li
            .img
              img(:src="'image/top/php.svg'" alt="altText")
            p PHP
          li
            .img
              img(:src="'image/top/laravel.svg'" alt="altText")
            p Laravel
          li
            .img
              img(:src="'image/top/sql.svg'" alt="altText")
            p MySQL
</template>

<script>
import Scrollmagic from '~/components/ui/Scrollmagic'
import TopTitle from '~/components/ui/TopTitle.vue'
export default {
  components: {
    TopTitle,
    Scrollmagic,
  },
  data() {
    return {
      isAnim1: false,
      isAnim2: false,
    }
  },
}
</script>
<style lang="stylus">
.top-profile
  padding-top 100px
  box-sizing: border-box
  max-width: 1200px
  margin 0 auto
  +bp(md)
    padding-top 50px
  .prof-area
    margin-top 30px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    >img
      border-radius: 50%
      border: 1px solid #000
      max-width: 300px
      height: auto
    .prof-text
      margin-top: 30px
      text-align: center
      width: 95%
      h3
        font-size rem(32px)
        line-height: rem(36px)
        +bp(md)
          font-size: rem(24px)
      p
        font-size rem(24px)
        line-height: rem(32px)
        +bp(md)
          font-size rem(18px)
      .skill
        margin-top: 30px
        width: 100%
        ul
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          margin-top: 30px
          &.act1,
          &.act2
            li
              transform: translate(0, 0)
              opacity 1
              &:nth-child(2)
                transition-delay: .3s
              &:nth-child(3)
                transition-delay: .6s
              &:nth-child(4)
                transition-delay: .9s
          li
            opacity 0
            transform: translate(20px, 20px)
            transition: .5s
            width: 25%
            padding 20px
            box-sizing: border-box
            margin-top: 10px
            +bp(md)
              width: 50%
            p
              margin-top: 15px
            .img
              height 150px
              display: flex
              justify-content: center
              align-items: center
              img
                width: 150px
</style>
