// import { formatDate } from './utils'

// 打包后的文件名，如果是一个服务下部署多个目录，则需要修改哦
const generateDir = 'dist'
const lastmod = '2020-10-11'

export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  //
  router: {
    base:  process.env.NODE_ENV === 'development' ? '/' : '/' + generateDir,
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/index.html.vue')
      })
    }
  },
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  middleware: "skeleton",
  // Global CSS (https://go.nuxtjs.dev/config-css)

  css: [
    '~assets/scss/search.scss',
    '~assets/scss/websiteConfig.scss',
    '~assets/scss/media-750.scss',
  ],



  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // {
    //   src: '~/plugins/axios.js',
    //   ssr: false
    // },
    '~/plugins/axios.js',
    '~/plugins/vue-global.js',
    // {
    //   src: '~/plugins/vuex-persistedstate.js',
    //   ssr: false
    // },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    // With options
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  // tree Shake 引入 bootstrapVue
  // https://bootstrap-vue.org/docs/#nuxtjs-module
  bootstrapVue: {
    componentPlugins:[
      'LayoutPlugin',
      'ToastPlugin',
      'ModalPlugin',
    ],
    components: [
      // 'BContainer',
      // 'BRow',
      // 'BCol',
      'BFormInput',
      'BButton',
      'BTable',
      'BModal',
      'BCollapse',
      'BNavbar',
      'BNavbarNav',
      'BNavbarBrand',
      'BNavbarToggle',
      'BCarousel',
      'BCarouselSlide',
      'BFormTextarea',
      ],
    directives: [],
    icons: true,
  },
  sitemap:{
    hostname: 'http://211.149.157.233:9090/',
    lastmod,
    defaults: {
      // 更新频率
      changefreq: 'daily',
      // 权重
      priority: 0.5,
      // 上次修改时间
      lastmod,
    },
  },
  styleResources: {
    // your settings here
    scss: [
      '~assets/scss/variable.scss',
      '~assets/scss/mixin.scss',
    ],
   },


  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // proxy: true,
    // baseURL: 'http://211.149.157.233:9090'
  },
  proxy: [
    [
      '/system',
      {
        target: 'http://211.149.157.233:9090/', // api主机
        pathRewrite: { '^/system' : '/system' }
      }
  ]
],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    cssSourceMap:false,
    extractCSS: true,
    // publicPath: 'static' // 默认文件夹叫_nuxt
  },
  target: 'static',
  static: {
    prefix: false
  },
  generate: {
    dir: generateDir, // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  }
}
