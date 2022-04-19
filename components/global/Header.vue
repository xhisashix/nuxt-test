<template lang="pug">
.header
	header
		.logo
			img(src="image/logo.svg", alt="alt")
		nav
			ul
				li
					a(href="https://pg-log.com/" target="_blank") BLOG
				li
					a(href="https://pg-log.com/contact" target="_blank") CONTACT
</template>

<script>
</script>

<style lang="stylus">
.header
	padding 10px 20px
	background: #fff
	header
		display: flex
		align-items: center
		justify-content: flex-start
		max-width: 1200px
		margin 0 auto
		nav
			margin-left: auto
			ul
				display: flex
				align-items: center
				li
					margin-left: 30px
</style>
