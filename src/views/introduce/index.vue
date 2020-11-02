<template>
  <div class="about">
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      showType="product"
      :config="config"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
      </websiteSideBar>
      <div
        slot="right"
        v-html="content"
      >
      </div>
    </websiteArticleList>

    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { commonMixin } from '@/mixins'
export default {
  name: 'introduceIndex',
  mixins: [commonMixin],
  data() {
    return {
      config: {},
      content: '',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getInfo()
    },
    getInfo() {
      const json = this.$getQuery(null)
      const { menuId = '', modelType = '' } = json || {}
      systemApi
        .articleList({
          menuId,
          modelType,
        })
        .then(res => {
          const title = (res.rows && res.rows[0].title) || ''
          this.config = {
            title: title,
            breadcrumb: title,
          }
          this.content = (res.rows && res.rows[0].content) || ''
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.text {
  text-indent: 2em;
}
@import url(~public/scss/media-750.scss);
</style>
