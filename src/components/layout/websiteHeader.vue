<template>
  <div>
    <b-container
      fluid
      class="nav-top"
    >
      <b-container>
        <b-row class="nav-top-header" align-v="center">
          <b-col
            lg="6"
            md="12"
          >
            <h6>您好，欢迎光临<span class="text-danger">{{ companyInfo.name }}</span>官网</h6>
          </b-col>
          <b-col
            lg="6"
            md="12"
            class="line"
          >
            <div class="online">在线电话：
              <h3 class="nav-top-phone">{{ companyInfo.phone }}</h3>
            </div>
          </b-col>
          <b-col
            lg="6"
            md="12"
            class="line-sm line"
          >在线电话：
            <h3 class="nav-top-phone">{{ companyInfo.phone }}</h3>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <div class="qyq-navbar">
      <b-container class="navbar-container">
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#"><h1>{{  companyInfo.name }}</h1></b-navbar-brand>
          <!-- <b-navbar-brand href="#">
            <img
              src="https://placekitten.com/g/30/30"
              class="d-inline-block align-top"
              alt="Kitten"
            >
            {{  companyInfo.name }}
          </b-navbar-brand> -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse
            id="nav-collapse"
            is-nav
          >
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <ul class="navbar-main">
                <li
                  v-for="(item, index) in menuInfo"
                  :key="index"
                  class="navbar-main-item"
                >
                  <a
                    class="navbar-main-item-link"
                    :href="item.href"
                  >{{ item.name }}</a>
                  <ul
                    v-if="item.newsMenu"
                    class="navbar-main-item-menu"
                  >
                    <li
                      v-for="(current, currentIndex) in item.newsMenu"
                      :key="currentIndex"
                    >
                      <a
                        class="navbar-main-item-menu-link"
                        :href="current.href"
                      >{{ current.name }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      indicators
      class="swipe"
    >
      <b-carousel-slide
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <img
          slot="img"
          class="swipe-picture"
          :src="item.image"
          alt="轮播图"
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { systemApi } from '@/api'
export default {
  name: 'websiteHeader',
  components: {},
  data() {
    return {
      menuInfo: [],
      bannerList: [],
      companyInfo: {},
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getMenu()
      this.getBannerList()
    },
    getMenu() {
      systemApi.menuTree().then((res = {}) => {
        this.menuInfo = res
      })
    },
    getBannerList() {
      systemApi.bannerList().then((res = {}) => {
        this.bannerList = res.banners || {}
      })
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  background-color: #444;
}
.line {
  .online{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.line-sm {
  display: none;
  padding-left: 70px;
}
.nav-top {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  font-size: 12px;
  &-phone {
    color: $themeColor;
  }
}
.qyq-navbar {
  .navbar {
    padding: 0;
  }
  .navbar-main {
    display: flex;
    .navbar-main-item-menu {
      display: none;
      position: absolute;
      top: 68px;
      box-shadow: none;
      text-transform: capitalize;
      border-top: solid 2px $themeColor;
      left: 50%;
      transform: translate(-50%);
      margin: 0;
      background-color: #fff;
      z-index: 10;
      &-link {
        display: block;
        width: 150px;
        margin: 5px;
        height: 46px;
        line-height: 46px;
        color: #777;
        text-shadow: none;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        text-align: center;
        overflow: hidden;
        &:hover {
          background: $themeColor;
          color: #fff;
        }
      }
    }
    &-item {
      position: relative;
      text-shadow: none;
      transition: all 0.3s ease-in-out;
      // background: #000;
      &-link {
        display: block;
        padding: 7px 15px;
        margin: 15px 5px;
        border-radius: 3px;
      }
      &:hover {
        text-decoration: none;
        .navbar-main-item-menu {
          display: block;
        }
        .navbar-main-item-link {
          background: $themeColor;
          color: #fff;
        }
      }
      a {
        color: #777;
        text-decoration: none;
      }
    }
  }
}
.nav-top-header {
  font-size: 16px;
}

.pull_all {
  padding-top: 0px;
  height: 120px;
}
.pull_all img {
  float: left;
}
.pull_all p {
  color: #333;
  font-size: 16px;
  line-height: 30px;
  margin-top: 30px;
  letter-spacing: 1px;
  display: block;
}
.pull_all p span {
  color: #88d236;
  font-weight: bold;
}
.pull_all .imseg {
  margin: 8px 0 0 20px;
}
.in_all span {
  font-size: 25px;
  color: #d70a00;
  letter-spacing: 1px;
  display: block;
  font-weight: bold;
}
.in_all p {
  color: #333;
  font-size: 15px;
  margin: 0;
  line-height: 32px;
  margin-top: 5px;
  padding-right: 25px;
}
</style>
