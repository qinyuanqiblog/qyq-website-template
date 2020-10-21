<template>
  <div>
    <div class="casepage">
      <b-container>
        <b-row>
          <b-col
            cols="3"
            class="case-left"
          >
            <div class="div1">
              <div class="casetit">
                <h3>新闻中心<b>PRODUCT CENTER</b></h3>
              </div>
              <ul class="ul1">
                <li><a href="">每日动态 <i></i></a></li>
                <li><a href="">公司新闻 <i></i></a></li>
                <li><a href="">行业动态 <i></i></a></li>
                <li><a href="">专业知识 <i></i></a></li>
              </ul>
            </div>
            <div class="div3">

              <div class="div3-box">
                <h2>热门新闻</h2>
                <ul class="ul3">
                  <li>
                    <a href=""><i></i>专注高 端五金制品研发</a>
                  </li>
                  <li>
                    <a href=""><i></i>专注高 端五金制品研发</a>
                  </li>
                  <li>
                    <a href=""><i></i>专注高 端五金制品研发</a>
                  </li>
                  <li>
                    <a href=""><i></i>专注高 端五金制品研发</a>
                  </li>
                  <li>
                    <a href=""><i></i>专注高 端五金制品研发</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="div2">
              <div class="div2-box">
                <h2>联系我们</h2>
                <img
                  src="img/num2.png"
                  alt=""
                >
                <p>
                  XXX五金期待您的来电！
                </p>
              </div>
            </div>
          </b-col>
          <b-col class="case-right ml-1">
            <div class="mainbox">
              <div class="breadcrumb d-flex justify-content-between">
                <div>
                  <h3>新闻中心<b></b></h3>
                </div>
                <div>
                  <a href="/index.html"><img
                      src="~public/images/home.png"
                      alt=""
                    >网站首页</a>&gt;
                  <a href="/news.html">新闻中心</a>
                </div>
              </div>
              <div class="newp-list">
                <ul>
                  <li
                    v-for="(item, index) in articleList"
                    :key="index"
                  >
                    <a :href="`/detail.html?modelType=${item.modelType}&articleId=${item.id}`">
                      <b-row align-v="center">
                        <b-col
                          cols="2"
                          class="time"
                        >
                          <strong>8</strong>
                          <span>十二月</span>
                        </b-col>
                        <b-col>
                          <figcaption>
                            <h2>{{ item.title }}</h2>
                            <div class="item-describes" v-html="item.content"></div>
                          </figcaption>
                        </b-col>
                      </b-row>

                    </a>
                  </li>
                </ul>
                <div class="pager">
                  <b-pagination
                    @change="onPagination"
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                  ></b-pagination>
                </div>
              </div>

            </div>
          </b-col>
        </b-row>

      </b-container>
    </div>

  </div>
</template>

<script>
import { systemApi } from '@/api'
export default {
  name: 'newsIndex',
  data() {
    return {
      articleList: [],
      totalRows: 10,
      perPage: 10,
      currentPage: 1,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getArticleList()
    },
    onPagination(currentPage) {
      this.currentPage = currentPage
      this.getArticleList()
    },
    getArticleList() {
      const ajaxData = {
        menuId: '10158',
        modelType: '2',
        pageNum: this.currentPage,
        pageSize: this.perPage,
        userId: window.sessionStorage.userId,
      }
      systemApi.articleList(ajaxData).then((res = {}) => {
        this.totalRows = res.total
        // this.perPage = res.total/this.pageSize
        this.articleList = res.rows || []
      })
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
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  height: 50px;
}
.breadcrumb h3 {
  font-size: 16px;
  color: #000;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
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

.detailp-cont {
  padding-top: 30px;
}
.news-detail h2 {
  font-size: 22px;
  font-weight: bold;
  color: #000;
  text-align: center;
}
.news-detail .fabu {
  text-align: center;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 20px;
}
.news-detail .fabu span {
  display: inline-block;
  padding: 10px;
  font-size: 14px;
  color: #666;
}
.news-detail p {
  line-height: 36px;
  margin: 10px 0;
  text-indent: 1em;
  font-size: 14px;
  color: #333;
}
.news-detail p img {
  margin: auto;
  display: block;
  max-width: 100%;
}
.fenpian {
  margin-top: 25px;
  border-top: 1px solid #f9f9f9;
  padding-top: 20px;
  position: relative;
}
.fenpian span {
  font-size: 14px;
  color: #000 !important;
  display: inline-block;
  float: left;
  margin: 0 15px 0 0 !important;
  padding: 0 !important;
  vertical-align: middle;
}
.fenpian p {
  float: left;
}
.fenpian > div {
  padding: 10px 0;
}
.fenpian p a {
  font-size: 14px;
  color: #555;
  display: block;
  line-height: 1;
  transition: all 0.6s;
}
.fenpian div:hover a {
  color: #de0024;
}
.fenpian .fanhui {
  display: block;
  position: absolute;
  right: 10px;
  background: #de0024;
  color: #fff;
  padding: 10px 25px;
  border-radius: 10px;
  top: 35px;
}
.item-describes{
  line-height: 2;
  @include lineClamp(2);
  font-size:14px;
  color:#666;
}
</style>
