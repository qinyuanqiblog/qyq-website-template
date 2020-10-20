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
    <searchBox />
    <productIntroduce />
    <productList ref="productList" />
    <faithIntroduce />
    <aboutUs />
    <websiteNews ref="websiteNews" />
    <websiteFooter ref="websiteFooter" />
    <contactDialog />
    <contactSidebar />

  </div>
</template>

<script>
import {
  productIntroduce,
  productList,
  aboutUs,
  faithIntroduce,
  websiteFooter,
  contactDialog,
  contactSidebar,
  websiteNews,
} from '@/components'
import { systemApi } from '@/api'
export default {
  name: 'index',
  components: {
    productIntroduce,
    productList,
    aboutUs,
    faithIntroduce,
    websiteFooter,
    contactDialog,
    contactSidebar,
    websiteNews,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      userId: window.sessionStorage.userId,
      productData: {},
      baseInfo: {},
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
        this.baseInfo = res
        this.$refs.websiteFooter.baseInfo = res.info || {}

      })
    },
    getIndexInfo() {
      systemApi.index({ userId: this.userId }).then((res = {}) => {
        this.productData = res
        this.$refs.productList.list = res.productAll || []
        this.$refs.websiteNews.list = res.newsClass || []
      })
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
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
.swipe {
  &-picture {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
}
</style>
