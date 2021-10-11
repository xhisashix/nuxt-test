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
      div(slot="pagination" class="swiper-pagination")
      div(slot="button-prev" class="swiper-button-prev")
      div(slot="button-next" class="swiper-button-next")
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
        slidesPerView: 1,
        loop: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  },
}
</script>

<style lang="stylus">
.main-swiper
  img
    width 100%
    height auto
    max-height 600px
</style>
