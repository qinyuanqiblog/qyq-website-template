<template>
  <b-container class="product-list mt-lg-5 mb-5">
    <h3 class="text-center mb-5">产品展示</h3>
    <b-row>
      <b-col
        cols="4"
        class="mb-3 product-list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          class="product-list-picture"
          :src="item.image"
          alt=""
        >
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'productList',
  components: {},
  data() {
    return {
      list: [],
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.product-list {
  &-item{
    padding-left: 0;
  }
  &-picture {
    width: 100%;
    height: 200px;
  }
}
</style>
