<template lang="pug">
.page-content-list
  TopTitle(title="CONTENTS" subTitle="コンテンツ一覧（ブログのデモページ）")
  .content-list
    ul
      li(v-for="item in items" :key="item.id")
        nuxt-link(:to="item.link")
          .img
            img(:src="item.img", alt="alt")
          p(v-html="item.text")
</template>
<script>
import TopTitle from '~/components/ui/TopTitle.vue'
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      items: [
        {
          link: '/demo/accordion',
          img: 'image/thumbnail/accordion.svg',
          text: 'アコーディオンメニュー'
        },
        {
          link: '/demo/axios',
          img: 'image/thumbnail/axios.svg',
          text: 'axiosのサンプル表示'
        },
        {
          link: '/demo/click',
          img: 'image/thumbnail/click.svg',
          text: 'クリックしたときの処理'
        },
        {
          link: '/demo/bottomScroll',
          img: 'image/thumbnail/scroll.svg',
          text: '要素の一番下までスクロールしたときの処理'
        },
        {
          link: '/demo/countup',
          img: 'image/thumbnail/count.svg',
          text: 'カウントアップ'
        },
        {
          link: '/demo/modal',
          img: 'image/thumbnail/modal.svg',
          text: 'モーダル'
        },
        {
          link: '/demo/quiz',
          img: 'image/thumbnail/quiz.svg',
          text: 'クイズ'
        },
        {
          link: '/demo/scroll',
          img: 'image/thumbnail/scroll-1.svg',
          text: 'スクロール位置'
        },
        {
          link: '/demo/scrollmagic',
          img: 'image/thumbnail/scrollmagic.svg',
          text: 'スクロールマジック'
        },
      ]
    }
  }
}
</script>
<style lang="stylus">
.page-content-list
  padding-top 150px
  +bp(md)
    padding-top 50px
  .content-list
    margin 20px auto
    max-width 1200px
    width 95%
    +bp(md)
      max-width 95%
    ul
      display flex
      flex-wrap wrap
      justify-content space-between
      li
        box-sizing border-box
        margin-top 40px
        padding 20px
        width 30%
        border 1px solid #3b4043
        box-shadow 2px 2px 8px gray
        transition 0.5s
        +bp(md)
          margin-top 20px
          width 49%
        &:hover
          transform translate(5px, 5px)
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
        .img
          height 250px
          +bp(md)
            height 200px
          img
            width 100%
            height 100%
            object-fit contain
        p
          margin-top 10px
</style>
