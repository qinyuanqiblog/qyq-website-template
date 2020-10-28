<template>
  <b-container class="product-list mt-lg-5 mb-5">

    <h3 class="text-center mb-5">产品<span class="qyq-title-default">展示</span></h3>
    <b-row>
      <b-col
        cols="4"
        class="mb-3 product-list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <a :href="`detail.html?modelType=${ item.modelType}&articleId=${ item.id}`">
          <img
            class="product-list-picture"
            :src="item.image"
            alt=""
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
        alt=""
      >
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: 'productList',
  components: {},
  data() {
    return {
      list: [],
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
    padding-left: 0;
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
