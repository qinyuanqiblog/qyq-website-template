import websiteConfig from '../vue-env'
export default {
  async fetch({ app, store }) {
    const array = [
      app.$systemApi.menuTree(),
      app.$systemApi.bannerList(),
      app.$systemApi.info(),
      app.$systemApi.insidePageData(),
    ]
    let [menuTree, bannerList, baseInfo, commonData ] = await Promise.all(array)
    const info = baseInfo.info || {}
    info.address = websiteConfig.websiteFooter.address
    info.brandContent = websiteConfig.aboutUs.brand.content
    store.commit('SET_MENU_LIST', menuTree)
    store.commit('SET_BANNER_LIST', bannerList.banners)
    store.commit('SET_BASE_INFO', info)
    store.commit('SET_COMMON_DATA', commonData)

    // 设置meta
    this.head = function() {
      return {
        title: info.seoTitle || info.name,
        meta: [
          {
            charset: 'utf-8'
          },
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: info.seoKeywords
          },
          {
            hid: 'description',
            name: 'description',
            content: info.seoDescription
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
      }
    }
  },
  data() {
    return {
      baiduConfig:{
        ak:'BkqwvFyXiHg7S9Gc3GAF1lCkrHhAHXYH',
        center:{lng: 0, lat: 0},
        zoom:15,
      },
    }
  },
  mounted() {
  },
  methods: {

    baiduReady () {
      this.baiduConfig.center.lng = this.$store.state.baseInfo.longitude
      this.baiduConfig.center.lat = this.$store.state.baseInfo.latitude
      // this.baiduConfig.center.lng = 116.404
      // this.baiduConfig.center.lat = 39.915
      // this.zoom = 15
    }
  },
}
