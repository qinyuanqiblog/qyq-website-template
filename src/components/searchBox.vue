<template>
  <b-container class="search-box">
    <b-row>
      <b-col>
        <span class="font-weight-bold">热门关键词：</span>
        <span class="ml-1">111</span>
        <span class="ml-1">111</span>
        <span class="ml-1">111</span>
        <span class="ml-1">111</span>
      </b-col>
      <b-col class="d-flex">
        <div class="search-bar ml-auto">
          <input
            type="text"
            class="search-bar-input"
          />
          <span class="search-bar-button">搜索</span>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
  name: 'searchBox',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.search-box {
  padding: 10px 0;
}
.search-bar {
  color: #fff;
  display: flex;
  &-input:focus {
    border-color: var(--blue);
  }
  &-input {
    width: 200px;
    height: 35px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid red;
    outline: none;
  }
  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 35px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: red;
    font-size: 14px;
  }
}
</style>
