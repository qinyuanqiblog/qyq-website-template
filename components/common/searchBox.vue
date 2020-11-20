<template>
  <b-container class="search-box">
    <b-row align-v="center">
      <b-col>
        <img
          class="keyword-bg"
          src="~/assets/images/clock.png"
          alt="关键词背景图"
        >
        <span class="font-weight-bold keyword">热门关键词：</span>
      </b-col>
      <b-col
        lg="auto"
        :md="2"
        v-for="(item, index) in searchList"
        :key="index"
      >
        <a
          class="ml-1 mr-2"
          :href="`search?keyword=${encodeURIComponent(item)}`"
        >{{ item }}</a>
      </b-col>
      <b-col class="d-flex">
        <div class="search-bar">
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
import { mapGetters } from 'vuex'
export default {
  name: 'searchBox',
  components: {},
  computed: {
    ...mapGetters(['searchList']),
  },
  data() {
    return {
      keyword: '',
    }
  },
  created() {},
  methods: {
    searchFn() {
      if (!this.keyword) {
        return false
      }
      if (process.client) {
        this.$router.push(`search?keyword=${encodeURIComponent(this.keyword)}`)
      }
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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    // border-top-right-radius: 20px;
    // border-bottom-right-radius: 20px;
    background-color:$themeColor;
    font-size: 14px;
  }
}
.keyword-bg {
  width: 25px;
  height: 30px;
  object-fit: cover;
  margin-right: 10px;
  position: relative;
  top: -5px;
}
</style>
