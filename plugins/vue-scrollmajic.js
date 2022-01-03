import Vue from 'vue'
import Scrollmagic from '~/components/ui/Scrollmagic'

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const ScrollMagic = require('scrollmagic')
  Vue.mixin({
    computed: {
      $smController() {
        return new ScrollMagic.Controller()
      },
      $sm() {
        return ScrollMagic
      },
    },
  })
}

Vue.component('Scrollmagic', Scrollmagic)