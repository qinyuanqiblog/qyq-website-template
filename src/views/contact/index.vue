<template>
  <div class="about">
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      showType="product"
      :config="{
        title:'联系我们',
        breadcrumb:'联系我们',
      }"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
      </websiteSideBar>

      <div slot="right">
        <p class="text">{{ websiteConfig.aboutUs.brand.content }}</p>
        <baidu-map
          id="baidu-map"
          :ak="baiduConfig.ak"
          :center="baiduConfig.center"
          :zoom="baiduConfig.zoom"
          @ready="baiduReady"
        >
        </baidu-map>
      </div>
    </websiteArticleList>

    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { commonMixin } from '@/mixins'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'contactIndex',
  mixins: [commonMixin],
  components: {
    BaiduMap,
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {},
  },
}
</script>
<style lang="scss" scoped>
#baidu-map {
  width: 100%;
  height: 300px;
}
.text {
  text-indent: 2em;
}
@import url(~public/scss/media-750.scss);
</style>
