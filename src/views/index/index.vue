<template>
  <div>
    <websiteHeader />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      indicators
      class="swipe"
    >
      <b-carousel-slide
        v-for="(item, index) in bannerList"
        :key="index"
        :caption="item.name"
      >
        <img
          slot="img"
          class="swipe-picture"
          :src="item.image"
          alt=""
        >
      </b-carousel-slide>
    </b-carousel>
    <searchBox ref="searchBox" />
    <productIntroduce />
    <productList ref="productList" />
    <faithIntroduce @onShowContactDialog="onShowContactDialog" />
    <aboutUs />
    <websiteNews ref="websiteNews" />
    <websiteFooter ref="websiteFooter" />
    <contactDialog ref="contactDialog" />
    <contactSidebar />

  </div>
</template>

<script>
import { productIntroduce, productList, aboutUs, faithIntroduce, contactDialog, contactSidebar } from '@/components'
import { systemApi } from '@/api'
export default {
  name: 'index',
  components: {
    productIntroduce,
    productList,
    aboutUs,
    faithIntroduce,
    contactDialog,
    contactSidebar,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      userId: window.sessionStorage.userId,
      productData: {},
      menuInfo: {},
      bannerList: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getIndexInfo()
      this.getBaseInfo()
      this.getBannerList()
    },
    getBannerList() {
      systemApi.bannerList().then((res = {}) => {
        this.bannerList = res.banners || {}
      })
    },
    getBaseInfo() {
      systemApi.info().then((res = {}) => {
        this.$refs.searchBox.list = (res.info.keyword && res.info.keyword.split('|').splice(0, 4)) || []
        this.$refs.websiteFooter.baseInfo = res.info || {}
      })
    },
    getIndexInfo() {
      systemApi.index({ userId: this.userId }).then((res = {}) => {
        this.productData = res
        this.$refs.productList.list = res.productAll.splice(0, 9) || []
        this.$refs.websiteNews.list = res.newsClass || []
      })
    },
    onShowContactDialog(type = 'contact') {
      switch (type) {
        case 'contact':
          this.$refs.contactDialog.show = true

          break
        case 'phone':
          this.$refs.contactDialog.showPhoneBar = true
          break
        default:
          console.log('默认啥都没处理~')
          break
      }
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
