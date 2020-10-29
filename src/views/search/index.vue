<template>
  <div class="search">
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
      :successHandle="successHandle"
      :config="config"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
      </websiteSideBar>
      <div
        slot="right-header"
        class="header"
      >全站搜索结果：产品：{{ searchInfo.productCount }}个,新闻：{{ searchInfo.newsCount }}个</div>
      <b-row
        class="product"
        slot="right-top"
      >
        <b-col
          cols="4"
          class="mb-3 product-list-item"
          v-for="(item, index) in searchInfo.products"
          :key="index"
        >
          <a :href="`detail.html?modelType=${ item.modelType}&articleId=${ item.id}`">
            <img
              width="100%"
              :src="item.image"
              alt="搜索的背景图"
            >
            <div class="text-center mt-2">{{ item.title }}</div>
          </a>
        </b-col>
      </b-row>
    </websiteArticleList>
    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { commonMixin } from '@/mixins'
export default {
  name: 'searchIndex',
  mixins: [commonMixin],
  data() {
    return {
      list: [],
      ajaxData: {},
      ajaxNameFn: '',
      config: {},
      searchInfo: {},
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const json = this.$getQuery(null)
      const keyword = decodeURIComponent(json.keyword)
      const breadcrumb = `全站搜索 > ${keyword}`
      this.config = {
        title: keyword,
        breadcrumb,
      }
      this.keyword = keyword
      this.ajaxData = {
        keyword,
      }
      this.ajaxNameFn = systemApi.search
    },
    successHandle(res) {
      const news = res.news || []
      // const products = res.products || []
      this.searchInfo = res
      return news
    },
  },
}
</script>
<style lang="scss" scoped>
.search {
}
.header {
  background-color: #ccc;
  color: #ffff;
  padding: 10px;
}
.product {
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  img {
    height: 150px;
    object-fit: contain;
    background-color: #444;
  }
}
</style>
