<template>
  <div>
    <websiteHeader ref="websiteHeader" />
    <articleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
      showType="product"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
        <h3 slot="title">产品中心<b>PRODUCT CENTER</b></h3>
      </websiteSideBar>
    </articleList>
    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { articleList } from '@/components'
import { getQuery } from '@/utils'
import { commonMixin } from '@/mixins'
export default {
  name: 'productIndex',
  mixins: [commonMixin],
  components: {
    articleList,
  },
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
      const json = getQuery(null)
      const { menuId = '10186', modelType = '3' } = json || {}
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
