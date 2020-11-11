<template>
  <div>
    <websiteHeader />

    <websiteArticleList>
      <div
        slot="right"
        class="detailp-cont"
      >
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
                alt="banner"
              ></p>
          </div>
        </div>
        <div class="fenpian">
          <div
            v-if="detailData.up && detailData.up[0]"
            class="clearfix"
          ><span>上一篇：</span>
            <p><a :href="`detail?modelType=${ detailData.up[0].modelType}&articleId=${ detailData.up[0].id}`">{{ detailData.up[0].title }}</a></p>
          </div>
          <div
            v-if="detailData.next && detailData.next.title"
            class="clearfix"
          ><span>下一篇：</span>
            <p><a :href="`detail?modelType=${ detailData.next.modelType}&articleId=${ detailData.next.id}`">{{ detailData.next.title }}</a></p>
          </div>
          <!-- <a
                    href=""
                    class="fanhui"
                  >返回</a> -->
        </div>
      </div>
    </websiteArticleList>
    <websiteFooter />
  </div>
</template>

<script>
import { commonMixin } from '@/mixins'
export default {
  name: 'indexDetail',
  mixins: [commonMixin],
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
    getDetailInfo() {
      const { articleId, modelType } = this.$route.query
      const ajaxData = {
        articleId,
        modelType,
      }
      this.$systemApi.detailsPageData(ajaxData).then((res = {}) => {
        this.detailData = res || {}
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.detailp-cont {
  padding-top: 30px;
  line-height: 2;
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
