<template>
  <div>
    <b-container
      fluid
      class="nav-top"
    >
      <b-container>
        <b-row>
          <b-col>您好，欢迎光临{{ companyInfo.name }}官网</b-col>
          <b-col class="text-right">在线电话电话：
            <span class="nav-top-phone">{{ companyInfo.phone }}</span>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <div class="qyq-navbar">
      <b-container class="navbar-container">
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">{{  companyInfo.name }}</b-navbar-brand>

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
        :caption="item.name"
      >
        <img
          slot="img"
          class="swipe-picture"
          :src="item.image"
          alt=""
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
      companyInfo:  {},
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
.nav-top {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  font-size: 12px;
  &-phone {
    color: #da251d;
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
      border-top: solid 2px #ff5555;
      left: 50%;
      transform: translate(-50%);
      margin: 0;
      background-color: #fff;
      z-index: 10;
      &-link {
        display: block;
        width: 118px;
        margin: 5px;
        padding: 7px 15px;
        color: #777;
        text-shadow: none;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #ff5555;
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
          background: #ff5555;
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
</style>
