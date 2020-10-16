<template>
  <div>
    <section class="case">
      <b-container>
        <h3 class="text-center mt-5 mb-5">案例</h3>
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
    <section class="brand mt-5">
      <b-container>
        <h3 class="text-center mb-5">案例</h3>
        <b-row>
          <b-col>
            <img
              class="brand-picture"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg"
            />
          </b-col>
          <b-col class="brand-content">
            <h5>465asfd</h5>
            <p class="brand-text">
              广东雅洁五金有限公司（简称雅洁五金），始于1990年，近30年的传承与发展，专注高 端五金制品研发与生产。是一家集研发、生产、销售为一体的综合型企业，旗下拥有智能 安防、机械门锁、卫浴五金、门用五金、家具五金5大品类，旗舰店、专卖店和专柜遍及 中国市场，强大的销售网点覆盖中国90%的地级以上城市。同时远销欧美、中东和东南亚 等50多个国家和地区。
              雅洁五金位于中国广东佛山，占地面积近120000平方米。
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="news">
      <b-container></b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.case {
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
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
    transform: scale(1.2);
    overflow: hidden;
  }
  // &::after {
  //    content: '';
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
  }
  &-content {
    background-color: #fff;
    line-height: 2;
    margin-left: -15px;
    position: relative;
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
.news {
  background-color: #f5f5f5;
  &-item {
    &-content {
      padding:42px 25px;
    }
    &-picture {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
  }
}
</style>
