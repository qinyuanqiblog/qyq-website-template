<template>
  <b-container class="product-list mt-lg-5 mb-5">
    <h3 class="text-center mb-5">最新<span class="qyq-title-default">资讯</span></h3>
    <div class="row">
      <div
        :class="{
        'col-md-4 ': list.length >= 3,
        'col-md-6 ': list.length === 2,
        'col-md-12 ': list.length === 1,
      }"
        class="col-xs-12 new_nr column "
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="lx_sub">
          <div class="zxtit01 ">
            <h2><a
                href="news.html"
                title="公司新闻"
                target="_blank"
              >{{ item.menuName }}</a></h2>
            <span class=" tar01 fr"><a
                href="news.html"
                title="more"
                target="_blank"
              >more&gt;&gt;</a></span>
          </div>
          <!-- <div class="n_img">
            <img
              src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/n_img01.jpg"
              alt=""
            >
          </div> -->
          <!--新闻样式代码开始-->
          <ul class="news_1">
            <li
              v-for="(childItem, childIndex) in item.newsList"
              :key="childIndex"
              style="overflow:hidden"
              class="d-flex justify-content-between"
            >
              <a :href="`detail.html?modelType=${childItem.modelType}&articleId=${childItem.id}`">{{ childItem.title }}</a>
              <span class="text-right">{{ childItem.createTime }}</span>
            </li>
          </ul>
          <!--新闻样式代码结束-->
          <div class="n_more">
            <!--更多链接代码开始-->
            <a
              href="news.html"
              target=""
            >查看更多 +</a>
            <!--更多链接代码结束-->
          </div>
        </div>
      </div>
    </div>

  </b-container>
</template>

<script>
export default {
  name: 'websiteNews',
  components: {},
  data() {
    return {
      list: [],
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
/*新闻资讯*/
.new_mian {
  width: 100%;
  // background: url(../images/news-bg.jpg) no-repeat top center;
  padding: 35px 0px 20px;
}
.new_mian .row .col-md-12 .tielse .tt {
  height: 60px;
  line-height: 60px;
  color: #e2b100;
  font-size: 30px;
  text-align: center;
  margin: 0px;
  font-weight: bold;
  text-transform: uppercase;
}
.new_mian .row .col-md-12 .tielse .tt span {
  color: #0093dd;
  font-weight: normal;
  padding-left: 5px;
}
.new_mian .row .col-md-12 .tielse .dc_x {
  width: 35px;
  height: 2px;
  background: #0093dd;
  margin: 0px auto;
}
.new_mian .row .col-md-12 .tielse .ms {
  color: #666;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
}

.new_nr {
  transition: all 0.5s;
}
.new_nr:hover {
  transform: translateY(-10px) !important;
}

.lx_sub {
  margin: 15px 0px 15px;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 10px #c8c8c8;
}
.lx_sub:hover {
  border: 1px solid #dfdfdf;
}
.mar40 {
  margin-bottom: 40px;
}
.n_img {
  margin: 15px 0 0px;
}
.n_img img {
  margin: 5px 20px;
}
.zxtit01 {
  height: 45px;
  display: block;
  padding: 20px 20px 10px;
}
.zxtit01 h2 {
  height: 22px;
  width: 144px;
  float: left;
  margin: 0px;
}
.zxtit01 h2 a {
  color: #333333;
  font-size: 18px;
  line-height: 12px;
  float: left;
  line-height: 19px;
}
.zxtit01 h2 img {
  width: 22px;
  height: 22px;
  margin-right: 10px;
  float: left;
}
.zxtit01 span.tar01 {
  width: 66px;
  height: 19px;
  display: block;
  line-height: 20px;
}
.zxtit01 span.tar01 a {
  color: #999999;
  font-size: 14px;
  text-transform: uppercase;
}
.zxtit01 span.tar01 a:hover {
  color: #cc0100;
}

.n_more {
  padding: 15px 20px 25px;
}
.n_more a {
  display: block;
  width: 118px;
  height: 35px;
  line-height: 35px;
  color: #2b2d42;
  border: 1px solid #ccc;
  text-align: center;
}
.lx_sub:hover .n_more a {
  width: 118px;
  height: 35px;
  background: #cc0100;
  border: 1px solid #cc0100;
  color: #fff;
}

.news_1 {
  background: none;
  padding: 1% 6%;
}
.news_1 a {
  width: 62%;
  color: #444;
  font-weight: normal;
  height: 43px;
  padding-left: 15px;
  // background: url(../images/n_icon.png) no-repeat center left;
}
.news_1 a:hover {
  color: #cc0100;
}
.news_1 span {
  color: #555;
  width: 30%;
  font-size: 13px;
}
.news_1 li {
  border-bottom: 1px #ddd dashed;
  line-height: 43px;
}
.news_1 i {
  line-height: 43px;
  margin-right: 3%;
  color: #cc0100;
}
.n_lb {
  margin-bottom: 40px;
}
</style>
