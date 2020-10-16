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
    <faithIntroduce />
    <aboutUs />
    <div class="youlian">
      <b-container>
        <div class="clearfix">
          <div class="fl div1 clearfix">
            <span class="fl">友情链接：</span>
            <p class="fl">
              <a
                href="http://www.5imoban.net"
                target="_blank"
              >网页模板</a><a href="">山东排水板</a><a href="">山东排水板</a><a href="">山东排水板</a><a href="">山东排水板</a><a href="">山东排水板</a>
            </p>
          </div>
        </div>
      </b-container>
    </div>
    <websiteFooter />
    <phoneService />
    <contactDialog />
    <contactSidebar />

  </div>
</template>

<script>
import {
  productIntroduce,
  productList,
  aboutUs,
  faithIntroduce,
  websiteFooter,
  phoneService,
  contactDialog,
  contactSidebar,
} from '@/components'
export default {
  name: 'index',
  components: {
    productIntroduce,
    productList,
    aboutUs,
    faithIntroduce,
    websiteFooter,
    phoneService,
    contactDialog,
    contactSidebar,
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

.youlian {
  padding: 20px 0 20px 0;
}
.youlian .div1 {
  margin-top: 10px;
}
.youlian .w1240 {
  position: relative;
}
.youlian span {
  color: #000;
  font-size: 18px;
}
.youlian p a {
  display: inline-block;
  width: 120px;
  color: #333;
  font-size: 14px;
  transition: all 0.36s;
  text-align: center;
}
.youlian p a:hover {
  color: #de0024;
  transform: translateX(5px);
}
.youlian .div2 ul {
  position: absolute;
  background: #333;
  right: 0;
  top: -97px;
  width: 120px;
  display: none;
  padding: 10px 0;
}
.youlian .div2 li a {
  text-align: center;
  display: block;
  color: #fff;
  font-size: 14px;
  padding: 5px 0;
}
.youlian .div2 h3 {
  background: #de0024;
  height: 30px;
  width: 120px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
}
.youlian .div2 h3 img {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
.youlian .div2 {
  margin-top: 10px;
}

.neibanner {
  width: 100%;
  overflow: hidden;
}
.neibanner img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
