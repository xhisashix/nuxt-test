<template lang="pug">
  .page-top
    vue-swiper
    .content-list
      h1 デモページ一覧
      ul
        li(v-for="c in contents" :key="c.id")
          a( :href="c.link")
            .img
              img(:src="c.img", alt="alt")
            p(v-html="c.txt")

</template>

<script>
import VueSwiper from '~/components/ui/VueSwiper.vue'
export default {
  components : {
    VueSwiper
  },
    data() {
        return {
            contents: [{
                link: "/demo/scroll",
                img: '/image/thumbnail/optimize-image.png',
                txt: 'スクロール位置の取得方法'
            },
            {
              link: "/demo/swiper",
                img: '/image/thumbnail/ui-ux-interface-sliders.png',
                txt: 'vue-awsom-swiper'
            },
            {
              link: "/demo/accordion",
                img: '/image/thumbnail/coding.png',
                txt: 'アコーディオンメニュー'
            },
            {
              link: "/demo/axios",
                img: '/image/thumbnail/cryptocurrency.png',
                txt: 'axiosを使った値の取得'
            },
            {
              link: "/demo/click",
                img: '/image/thumbnail/cryptocurrency.png',
                txt: 'クリックイベント'
            },
            {
              link: "/demo/data",
                img: '/image/thumbnail/cryptocurrency.png',
                txt: 'データを表示'
            },
            {
              link: "/demo/passwordGeneration",
                img: '/image/thumbnail/cryptocurrency.png',
                txt: 'パスワード生成ツール'
            },
            {
              link: "/axios",
                img: '/image/thumbnail/cryptocurrency.png',
                txt: 'アコーディオンメニュー'
            },
            {
              link: "/axios",
                img: '/image/thumbnail/cryptocurrency.png',
                txt: 'アコーディオンメニュー'
            },
          ],
        }
    },
}
</script>

<style lang="stylus">
.page-top
  h1
    border-left 3px solid main-color
    padding-left 15px
    box-sizing border-box
    font-size rem(24px)
    line-height rem(32px)
  .content-list
    margin-top 30px
    ul
      display flex
      justify-content flex-start
      align-items center
      flex-wrap wrap
      li
        width 300px
        height 300px
        margin-top 20px
        margin-left 20px
        box-sizing border-box
        border 1px solid #eee
        a
          padding 10px
          height 100%
          width 100%
          cursor pointer
          box-sizing border-box
          .img
            display flex
            justify-content center
            align-items center
            img
              width 250px
              height 250px
              object-fit contain
              margin 0 auto
          p
            font-size rem(18px)
            line-height rem(24px)
            margin-top 10px
</style>
