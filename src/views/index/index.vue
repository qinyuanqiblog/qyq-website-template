<template>
  <div>
    <websiteHeader ref="websiteHeader" />
    <searchBox ref="searchBox" />
    <productIntroduce />
    <productList ref="productList" />
    <faithIntroduce
      ref="faithIntroduce"
      @onShowContactDialog="onShowContactDialog"
    />
    <aboutUs ref="aboutUs" />
    <websiteNews ref="websiteNews" />
    <processList />
    <websiteFooter ref="websiteFooter" />
    <contactDialog ref="contactDialog" />
  </div>
</template>

<script>
import { productIntroduce, productList, aboutUs, faithIntroduce, contactDialog, processList } from '@/components'
import { systemApi } from '@/api'
import { commonMixin } from '@/mixins'
export default {
  name: 'index',
  mixins: [commonMixin],
  components: {
    productIntroduce,
    productList,
    aboutUs,
    faithIntroduce,
    contactDialog,
    processList,
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getIndexInfo()
    },
    getIndexInfo() {
      systemApi.index().then((res = {}) => {
        this.$refs.productList.list = res.productAll.splice(0, 9) || []
        this.$refs.websiteNews.list = res.newsClass || []
      })
    },
    onShowContactDialog(type = 'contact') {
      switch (type) {
        case 'contact':
          this.$refs.contactDialog.show = true
          break
        case 'phone':
          this.$refs.contactDialog.showPhoneBar = true
          break
        default:
          console.log('默认啥都没处理~')
          break
      }
    },
  },
}
</script>
<style lang="scss">
@import url(~public/scss/media-750.scss);
</style>
