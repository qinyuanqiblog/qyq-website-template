<template>
  <div>
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      :ajaxData="ajaxData"
      :ajaxNameFn="ajaxNameFn"
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
</style>
