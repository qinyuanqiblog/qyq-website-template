<template>
  <div>
    <section class="case pt-5 pb-5">
      <b-container>
        <h3 class="text-center">产品<span class="qyq-title-default">案例</span></h3>
        <b-row>
          <b-col cols="3">
            <div class="case-item">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg"
                class="case-item-picture"
                alt=""
              >
              <p class="case-item-text">搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的搞死你丫的</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="brand">
      <b-container>
        <h3 class="text-center mb-5">品牌<span class="qyq-title-default">文化</span></h3>
        <b-row>
          <b-col>
            <img
              class="brand-picture"
              src="~public/images/brand-logo.png"
            />
          </b-col>
          <b-col class="brand-content">
            <h5 class="">{{ brand.title }}</h5>
            <p class="brand-text">{{ brand.content }}</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  components: {},
  data() {
    return {
      brand: {},
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.case {
  display: none;
  background-color: #f5f5f5;

  &-title {
    padding: 20px 0;
  }
  &-item {
    padding: 0 0 5px;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    &-picture {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    &-text {
      padding: 15px 10px 0;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1.5;
      height: 60px;
      @include lineClamp(3);
    }
  }
}
.brand {
  position: relative;
  overflow: hidden;
  padding-top: 60px;
  // padding-bottom: 10px;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '';
    // background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg);
    background-image: url(~public/images/brand-logo.png);
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
    transform: scale(1.2);
    overflow: hidden;
  }
  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   background: rgba(0, 0, 0, 0.5);
  // }
  &-picture {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  &-text {
    margin-top: 20px;
    color: #666;
    height: 300px;
    overflow: hidden;
  }
  &-content {
    font-size: 14px;
    background-color: #fff;
    line-height: 2;
    margin-left: -15px;
    position: relative;
    padding: 30px 30px;
    max-height: 400px;
    overflow: hidden;
    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
      height: 1px;
      background-color: #000;
    }
  }
}
</style>
