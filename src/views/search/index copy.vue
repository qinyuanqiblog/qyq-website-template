<template>
  <div>
    <websiteChildHeader :showSearchBox="false" />
    <div class="casepage">
      <b-container>
        <b-row>
          <b-col
            cols="3"
            class="case-left"
          >
            <websiteSideBar ref="websiteSideBar" />
          </b-col>
          <b-col class="case-right ml-1 p-3">
            <div class="d-flex justify-content-between align-content-center mb-2">
              <div>标签: {{ keyword }}</div>
              <div>您当前的位置：<a href="/index.html">首页</a>><span>全站搜索</span></div>
            </div>
            <div class="result">
              <!-- <div class="result-title">全站搜索结果：产品：{{ searchInfo.productCount }}个,新闻：{{ searchInfo.newsCount }}个</div> -->
              <b-row class="result-content">
                <b-col
                  cols="12"
                  v-for="(item, index) in list"
                  :key="index"
                >

                  <a
                    class="result-item"
                    :href="`/detail.html?modelType=${ item.modelType}&articleId=${ item.id}`"
                  >{{ item.title }}</a>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>

      </b-container>
      <websiteFooter />
    </div>
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { getQuery } from '@/utils'
export default {
  name: 'aboutIndex',
  data() {
    return {
      keyword: '',
      list: [],
      searchInfo: {},
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getSearchInfo()
    },
    onPagination(currentPage) {
      this.currentPage = currentPage
      this.getSearchInfo()
    },
    getSearchInfo() {
      const json = getQuery(null)
      const keyword = decodeURIComponent(json.keyword)
      this.keyword = keyword
      const ajaxData = {
        keyword,
        userId: window.sessionStorage.userId,
      }
      systemApi.search(ajaxData).then((res = {}) => {
        const news = res.news || []
        const products = res.products || []
        this.searchInfo = res
        this.list = news.concat(products)
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('~public/scss/sidebar.scss');
.result {
  &-item {
    position: relative;
    padding-left: 20px;
    &::before {
      content: attr(data-index);
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translate(0, -50%);
      width: 5px;
      height: 5px;
      background-color: red;
      border-radius: 50%;
    }
  }
}
</style>
