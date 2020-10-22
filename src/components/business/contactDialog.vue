<template>
  <div>
    <!-- 手机 -->
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
      <!-- 手机栏目 -->
      <div
        v-show="showBar"
        class="footer_kf keifu_box"
      >
        <div class="fd_box">
          <div class="fd_box01">
            <div class="fd_box02">
              <div class="fd_bgc"></div>
              <div class="fd_gb"><a
                  href="javascript:void(0)"
                  class="keifu_close"
                ><img
                    @click="showBar = false"
                    src="https://g.gxlesou.com/static/getcustomer/images/gb.png"
                  ></a></div>
              <div class="fd_tu">
                <div class="fd_img"><img src="https://g.gxlesou.com/static/getcustomer/images/pic1.png"></div>
                <p>无论何时何地，我们都会<span>立即安排</span>公司专员<span>免费</span>一对一与您沟通</p>
                <div class="fd_r"><input
                    type="text"
                    id="fd-bottom-input"
                    v-model="form.phone"
                    maxlength="11"
                    placeholder="请输入您的电话号码"
                  > <input
                    @click="submit()"
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
    <!-- 首页弹框 -->
    <section
      v-show="show"
      class="cd-popup3 is-visible3"
    >
      <div class="cd-popup-container3">
        <div class="cd_img"><img src="https://g.gxlesou.com/static/getcustomer/images/bj1.jpg"></div>
        <div class="cd_you">
          <h4>请您留言咨询</h4>
          <h3>我们会尽快联系您</h3>
          <div class="kh_ly">
            <!-- <div class="kh_xm"><input
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
            > <label for="hk-sex2"><span></span>女士</label></div> -->
            <div class="hk-tel"><input
                type="text"
                id="hk-input-tel"
                placeholder="贵姓"
                v-model="form.name"
              ></div>
            <div class="hk-tel"><input
                type="text"
                id="hk-input-tel"
                placeholder="联系电话"
                v-model="form.phone"
              ></div>
            <div class="hk-message"><textarea
                id="hk-message"
                name="hk_message"
                rows="4"
                maxlength="200"
                v-model="form.content"
                placeholder="简单说一下您的需求"
              ></textarea></div>
            <div class="hk-button"><input
                type="submit"
                @click="submit()"
                value="提交"
                id="hk-btn"
              ></div>
          </div>
        </div><a
          @click="closeDialog()"
          class="cd-popup-close"
          href="#0"
        >x</a>
      </div>
    </section>
    <!-- 侧栏 -->
    <section class="customer-side">
      <ul>
        <li class="cd-popup-trigger3"><i class="bgs1"></i>24小时客服<br>在线咨询</li>
        <li class="customer-sideetel"><i class="bgs2"></i>立即咨询<div
            class="ljzx son"
            id="zx_formbox"
          >
            <h2>电话咨询</h2>
            <div class="zx_box">
              <div class="zx_box_l"><input
                  type="text"
                  id="zx_text"
                  v-model="form.phone"
                  maxlength="11"
                ></div><input
                @click="submit()"
                type="button"
                id="zx_box_btn"
                value="免费通话"
              >
            </div>
            <p>填写手机号码，我们会马上联系您!</p>
          </div>
        </li>
        <li class="customer-sideewm"><i class="bgs3"></i>扫一扫<div class="sjzd son"><img src="http://img.gxlesou.com/1/20200830/5e44e3a64cb0751476b73c512c9322b7.jpg"></div>
        </li>
      </ul>
    </section>
  </div>

</template>

<script>
import { systemApi } from '@/api'
export default {
  name: 'contactDialog',
  components: {},
  data() {
    return {
      show: false,
      showBar: false,
      form: {
        name: '',
        phone: '',
        content: '',
        userId: window.sessionStorage.userId,
      },
    }
  },
  created() {},
  methods: {
    submit() {
      systemApi.addMessage(this.form).then(() => {
        alert('提交成功，稍后会有客服联系您，请您耐心等待')
        this.form = {
          name: '',
          phone: '',
          content: '',
          userId: window.sessionStorage.userId,
        }
        this.closeDialog()
      })
    },
    closeDialog() {
      this.show = false
    },
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
