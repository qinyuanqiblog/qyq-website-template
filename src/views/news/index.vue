<template>
  <div>
    <websiteHeader />
    <articleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
    />
    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { articleList } from '@/components'
import { getQuery } from '@/utils'
import { commonMixin } from '@/mixins'
export default {
  name: 'newsIndex',
  mixins: [commonMixin],
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
