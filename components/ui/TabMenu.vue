<template lang="pug">
.page-tab-menu
  .tab
    .tab-list(v-for="(menu, index) in menus")
      .tab-title(:class='{act : index === showFlag}' @click="checkout(index)") {{ menu.menu }}
  .menu
    .menu-list(v-for="(menu, index) in menus")
      transition(name="pop" v-if="index === showFlag" )
        ul
          li(v-for="menulist in menu.menu_lists")
            p {{ menulist.list }}
</template>
<script>
export default {
  data() {
    return {
      showFlag: 0,
      menus: [
        {
          menu: 'メニュー１',
          menu_lists: [
            { list: 'テスト1' },
            { list: 'テスト1' },
            { list: 'テスト1' },
            { list: 'テスト1' },
            { list: 'テスト1' },
            { list: 'テスト1' },
            { list: 'テスト1' },
            { list: 'テスト1' },
          ],
        },
        {
          menu: 'メニュー2',
          menu_lists: [
            { list: 'テスト2' },
            { list: 'テスト2' },
            { list: 'テスト2' },
            { list: 'テスト2' },
            { list: 'テスト2' },
            { list: 'テスト2' },
            { list: 'テスト2' },
            { list: 'テスト2' },
          ],
        },
        {
          menu: 'メニュー3',
          menu_lists: [
            { list: 'テスト3' },
            { list: 'テスト3' },
            { list: 'テスト3' },
            { list: 'テスト3' },
            { list: 'テスト3' },
            { list: 'テスト3' },
            { list: 'テスト3' },
            { list: 'テスト3' },
          ],
        },
        {
          menu: 'メニュー4',
          menu_lists: [
            { list: 'テスト4' },
            { list: 'テスト4' },
            { list: 'テスト4' },
            { list: 'テスト4' },
            { list: 'テスト4' },
            { list: 'テスト4' },
            { list: 'テスト4' },
            { list: 'テスト4' },
          ],
        },
      ],
    }
  },
  methods: {
    checkout(menuNum) {
      this.showFlag = menuNum
    },
  },
}
</script>
<style lang="stylus">
.page-tab-menu
  min-height 50vh
  margin-top: 30px
  .tab
    width: 600px
    margin 0 auto
    display: flex
    justify-content: center
    align-items: center
    background: #eee
    .tab-list
      width: 25%
      .tab-title
        text-align: center
        padding 10px
        border 1px solid #eee
        font-size rem(18px)
        &.act
          border 1px solid main-color
          background: main-color
          color: #fff
          font-weight bold
  .menu
    width: 600px
    margin 0 auto
    .menu-list
      position relative
      ul
        border 2px solid #eee
        position: absolute
        padding 20px
        box-sizing: border-box
        top 0
        left 0
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        li
          margin-top: 15px
          font-size rem(18px)
          width: 23%
          border 1px solid #eee
          padding 10px
          box-sizing: border-box
          p
            text-align: center
.fade-enter-active,
.fade-leave-active
    transition opacity .4s linear
.fade-enter,
.fade-leave-to
    opacity 0
.pop-enter-active,
.pop-leave-active
    transition transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear
.pop-enter,
.pop-leave-to
    opacity 0
    transform scale(0.3) translateY(-50%)
</style>
