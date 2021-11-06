<template lang="pug">
  .main-swiper
    client-only
      swiper(:options="swiperOption")
        swiper-slide
          img(src="/image/main/main1.jpg", alt="alt")
        swiper-slide
          img(src="/image/main/main2.jpg", alt="alt")
        swiper-slide
          img(src="/image/main/main3.jpg", alt="alt")
    .swiper-pagination(slot="pagination")
    .swiper-button-prev(slot="button-prev")
    .swiper-button-next(slot="button-next")
    .swiper-scrollbar(slot="swiper-scrollbar")
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.5,
        loop: true,
        effect: 'cards',
        speed: 1000,
        spaceBetween: 40,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
    }
  },
}
</script>

<style lang="stylus">
.main-swiper
  position relative
  padding 20px 0
  img
    width 100%
    height auto
    max-height 600px
  .swiper-pagination
    position: absolute
    bottom 0
    top auto
    left 0
    right 0
    margin auto
</style>
