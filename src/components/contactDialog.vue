<template>

  <div
    v-show="show"
    class="cd-popup3 is-visible3"
  >
    <div class="cd-popup-container3">
      <div class="cd_img"><img src="https://g.gxlesou.com/static/getcustomer/images/bj1.jpg"></div>
      <div class="cd_you">
        <h4>请您留言咨询</h4>
        <h3>我们会尽快联系您</h3>
        <div class="kh_ly">
          <div class="kh_xm"><input
              id="hk-input-name"
              type="text"
              placeholder="贵姓"
            > <input
              id="hk-sex1"
              class="hk-sex"
              type="radio"
              value="先生"
              name="ls_sex"
              checked=""
            > <label for="hk-sex1"><span></span>先生</label> <input
              id="hk-sex2"
              class="hk-sex"
              type="radio"
              value="女士"
              name="ls_sex"
            > <label for="hk-sex2"><span></span>女士</label></div>
          <div class="hk-tel"><input
              type="text"
              id="hk-input-tel"
              placeholder="联系电话"
            ></div>
          <div class="hk-message"><textarea
              id="hk-message"
              name="hk_message"
              rows="4"
              maxlength="200"
              placeholder="简单说一下您的需求"
            ></textarea></div>
          <div class="hk-button"><input
              type="button"
              value="提交"
              id="hk-btn"
            ></div>
        </div>
      </div><a
        class="cd-popup-close"
        href="#0"
      >x</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactDialog',
  components: {},
  data() {
    return {
      show: false,
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
