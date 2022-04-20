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
  .content-list
    max-width: 1200px
    margin 20px auto
    ul
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      li
        width: 30%
        border 1px solid #3b4043
        padding 20px
        box-sizing: border-box
        box-shadow 2px 2px 8px gray;
        margin-top 40px
        transition: .5s
        &:hover
          transform translate(5px, 5px)
        a
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
          .img
            height: 250px
            img
              width: 100%
              height: 100%
              object-fit: contain
          p
            margin-top: 10px
</style>
