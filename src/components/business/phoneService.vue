<template>
  <section>
    <a
      href="javascript:void(0)"
      class="fd_left icon_keifu"
      style="display: block;"
      @click="toggle()"
    >
      <p>免费<br>通话</p><img
        src="https://g.gxlesou.com/static/getcustomer/images/pic.png"
        title=""
        style=""
      >
    </a>
    <div
      v-show="showBar"
      class="footer_kf keifu_box"
    >
      <div class="fd_box">
        <div class="fd_box01">
          <div class="fd_box02">
            <div class="fd_bgc"></div>
            <div class="fd_gb">><img
                  @click="showBar = false"
                  src="https://g.gxlesou.com/static/getcustomer/images/gb.png"
                ></div>
            <div class="fd_tu">
              <div class="fd_img"><img src="https://g.gxlesou.com/static/getcustomer/images/pic1.png"></div>
              <p>无论何时何地，我们都会<span>立即安排</span>公司专员<span>免费</span>一对一与您沟通</p>
              <div class="fd_r"><input
                  type="text"
                  id="fd-bottom-input"
                  placeholder="请输入您的电话号码"
                > <input
                  type="button"
                  id="fd-bottom-btn"
                  value="立即免费通话"
                ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'phoneService',
  components: {},
  data() {
    return {
      showBar: false,
    }
  },
  created() {},
  methods: {
    toggle() {
      console.log(66666)
      this.showBar = !this.showBar
    },
  },
}
</script>

<style lang="scss" scoped>
.icon_keifu {
  position: fixed;
  bottom: 20px;
  left: 0;
  z-index: 2;
}
</style>
