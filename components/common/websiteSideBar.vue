<template>
  <div>
    <div
      v-for="(item, index) in sideBarObject.list"
      :key="index"
      :class="{
        'div1': item.showType === 'menu',
        'div1 div3': item.showType === 'list',
      }"
    >
      <template v-if="item.showType === 'menu'">
        <div class="casetit">
          <slot name="title">
            <h3>产品中心<b>PRODUCT CENTER</b></h3>
          </slot>
        </div>
        <ul class="ul1">
          <li
            class="ul1-item"
            v-for="(childItem, childIndex) in item.childrenList"
            :key="childIndex"
          >
            <a :href="`product?modelType=${ childItem.modelType}&menuId=${ childItem.id}`">
              <i v-if="childItem.haveChild !== '0'"></i>
              {{ childItem.name }}
            </a>
            <div
              v-if="childItem.newsMenu"
              class="ul1-child"
            >
              <a
                v-for="(secondItem, secondIndex) in childItem.newsMenu"
                :key="secondIndex"
                class="ul1-child-link"
                :href="`product?modelType=${ secondItem.modelType}&menuId=${ secondItem.id}`"
              >
                <i v-if="secondItem.haveChild !== '0'"></i>
                {{ secondItem.name }}
              </a>
            </div>
          </li>
        </ul>
      </template>
      <template v-if="item.showType === 'list'">
        <div class="casetit">
          <slot name="title">
            <h3>{{ item.title }}<b>NEWS CENTER</b></h3>
          </slot>
        </div>
        <div class="div3-box">
          <ul class="ul3">
            <li
              v-for="(childItem, childIndex) in item.childrenList"
              :key="childIndex"
            >
              <a :href="`detail?modelType=${ childItem.modelType}&articleId=${ childItem.id}`"><i></i>{{ childItem.title }}</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="div1 div2">
      <div class="casetit">
        <h3>联系我们<b>CONTACT US</b></h3>
      </div>
      <div class="div2-box">

        <div
          class="div2-box-item"
          v-for="(item, index) in sideBarObject.contactUsData"
          :key="index"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'websiteSideBar',
  components: {},
  computed: {
    ...mapGetters(['sideBarObject']),
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.casepage .case-left .div1 {
  background: #fff;
  margin-bottom: 30px;
}
.casepage .case-left .div2,
.casepage .case-left .div3 {
  background: #fff;
  margin-bottom: 25px;
}
.casepage .case-left .div3 li {
  transition: all 0.6s;
}
.casepage .case-left .div3 li a {
  display: block;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 0;
  transition: all 0.6s;
}
.casepage .case-left .div3 li i {
  display: inline-block;
  height: 5px;
  width: 5px;
  border-radius: 100%;
  background: $themeColor;
  vertical-align: middle;
  margin-right: 10px;
}

.casepage .casetit {
  background: $themeColor;
  padding: 30px;
}
.casepage .casetit h3 {
  font-weight: bold;
  color: #fff;
  font-size: 22px;
  text-align: left;
}
.casepage .casetit h3 b {
  display: block;
  font-weight: normal;
  font-family: 'times new roman';
  font-size: 16px;
  padding-top: 10px;
}
.casepage .ul1 li {
  transition: all 0.36s;
  padding-left: 30px;
  padding-right: 30px;
}
.casepage .ul1 li a {
  display: block;
  padding: 10px 0;
  font-size: 15px;
  color: #333;
  transition: all 0.6s;
  overflow: hidden;
  clear: both;
}
.casepage .ul1 a i {
  background: url(~assets/images/gengduo.png) no-repeat center;
  display: inline-block;
  width: 14px;
  height: 14px;
  float: right;
  margin-top: 5px;
  background-size: 100% 100%;
}
.casepage .ul1 {
  padding-top: 20px;
  padding-bottom: 20px;
}
.casepage .ul1 li:hover {
  // transform: translateX(10px);
}
.casepage .ul1 li:hover a {
  color: $themeColor;
}
.ul1-item {
  position: relative;
  color: #fff;
  &:hover {
    color: $themeColor;
    .ul1-child {
      display: block;
    }
  }
}
.ul1-child {
  display: none;
  border: 2px solid $themeColor;
  position: absolute;
  margin-left: 225px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: #fff;

  &-link {
    &:not(:last-child) {
      border-bottom: 1px dashed red;
    }

    display: block;
    width: 120px;
    text-align: center;
    margin: 5px;
    color: #777;
    text-shadow: none;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #ccc;
      color: #fff;
    }
  }
}
.casepage .div2-box h2,
.casepage .div3-box h2 {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 15px;
}
.casepage .div2-box img {
  width: 150px;
}
.casepage .div2-box,
.casepage .div3-box {
  padding-left: 30px;
  padding: 30px;
}
.casepage .div2-box .phone {
  font-size: 24px;
  font-weight: bold;
  color: $themeColor;
}
.casepage .div2-box p {
  font-size: 14px;
  color: #333;
  padding-top: 10px;
}
.div2-box-item {
  &:first-of-type {
    font-weight: bold;
    font-size: 14px;
  }
  font-size: 12px;
  margin-bottom: 10px;
}
.casepage .div3-box li:hover a {
  color: $themeColor;
}
.casepage .div3-box li:hover {
  transform: translateX(5px);
}
</style>
