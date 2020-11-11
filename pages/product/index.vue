<template>
  <div>
    <websiteHeader />
    <websiteArticleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
      showType="product"
      :config="{
        title:'产品中心',
        breadcrumb:'产品中心',
      }"
    >
    </websiteArticleList>
    <websiteFooter />
  </div>
</template>

<script>
import { commonMixin } from '@/mixins'
export default {
  name: 'productIndex',
  mixins: [commonMixin],
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const json = this.$route.query
      const { menuId = '', modelType = '' } = json || {}
      this.ajaxData = {
        menuId,
        modelType,
      }
      this.ajaxNameFn = this.$systemApi.articleList
    },
  },
}
</script>
<style lang="scss" scoped>
.projects-list {
  .item {
    margin-bottom: 20px;
    &-text {
      text-align: center;
      margin-top: 10px;
    }
  }
  .gallery-image {
    width: 100%;
  }
}
</style>
