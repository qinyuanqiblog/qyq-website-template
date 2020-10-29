<template>
  <div class="about">
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      showType="product"
      :config="{
        title:'招贤纳士',
        breadcrumb:'招贤纳士',
      }"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
      </websiteSideBar>
      <div slot="right" v-html="content">
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
      systemApi
        .articleList({
          menuId: 10182,
          modelType: 1,
        })
        .then(res => {
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
</style>
