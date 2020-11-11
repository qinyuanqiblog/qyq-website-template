<template>
  <div>
    <websiteHeader />
    <websiteArticleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
    >
    </websiteArticleList>
    <websiteFooter />
  </div>
</template>

<script>
import { commonMixin } from '@/mixins'
export default {
  name: 'newsIndex',
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
</style>
