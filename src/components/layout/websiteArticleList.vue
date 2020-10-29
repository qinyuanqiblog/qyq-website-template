<template>
  <div class="casepage">
    <b-container>
      <b-row>
        <b-col
          cols="3"
          class="case-left"
        >
          <slot name="left"></slot>
        </b-col>
        <b-col class="case-right ml-1">
          <div class="mainbox">
            <div class="breadcrumb justify-content-between">
              <div>
                <h3>{{ config.title }}<b></b></h3>
              </div>
              <div>
                <a href="index.html">
                  <img
                    src="~public/images/home.png"
                    alt="网站首页背景图"
                  >
                  网站首页
                </a>
                &gt;
                <span>{{config.breadcrumb}}</span>
              </div>
            </div>

            <slot name="right">
              <!-- 有数据的时候又分为产品和新闻 -->
              <template v-if="list.length">
                <template v-if="showType === 'news'">
                  <slot name="right-header"></slot>
                  <div class="newp-list">
                    <slot name="right-top"></slot>
                    <ul>
                      <li
                        v-for="(item, index) in list"
                        :key="index"
                      >
                        <a :href="`detail.html?modelType=${item.modelType}&articleId=${item.id}`">
                          <b-row align-v="center">
                            <b-col
                              cols="2"
                              class="time"
                            >
                              <strong>{{ item._day }}</strong>
                              <span>{{ item._month | monthFilter }}月</span>
                            </b-col>
                            <b-col>
                              <figcaption>
                                <h2>{{ item.title }}</h2>
                                <div
                                  class="item-describes"
                                  v-html="item.content"
                                ></div>
                              </figcaption>
                            </b-col>
                          </b-row>

                        </a>
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-if="showType === 'product'">
                  <div class="row projects-list">
                    <div
                      v-for="(item, index) in list"
                      :key="index"
                      class="col-sm-3 col-xs-12 item"
                    >
                      <a
                        :href="`detail.html?articleId=${item.id}&modelType=${item.modelType}`"
                        class="image-popup"
                      >
                        <img
                          class="gallery-image"
                          :src="item.image"
                          alt="产品图片"
                        >
                        <div class="item-text">{{ item.title }}</div>
                      </a>
                    </div>
                  </div>
                </template>
              </template>
              <!-- 没有的时候给个提示 -->
              <div v-else>
                没有更多数据了
              </div>
              <!-- 分页 -->
              <div class="pager">
                <b-pagination
                  v-show="list.length"
                  @change="onPagination"
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                ></b-pagination>
              </div>
            </slot>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'websiteArticleList',
  props: {
    ajaxData: {
      type: Object,
      default() {
        return {}
      },
    },
    ajaxNameFn: {
      type: [String, Function],
      default() {
        return ''
      },
    },
    successHandle: {
      type: [String, Function],
      default: '',
    },
    failHandle: {
      type: [String, Function],
      default: '',
    },
    showType: {
      type: String,
      default: 'news',
    },
    config: {
      type: Object,
      default() {
        return {
          title: '新闻列表',
          breadcrumb: '新闻列表',
        }
      },
    },
  },
  filters: {
    monthFilter(val) {
      let text = ''
      switch (val) {
        case '01':
          text = '一'
          break
        case '02':
          text = '二'
          break
        case '03':
          text = '三'
          break
        case '04':
          text = '四'
          break
        case '05':
          text = '五'
          break
        case '06':
          text = '六'
          break
        case '07':
          text = '七'
          break
        case '08':
          text = '八'
          break
        case '09':
          text = '九'
          break
        case '10':
          text = '十'
          break
        case '11':
          text = '十一'
          break
        case '12':
          text = '十二'
          break

        default:
          console.log('默认啥都没处理~')
          break
      }
      return text
    },
  },
  data() {
    return {
      list: [],
      totalRows: 10,
      perPage: 10,
      currentPage: 1,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getArticleList()
    },
    getArticleList() {
      if (!this.ajaxNameFn) {
        return false
      }
      const ajaxData = {
        pageNum: this.currentPage,
        pageSize: this.perPage,
        ...this.ajaxData,
      }
      this.ajaxNameFn(ajaxData)
        .then((res = {}) => {
          this.totalRows = res.total
          if (this.successHandle) {
            const array = this.successHandle(res) || []
            array.forEach(v => {
              if (v.createTime) {
                const newArray = v.createTime.substring(0, 10).split('-')
                v._year = newArray[0]
                v._month = newArray[1]
                v._day = newArray[2]
              }
            })
            this.list = array
            return false
          }
          res.rows.forEach(v => {
            if (v.createTime) {
              const newArray = v.createTime.substring(0, 10).split('-')
              v._year = newArray[0]
              v._month = newArray[1]
              v._day = newArray[2]
            }
          })
          this.list = res.rows
        })
        .catch(err => {
          this.failHandle && this.failHandle(err)
        })
    },
    onPagination(currentPage) {
      this.currentPage = currentPage
    },
  },
}
</script>
<style lang="scss" scoped>
.casepage {
  background: #f5f5f5;
  padding: 45px 0;
}
.casepage .case-left {
  position: relative;
  z-index: 2;
  // width: 220px;
}
.casepage .case-left .div1 {
  background: #fff;
}
.casepage .case-left .div2,
.casepage .case-left .div3 {
  background: #fff;
  margin-top: 25px;
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
.casepage .case-right {
  background: #fff;
  // width: 600px;
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
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.casepage .ul1 li:hover {
  transform: translateX(10px);
}
.casepage .ul1 li:hover a {
  color: #de0024;
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
.casepage .div2-box p {
  font-size: 14px;
  color: #333;
  padding-top: 10px;
}
.casepage .div3-box li:hover a {
  color: #de0024;
}
.casepage .div3-box li:hover {
  transform: translateX(5px);
}
.casepage .mainbox {
  padding: 20px 30px;
}
.breadcrumb {
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  height: 50px;
  background: none;
}
.breadcrumb h3 {
  font-size: 16px;
  color: #000;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  position: relative;
  left: -10px;
}
.breadcrumb h3 b {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #de0024;
  height: 1px;
  width: 70px;
}
.breadcrumb div.fr a {
  display: inline-block;
  color: #333;
  font-size: 14px;
  margin: 0 5px;
  height: 40px;
  line-height: 40px;
}
.breadcrumb div.fr img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.breadcrumb div.fr {
  color: #666;
}
.breadcrumb div.fr a:hover,
.breadcrumb div.fr a.on {
  color: #de0024;
}
.caesp-list ul {
  padding-top: 25px;
  margin-right: -25px;
}
.caesp-list li {
  float: left;
  width: 290px;
  position: relative;
  margin-bottom: 20px;
  margin-right: 30px;
}
.caesp-list li figure,
.caesp-list li figure img {
  width: 290px;
  height: 270px;
  overflow: hidden;
  transition: all 0.6s;
}
.caesp-list li figcaption {
  overflow: hidden;
  clear: both;
}
.caesp-list li p {
  color: #333;
  font-size: 16px;
  padding: 15px 0 0 0;
  float: left;
}
.caesp-list li span {
  display: inline-block;
  vertical-align: middle;
  height: 1px;
  background: #f5f5f5;
  width: 0;
  float: left;
  margin-top: 30px;
  margin-right: 10px;
  transition: all 0.36s;
}
.caesp-list li:hover span {
  background: #de0024;
  width: 60px;
}
.caesp-list li:hover figure img {
  transform: scale(1.1);
}

.newp-list ul {
  padding-top: 15px;
}
.newp-list li {
  position: relative;
  transition: all 0.6s;
}
.newp-list li a {
  display: block;
  overflow: hidden;
  clear: both;
  border-bottom: 1px solid #f5f5f5;
}
.newp-list .time {
  width: 60px;
  height: 60px; /*border-left: 1px solid #F5F5F5; border-right: 1px solid #F5F5F5;*/
  background: #de0024;
  // position: absolute;
}
.newp-list strong {
  display: block;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
.newp-list span {
  display: block;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.newp-list figure img,
.newp-list figure {
  width: 260px;
  height: 100px;
  overflow: hidden;
  transition: all 0.6s;
}
.newp-list li:hover figure img {
  transform: scale(1.1);
}
.newp-list figcaption {
  padding: 10px 30px;
}
.newp-list a {
  &:hover {
    text-decoration: none;
  }
}
.newp-list figcaption h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  font-weight: bold;
}
.newp-list figcaption p {
  line-height: 30px;
  height: 60px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  @include lineClamp;
}
.newp-list figcaption i {
  background: url(~public/images/arrow-right.png) no-repeat right center;
  padding-right: 40px;
  font-size: 14px;
  display: inline-block;
  color: #000;
  margin-top: 20px;
}
.newp-list li:hover {
  transform: translateX(10px);
}
.newp-list li:hover h2 {
  color: #de0024;
}
.item-describes {
  line-height: 2;
  @include lineClamp(2);
  font-size: 14px;
  color: #666;
}

.projects-list {
  .item {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    &-text {
      text-align: center;
      margin-top: 10px;
    }
  }
  .gallery-image {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
}
</style>
