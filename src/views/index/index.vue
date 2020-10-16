<template>
  <div>
    <websiteHeader />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      indicators
      class="swipe"
    >
      <b-carousel-slide caption="First slide">
        <img
          slot="img"
          class="swipe-picture"
          src="http://www.templatesy.com/demo/473/images/home-02.jpg"
          alt=""
        >
      </b-carousel-slide>
      <b-carousel-slide caption="Second Slide">
        <img
          slot="img"
          class="swipe-picture"
          src="http://www.templatesy.com/demo/473/images/home.jpg"
          alt=""
        >
      </b-carousel-slide>
    </b-carousel>
    <searchBox />
    <productIntroduce />
    <productList />
    <faithIntroduce/>
    <aboutUs />

    <div style="height:200px"></div>
  </div>
</template>

<script>
import { productIntroduce, productList, aboutUs ,faithIntroduce} from '@/components'
export default {
  name: 'index',
  components: {
    productIntroduce,
    productList,
    aboutUs,
    faithIntroduce,
  },
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>
<style lang="scss" scoped>
.swipe {
  &-picture {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
}

</style>
