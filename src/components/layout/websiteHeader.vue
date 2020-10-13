<template>
  <div>
    <b-container
      fluid
      class="nav-top"
    >
      <b-container>
        <b-row>
          <b-col>您好，欢迎光临xx官网</b-col>
          <b-col class="text-right">在线电话电话：
            <span class="nav-top-phone">400-800-1234</span>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <div class="qyq-navbar">
      <b-container class="navbar-container">
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse
            id="nav-collapse"
            is-nav
          >
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <div class="navbar-main">
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
                <a
                  class="navbar-main-item"
                  href=""
                >网站首页</a>
              </div>

              <!-- <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button
                  size="sm"
                  class="my-2 my-sm-0"
                  type="submit"
                >Search</b-button>
              </b-nav-form> -->

            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'websiteHeader',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.nav-top {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  font-size: 12px;
  &-phone {
    color: #da251d;
  }
}
.qyq-navbar {
  .navbar {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-main {
    display: flex;
    &-item {
      margin: 15px 5px;
      padding: 7px 15px;
      color: #777;
      text-shadow: none;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #fff;
        background: #ff5555;
        text-decoration: none;
      }
    }
  }
}
</style>
