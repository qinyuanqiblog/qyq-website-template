<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="{
        'div1': item.showType === 'menu',
        'div3': item.showType === 'list',
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
            <a :href="`product.html?modelType=${ childItem.modelType}&menuId=${ childItem.id}`">
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
                :href="`product.html?modelType=${ secondItem.modelType}&menuId=${ secondItem.id}`"
              >
                <i v-if="secondItem.haveChild !== '0'"></i>
                {{ secondItem.name }}
              </a>
            </div>
          </li>
        </ul>
      </template>
      <template v-if="item.showType === 'list'">
        <div class="div3-box">
          <h2>{{ item.title }}</h2>
          <ul class="ul3">
            <li
              v-for="(childItem, childIndex) in item.childrenList"
              :key="childIndex"
            >
              <a :href="`detail.html?modelType=${ childItem.modelType}&articleId=${ childItem.id}`"><i></i>{{ childItem.title }}</a>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="div2">
      <div class="div2-box">
        <h2>联系我们</h2>
        <div
          class="div2-box-item"
          v-for="(item, index) in contactUsData"
          :key="index"
        >{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'websiteSideBar',
  components: {},
  data() {
    return {
      list: [],
      contactUsData: [],
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.casepage .case-left .div1 {
  background: #fff;
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
  background: #de0024;
  vertical-align: middle;
  margin-right: 10px;
}

.casepage .casetit {
  background: #de0024;
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
  background: url(~public/images/gengduo.png) no-repeat center;
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
  color: #de0024;
}
.ul1-item {
  position: relative;
  color: #fff;
  &:hover {
    color: #de0024;
    .ul1-child {
      display: block;
    }
  }
}
.ul1-child {
  display: none;
  border: 2px solid #de0024;
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
  color: #dc3545;
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
  color: #de0024;
}
.casepage .div3-box li:hover {
  transform: translateX(5px);
}
</style>
