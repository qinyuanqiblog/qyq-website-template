<template>
  <div class="about">
    <websiteHeader />
    <websiteArticleList
      showType="product"
      :config="config"
    >
      <div
        slot="right"
        v-html="content"
      >
      </div>
    </websiteArticleList>

    <websiteFooter />
  </div>
</template>

<script>
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
      const json = this.$route.query
      const { menuId = '', modelType = '' } = json || {}
      this.$systemApi
        .articleList({
          menuId,
          modelType,
        })
        .then(res => {
          const title = (res.rows && res.rows[0] && res.rows[0].title) || ''
          this.config = {
            title: title,
            breadcrumb: title,
          }
          this.content = (res.rows && res.rows[0] &&  res.rows[0].content) || ''
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.text {
  text-indent: 2em;
}
</style>
