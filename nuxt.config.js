export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Task',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/style.scss",
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  // server: {
  //   port: 5000,
  //   host: '0.0.0.0'
  // },

  axios: {
    // Do away with the baseUrl when using proxy
    proxy: true,
   },
   proxy: {
     // Simple proxy
     "/api/": {
       target: "https://registry.npmjs.org/-/",
       pathRewrite: { "^/api/": "" }
     }
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
