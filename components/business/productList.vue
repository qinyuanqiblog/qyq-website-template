<template>
  <b-container class="product-list mt-lg-5 mb-5">

    <h3 class="text-center mb-5">产品<span class="qyq-title-default">展示</span></h3>
    <b-row>
      <b-col
        :md="4"
        sm="6"
        class="mb-3 product-list-item"
        v-for="(item, index) in productListArray"
        :key="index"
      >
        <a :href="`detail?modelType=${ item.modelType}&articleId=${ item.id}`">
          <img
            class="product-list-picture"
            :src="item.image"
            alt="产品列表图片"
          >
          <div class="text-center mt-2">{{ item.title }}</div>
        </a>
      </b-col>
    </b-row>
    <!-- 查看大图 -->
    <b-modal
      id="bigModal"
      title="查看大图"
    >
      <img
        class="big-picture"
        :src="current.image"
        alt="查看大图"
      >
    </b-modal>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'productList',
  components: {},
  computed: {
    ...mapGetters(['productListArray']),
  },
  data() {
    return {
      current: {},
    }
  },
  created() {},
  methods: {
    onShowBigPicture(item = {}) {
      this.current = item
      this.$bigModal.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  img {
    background-color: #444;
  }
  &-item {
    // padding-left: 0;
  }
  &-picture {
    width: 100%;
    height: 200px;
    border-radius: 4px;
  }
  .big-picture {
    width: 80%;
    max-height: 600px;
  }
}
</style>
