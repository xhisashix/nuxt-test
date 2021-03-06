export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    base: '/',
  },

  head: {
    title: "Hisashi's Portfolio",
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src : './assets/stylus/setcss.styl' },
    {
      src: '~/node_modules/highlight.js/styles/tomorrow-night-bright.css',
      lang: 'css'
    },
  ],

  styleResources: {
    stylus: './assets/stylus/set.styl',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper', mode: 'client' },
    { src: '~/plugins/persistedState.client.js' },
    { src: '~/plugins/constants.js' },
    { src: '~/plugins/vue-tooltip.js', mode: 'client' },
    { src: '~/plugins/vue-scrollmajic.js', mode: 'client' },
    { src: '~/plugins/color-picker.js', mode: 'client' },
    { src: '~/plugins/vue-highlightjs.js', mode: 'client'},
    { src: '~/plugins/vue-fullpage.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
