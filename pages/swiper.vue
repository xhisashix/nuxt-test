<template lang="pug">
.page-swiper
  client-only
    swiper(:options="swiperOption")
      swiper-slide Slide 1
      swiper-slide Slide 2
      swiper-slide Slide 3
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
</style>
