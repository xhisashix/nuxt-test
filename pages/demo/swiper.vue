<template lang="pug">
.page-swiper
  vue-swiper
</template>

<script>
import VueSwiper from '~/components/ui/VueSwiper.vue'
export default {
  components : {
    VueSwiper
  },
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
