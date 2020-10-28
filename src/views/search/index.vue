<template>
  <div>
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
      :successHandle="successHandle"
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
  name: 'searchIndex',
  mixins: [commonMixin],
  data() {
    return {
      list: [],
      ajaxData: {},
      ajaxNameFn: '',
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const json = this.$getQuery(null)
      const keyword = decodeURIComponent(json.keyword)
      this.keyword = keyword
      this.ajaxData = {
        keyword,
      }
      this.ajaxNameFn = systemApi.search
    },
    successHandle(res) {
      const news = res.news || []
      const products = res.products || []
      this.searchInfo = res
      return news.concat(products)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
