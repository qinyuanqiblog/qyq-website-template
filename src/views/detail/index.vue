<template>
  <div>
    <websiteHeader />
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
      }
      systemApi.detailsPageData(ajaxData).then((res = {}) => {
        this.detailData = res || {}
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('~public/scss/sidebar.scss');
</style>
