<template lang="pug">
.header
	header
		.logo
			a(href="/")
				img(src="/image/common/facebook_cover_photo_1.png", alt="alt")
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
				{ txt: 'Product', link: "/product" },
				{ txt: 'About', link: '/about' },
				{ txt: 'Store', link: '/store' },
			],
		}
	},
}
</script>

<style lang="stylus">
.header
	width 100%
	header
		max-width 1280px
		margin 0 auto
		display flex
		align-items center
		padding 10px 15px
		box-sizing border-box
		.logo
			a
				img
					width 150px
					height auto
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
