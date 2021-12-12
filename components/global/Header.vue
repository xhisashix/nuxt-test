<template lang="pug">
.header
	header
		.logo
			a(href="/")
				p eLogs
		nav
			ul
				li(v-for="(list, index) in lists" :key="index")
					a(:href="list.link")
							p(v-html="list.txt")
		HumMenu
</template>

<script>
import HumMenu from '~/components/ui/HumMenu.vue'
export default {
  components: {
    HumMenu,
  },
  data() {
    return {
      lists: [
        { txt: 'Blog', link: 'https://pg-log.com/' },
        { txt: 'Contact', link: '/https://pg-log.com/contact/' },
      ],
      isShow: false,
    }
  },
}
</script>

<style lang="stylus">
.header
	width 100%
	border-bottom 1px solid #eee
	margin-bottom 30px
	background main-color
	position: fixed
	top 0
	left: 0
	z-index 100
	header
		max-width 1280px
		margin 0 auto
		display flex
		align-items center
		height 70px
		padding 10px 15px
		box-sizing border-box
		.logo
			a
				p
					font-size rem(32px)
					line-height rem(36px)
					color #fff
					font-weight bold
		nav
			margin-left auto
			ul
				display flex
				justify-content center
				align-items center
				li
					margin-left 20px
					padding 10px
					box-sizing border-box
					a
						p
							font-size rem(18px)
							line-height rem(24px)
							font-weight bold
</style>
