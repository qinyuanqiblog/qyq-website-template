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
    <searchBox v-if="showSearchBox" />
  </div>
</template>

<script>
export default {
  name: 'websiteChildHeader',
  components: {},
  props: {
    showSearchBox: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      bannerList: [
        {
          name: 111,
          image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3468384679,3521528174&fm=26&gp=0.jpg',
        },
      ],
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
