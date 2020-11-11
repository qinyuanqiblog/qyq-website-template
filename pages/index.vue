<template>
  <div>
    <websiteHeader />
    <searchBox />
    <productIntroduce />
    <productList />
    <faithIntroduce
      @onShowContactDialog="onShowContactDialog"
    />
    <aboutUs />
    <websiteNews />
    <processList />
    <websiteFooter />
    <contactDialog />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {
  productIntroduce,
  productList,
  aboutUs,
  faithIntroduce,
  contactDialog,
  processList,
} from '@/components'
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
  computed: {
    ...mapState({
      baseInfo: (state) => state.baseInfo,
    }),
  },
  data() {
    return {}
  },
  async asyncData({ app, store }) {
    const res = await app.$systemApi.index()
    store.commit('SET_INDEX_PAGE_DATA', res)
  },
  methods: {
    init() {
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
    ...mapMutations(['SET_INDEX_PAGE_DATA']),
  },
}
</script>
<style lang="scss">
</style>
