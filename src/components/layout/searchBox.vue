<template>
  <b-container class="search-box">
    <b-row>
      <b-col>
        <span class="font-weight-bold">热门关键词：</span>
        <a
          class="ml-1 mr-2"
          v-for="(item, index) in list"
          :key="index"
        >{{ item }}</a>
      </b-col>
      <b-col class="d-flex">
        <div class="search-bar ml-auto">
          <input
            v-model="keyword"
            type="text"
            class="search-bar-input"
            placeholder="输入关键词"
          />
          <span
            @click="searchFn()"
            class="search-bar-button"
          >搜索</span>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import { systemApi } from '@/api'
export default {
  name: 'searchBox',
  components: {},
  data() {
    return {
      keyword: '',
      list: [],
    }
  },
  created() {},
  methods: {
    searchFn() {
      const ajaxData = {
        keyword: this.keyword,
      }
      systemApi.search(ajaxData).then(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  padding: 30px 0;
}
.search-bar {
  color: #fff;
  display: flex;
  &-input:focus {
    // border-color: var(--blue);
  }
  &-input {
    width: 290px;
    height: 40px;
    padding: 0 20px;
    // border-top-left-radius: 20px;
    // border-bottom-left-radius: 20px;
    // border: 1px solid red;
    border: none;
    outline: none;
    background-color: #f5f5f5;
  }
  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    // border-top-right-radius: 20px;
    // border-bottom-right-radius: 20px;
    background-color: red;
    font-size: 14px;
  }
}
</style>
