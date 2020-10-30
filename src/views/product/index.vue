<template>
  <div>
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
      showType="product"
      :config="{
        title:'产品中心',
        breadcrumb:'产品中心',
      }"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
      </websiteSideBar>
    </websiteArticleList>
    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
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
      const json = this.$getQuery(null)
      const { menuId = '', modelType = '' } = json || {}
      this.ajaxData = {
        menuId,
        modelType,
      }
      this.ajaxNameFn = systemApi.articleList
    },
  },
}
</script>
<style lang="scss" scoped>
@import url(~public/scss/media-750.scss);
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
