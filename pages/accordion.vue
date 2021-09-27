<template lang="pug">
  .page-accordion
    h1 アコーディオンメニュー
    ul
      li(v-for="(menu, index) in menus" @click="isOpen(index)")
        p {{ menu.title }}
        transition(name="fade")
          .menu-content(v-if="menu.flag")
            p {{ menu.content }}
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          flag: false,
          title: 'メニュータイトル',
          content: 'メニューコンテンツ',
        },
        {
          flag: false,
          title: 'メニュータイトル',
          content: 'メニューコンテンツ',
        },
        {
          flag: false,
          title: 'メニュータイトル',
          content: 'メニューコンテンツ',
        },
        {
          flag: false,
          title: 'メニュータイトル',
          content: 'メニューコンテンツ',
        },
        {
          flag: false,
          title: 'メニュータイトル',
          content: 'メニューコンテンツ',
        },
      ],
    }
  },
  methods: {
    isOpen(key) {
      this.menus[key].flag = !this.menus[key].flag
    },
  },
}
</script>

<style lang="stylus">
.page-accordion
  ul
    width 50%
    margin 0 auto
    li
      border 1px solid #eee
      box-sizing border-box
      padding 10px
      cursor pointer
      p
        font-size rem(20px)
        line-height rem(24px)
      .menu-content
        border-top 1px solid #eee
        margin-top 10px
        padding 15px
        p
          font-size rem(16px)
          line-height rem(22px)
.fade-enter-active,
.fade-leave-active
  transition opacity 1s
.fade-enter,
.fade-leave-to
  opacity 0
</style>
