<template>
  <div>
    <websiteChildHeader />
    <div class="casepage">
      <b-container>
        <b-row>
          <b-col
            cols="3"
            class="case-left"
          >
            <websiteSideBar ref="websiteSideBar" />
          </b-col>
          <b-col class="case-right ml-1">
            <div class="mainbox">
              <div class="detailp-cont">
                <div class="news-detail">
                  <h2>{{ detailData.currentArticle.title }}</h2>
                  <div class="fabu">
                    <!-- <span>发布人：张三那</span> -->
                    <span>时间：{{ detailData.currentArticle.createTime }}</span><span>浏览次数：{{ detailData.currentArticle.viewCount }}次</span>
                  </div>
                  <div>
                    <div v-html="detailData.currentArticle.content"> </div>

                    <p><img
                        src="img/banner.png"
                        alt=""
                      ></p>
                  </div>
                </div>
                <div class="fenpian">
                  <div
                    v-if="detailData.up && detailData.up[0]"
                    class="clearfix"
                  ><span>上一篇：</span>
                    <p><a :href="`/detail.html?modelType=${ detailData.up[0].modelType}&articleId=${ detailData.up[0].id}`">{{ detailData.up[0].title }}</a></p>
                  </div>
                  <div
                    v-if="detailData.next && detailData.next.title"
                    class="clearfix"
                  ><span>下一篇：</span>
                    <p><a :href="`/detail.html?modelType=${ detailData.next.modelType}&articleId=${ detailData.next.id}`">{{ detailData.next.title }}</a></p>
                  </div>
                  <!-- <a
                    href=""
                    class="fanhui"
                  >返回</a> -->
                </div>
              </div>
            </div>
          </b-col>
        </b-row>

      </b-container>
    </div>
    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { getQuery } from '@/utils'
export default {
  name: 'indexDetail',
  data() {
    return {
      detailData: {
        currentArticle: {},
        next: {},
        up: {},
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getDetailInfo()
    },
    getBaseInfo() {
      systemApi.info().then((res = {}) => {
        this.$refs.websiteFooter.baseInfo = res.info || {}
      })
    },
    getDetailInfo() {
      const { articleId, modelType } = getQuery(null)
      const ajaxData = {
        articleId,
        modelType,
        userId: window.sessionStorage.userId,
      }
      systemApi.detailsPageData(ajaxData).then((res = {}) => {
        this.detailData = res || {}
        const list = []
        list.push({
          title: res.newsTitle,
          childrenList: (res.newsData && res.newsData.splice(0, 9)) || [],
          showType: 'menu',
        })
        list.push({
          title: res.productTitle,
          childrenList: (res.productData && res.productData.splice(0, 9)) || [],
          showType: 'list',
        })
        this.$refs.websiteSideBar.list = list
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
.casepage .case-right {
  background: #fff;
  // width: 600px;
}
.casepage .mainbox {
  padding: 20px 30px;
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
  padding: 20px 0;
  border-bottom: 1px solid #f5f5f5;
}
.newp-list .time {
  width: 60px;
  height: 60px; /*border-left: 1px solid #F5F5F5; border-right: 1px solid #F5F5F5;*/
  background: #de0024;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 33;
}
.newp-list strong {
  display: block;
  font-size: 20px;
  text-align: center;
  color: #fff;
  padding-top: 5px;
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
  height: 150px;
  overflow: hidden;
  transition: all 0.6s;
}
.newp-list li:hover figure img {
  transform: scale(1.1);
}
.newp-list figcaption {
  width: 650px;
  padding-left: 30px;
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
  margin-bottom: 40px;
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
</style>
