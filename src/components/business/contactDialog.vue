<template>
  <div>
    <!-- 手机  他们说不要了 -->
    <section>
      <a
        href="javascript:void(0)"
        class="fd_left icon_keifu"
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
        v-show="showPhoneBar"
        class="footer_kf keifu_box"
      >
        <div class="fd_box">
          <div class="fd_box01">
            <div class="fd_box02">
              <div class="fd_bgc"></div>
              <div class="fd_gb"><img
                    @click="showPhoneBar = false"
                    src="https://g.gxlesou.com/static/getcustomer/images/gb.png"
                  ></div>
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
    <!--  -->
    <div id="m_div">
      <div class="w_title">
        <div id="m_top"></div>
        <div id="m_mid"></div>
        <div id="m_bot">欢迎给我们留言</div>
        <a
          href="javascript:void(0);"
          class="m_close"
          title="最大化"
        ></a>
      </div>
      <div
        class="message w_message"
        style=""
      >
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small">Small:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-small"
              size="sm"
              placeholder="Enter your name"
            ></b-form-input>
          </b-col>
        </b-row>
        <div class="index_message">
          <span class="m_label d_label">请在此输入留言内容，我们会尽快与您联系。</span>
          <textarea
            id="icontent"
            rows="2"
            cols="80"
            class="m_input"
          ></textarea>
        </div>
        <div class="name_input clearfix">
          <div class="input_left">姓名</div>
          <div class="input_right">
            <input
              id="iname"
              type="text"
              class="m_input"
            >
          </div>
        </div>
        <div class="name_input clearfix">
          <div class="input_left">电话</div>
          <div class="input_right">
            <input
              id="imobile"
              type="text"
              class="m_input"
            >
          </div>
        </div>
        <div id="code">
          <input
            type="text"
            class="form-control"
            placeholder="验证码"
            id="icode"
          >
          <img
            src="/index/guestbook/checkverify.html"
            onclick="javascript:this.src='/index/guestbook/checkverify.html?tm='+Math.random();"
            id="checkcode"
          >
        </div>
        <div class="m_under">
          <input
            type="button"
            class="msgbtn"
            id="footsub"
            value="发送"
          >
        </div>
      </div>
    </div>
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
        <li class="customer-sideewm"><i class="bgs3"></i>扫一扫<div class="sjzd son"><img :src="qrcode"></div>
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
      showPhoneBar: false,
      qrcode: '',
      form: {
        name: '',
        phone: '',
        content: '',
      },
    }
  },
  created() {},
  methods: {
    submit() {
      systemApi.addMessage(this.form).then(() => {
        this.$bvToast.toast('提交成功，稍后会有客服联系您，请您耐心等待', {
          title: `提示`,
          solid: true,
          toaster: 'b-toaster-top-center',
          variant: 'success',
        })
        this.closeDialog()
      })
    },
    closeDialog() {
      this.show = false
      this.form = {
        name: '',
        phone: '',
        content: '',
      }
    },
    toggle() {
      this.showPhoneBar = !this.showPhoneBar
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

#m_div {
  display:none;
  width: 222px;
  position: fixed;
  right: 2px;
  bottom: 0px;
  padding-bottom: 1px;
  z-index: 99999;
  background: none;
}

.d_label {
  line-height: 18px;
  padding-top: 8px;
  width: 160px;
}

.w_message {
  border: 1px solid #a00000;
  padding: 7px;
  padding-top: 3px;
  height: 235px;
  padding-bottom: 27px;
  background: #f3f3f3;
}

.w_message #iname {
  height: 20px;
  line-height: 20px;
  border: none !important;
}

.w_message #icontact {
  width: 142px;
  height: 20px;
  line-height: 20px;
  border: none !important;
}

.w_message #icontent {
  width: 176px;
  height: 65px;
  resize: none;
  overflow-y: auto;
  overflow-x: hidden;
  width: 189px;
}

.w_message #icheckcode {
  width: 82px;
  height: 30px;
  line-height: 22px;
  border: 1px solid #ccc;
  background-color: #fff;
}

#message_main {
  display: table-cell;
}

.w_message #message_main tr {
  display: block;
  width: 100%;
  overflow: hidden;
  line-height: 28px;
}

.w_message #message_main tr th {
  height: 28px;
  line-height: 28px;
  width: 37px;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}

.w_message #code {
  padding-top: 0px;
  margin-top: 5px;
}

.w_title {
  background: none;
  color: #fff;
  position: relative;
  cursor: pointer;
  height: 33px;
  width: 222px;
  overflow: hidden;
}

.w_message #message_main .m_input {
  border: 1px solid #ccc;
  background-color: #fff;
}

.w_message .msgbtn {
  width: 93px;
  height: 29px;
  line-height: 20px;
  margin-top: 3px;
  border: none;
  font-family: '宋体', arial;
  font-size: 12px;
  margin-left: 54px;
  font-family: '微软雅黑';
  color: #fff;
  background: #a00000;
}

.w_message .msgbtn_hover {
  background: #cb5961;
  color: #fff;
  border: 1px solid #cb5961;
}

.m_close {
  // background: url(../images_public/messbtn.png) left top no-repeat;
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  overflow: hidden;
  width: 19px;
  height: 20px;
  right: 12px;
  top: 8px;
  cursor: pointer;
}

.m_open {
  // background: url(../images_public/messbtn1.png) left top no-repeat;
}

.w_message .m_under {
  position: absolute;
  width: 227px;
  height: 37px;
  line-height: 41px;
  left: 0;
  bottom: 1px;
}

.w_message .support {
  color: #000;
  width: 100px;
  position: absolute;
  bottom: 1px;
  right: 8px;
  font-size: 12px;
}

#m_top {
  height: 1px;
  font-size: 0px;
  line-height: 1px;
  margin: 0 2px;
  background: #cb5961;
}

#m_mid {
  height: 1px;
  font-size: 0px;
  line-height: 1px;
  margin: 0 1px;
  background: #a00000;
}

#m_bot {
  height: 31px;
  line-height: 31px;
  padding-left: 9px;
  font-family: '微软雅黑';
  font-size: 13px;
  background: #a00000;
}
</style>
