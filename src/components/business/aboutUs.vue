<template>
  <div>
    <section class="case pt-5 pb-5">
      <b-container>
        <h3 class="text-center">产品案例</h3>
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
        <h3 class="text-center mb-5">品牌文化</h3>
        <b-row>
          <b-col>
            <img
              class="brand-picture"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg"
            />
          </b-col>
          <b-col class="brand-content">
            <h5 class="">465asfd</h5>
            <p class="brand-text">
              福滨红木家具主营越南黄花梨、大红酸枝、缅甸草花梨、小叶紫檀红木家具、豪华电动餐桌、火锅桌专业定制，是红木古典家具知名品牌。产品品种齐全、品质可靠，造型典雅高贵，定位大众市场，致力于让高档家居走进普通百姓家。

              本厂拥有流的技工人才。和先进的生产设备，是一家集设计开发、生产制造、销售及售后服务于一体的红木古典家具厂家。本企业精选优质名贵木材，每一件产品从设计、开料、木工、雕花、打磨再到油漆，都经过严格的操作程序，精雕细琢、典雅大方。产品主要分为客厅、餐厅、套房、书房等系列，传统与现代相结合的风格，深得广大客户依赖和喜爱。本厂秉承“为商以德、诚信为本;谋利有度、货真价实”的经营理念，在未来发展的道路上，将继续深入市场，进一步了解市场需求，研究市场发展趋势。
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="news">
      <b-container>
        <h3 class="mb-5 text-center">新闻</h3>
        <b-row>
          <!-- <b-col class="news-item mr-3">
            <div class="news-item-content">
              <h5>打发打发啊司法所大萨达</h5>
              <p class="mt-3 mb-3">大发来端口放假啊快乐圣诞节发卡拉就是叼了副科级阿卡里数据发拉可视对讲风流夸堕髻阿里可视对讲卡顿</p>
              <p>阿斯顿发生</p>
            </div>
            <img
              class="news-item-picture"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg"
              alt=""
            >
          </b-col>
          <b-col class="news-item mr-3">
            <div class="news-item-content">
              <h5>打发打发啊司法所大萨达</h5>
              <p class="mt-3 mb-3">大发来端口放假啊快乐圣诞节发卡拉就是叼了副科级阿卡里数据发拉可视对讲风流夸堕髻阿里可视对讲卡顿</p>
              <p>阿斯顿发生</p>
            </div>
            <img
              class="news-item-picture"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602756906531&di=3d5e17a06b43dd48d9d2cb2f180738cc&imgtype=0&src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20190704%2F20190704074010_0a2d3bf280b0a3df5ec289cbc8ab223c_1.jpeg"
              alt=""
            >
          </b-col> -->
          <b-col class="news-item">
            <ul class="news-item-content">
              <li
                v-for="(item, index) in insidePageData.newsData"
                :key="index"
                class="news-item-content-current"
              ><a
                  class="news-item-content-current-link"
                  href=""
                >{{ item.describes }}</a></li>
            </ul>
          </b-col>
          <!-- <b-col cols="5"></b-col> -->
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { systemApi } from '@/api'
export default {
  name: 'aboutUs',
  components: {},
  data() {
    return {
      insidePageData: {},
      list: [],
    }
  },
  created() {
    systemApi.insidePageData().then((res = {}) => {
      this.insidePageData = res
    })
  },
  methods: {

  },
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
.news {
  display: none;
  background-color: #f5f5f5;
  overflow: hidden;
  padding: 45px 0;
  &-item {
    background-color: #fff;
    border-radius: 4px;
    &-content {
      padding: 42px 10px;
      &-current {
        position: relative;
        transition: all 0.36s;
        margin: 10px 0;
        @include lineClamp(1);
        padding-left: 15px;
        &:hover {
          transform: translateX(10px);
        }
        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
          content: '';
          width: 5px;
          height: 5px;
          background-color: red;
          border-radius: 50%;
        }
        &-link {
          text-decoration: none;
          overflow: hidden;
          color: #000;
        }
      }
    }
    &-picture {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
  }
}
</style>
