<template lang="pug">
  .main-swiper
    client-only
      swiper(:options="swiperOption")
        swiper-slide(v-for="item in items" :key="item.id")
          .s-img
            img(:src="item.img", alt="alt")
    .swiper-pagination(slot="pagination")
    .swiper-button-prev(slot="button-prev")
    .swiper-button-next(slot="button-next")
    .swiper-scrollbar(slot="swiper-scrollbar")
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: '/image/main/main1.jpg' },
        { img: '/image/main/main2.jpg' },
        { img: '/image/main/main3.jpg' },
      ],
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1.3,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        speed: 1000,
        spaceBetween: 40,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
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
  .s-img
    width 100%
    max-height 600px
    img
      width 100%
      height auto
      display flex
      justify-content center
      align-items center
  .swiper-pagination
    position: absolute
    bottom 0
    top auto
    left 0
    right 0
    margin auto
</style>
