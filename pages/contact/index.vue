<template>
  <div class="about">
    <websiteHeader />
    <websiteArticleList
      showType="product"
      :config="{
        title:'联系我们',
        breadcrumb:'联系我们',
      }"
    >
      <div slot="right">
        <p class="text">{{ baseInfo.brandContent }}</p>
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

    <websiteFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { commonMixin } from '@/mixins'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'contactIndex',
  mixins: [commonMixin],
  components: {
    BaiduMap,
  },
  computed: {
    ...mapState({
      baseInfo: (state) => state.baseInfo,
    }),
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
</style>
