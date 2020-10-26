<template>
  <div>
    <websiteHeader />
    <articleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
    />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { articleList } from '@/components'
import { getQuery } from '@/utils'
export default {
  name: 'newsIndex',
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
      const { menuId = '10158', modelType = '2' } = json || {}
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
</style>
