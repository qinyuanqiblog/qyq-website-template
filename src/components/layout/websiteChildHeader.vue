<template>
  <div>
    <websiteHeader />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      indicators
      class="swipe swipe__none"
    >
      <b-carousel-slide
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <img
          slot="img"
          class="swipe-picture"
          :src="item.image"
          alt=""
        >
      </b-carousel-slide>
    </b-carousel>
    <searchBox />
  </div>
</template>

<script>
export default {
  name: 'websiteChildHeader',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
