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
</template>

<script>
export default {
	data() {
		return {
			lists: [
				{ txt: 'Home', link: '/home' },
				{ txt: 'Axios', link: "/axios" },
				{ txt: 'Search', link: '/search' },
				{ txt: 'Store', link: '/store' },
			],
		}
	},
}
</script>

<style lang="stylus">
.header
	width 100%
	border-bottom 1px solid #eee
	margin-bottom 30px
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
		nav
			margin-left auto
			ul
				display flex
				justify-content center
				align-items center
				li
					margin-left 20px
					a
						p
							font-size rem(18px)
							line-height 24px
</style>
