<template>
  <div>
    <websiteHeader :showSearchBox="false" />
    <articleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
      :successHandle="successHandle"
    />

  </div>
</template>

<script>
import { systemApi } from '@/api'
import { getQuery } from '@/utils'
import { articleList } from '@/components'
export default {
  name: 'searchIndex',
  components: {
    articleList,
  },
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
      const json = getQuery(null)
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
