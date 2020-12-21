
<template>
  <div>
    <section>
      <b-container>
        <div class="row pt-4 pb-4">
          <div class="col-md-12 col-xs-12  padnone  column ">
            <div class="ly_nr ">
              <div class="consult-title">
                <h3>NOW CONSULT</h3>
                <h5>现在咨询</h5>
                <p>（售后客服会在2小时内联系你）</p>
              </div>
              <div class="message">
                <div id="mess_main">
                  <div class="mess_list">
                    <div class="mess_title fl">您的姓名：</div>
                    <div class="mess_input fr">
                      <input
                        type="text"
                        name="name"
                        id="hname"
                        size="4"
                        v-model="form.name"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="mess_list">
                    <div class="mess_title fl">您的电话：</div>
                    <div class="mess_input fr">
                      <input
                        type="text"
                        name="mobile"
                        id="hmobile"
                        v-model="form.phone"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="mess_list">
                    <div class="mess_title fl">您的需求：</div>
                    <div class="mess_input fr">
                      <input
                        type="text"
                        name="xuqiu"
                        id="hxuqiu"
                        v-model="form.content"
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div
                    class="mess_list"
                    style="border:none;"
                  >
                    <div class="mess_submit">
                      <input
                        name="sub"
                        type="button"
                        class="btn btn-sub"
                        id="homesub"
                        value="提交"
                        @click="submit()"
                      >
                    </div>
                  </div>
                  <div class="message_bg"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </b-container>
    </section>
    <div class="footer-box">
      <div class="youlian">
        <b-container>
          <div class="clearfix">
            <div class="fl div1 clearfix">
              <span class="fl">友情链接：</span>
              <p class="fl">
                <a
                  v-for="(item, index) in friendData.friendlink"
                  :key="index"
                  :href="item.linkAddr"
                  target="_blank"
                >{{ item.name }}</a>
              </p>
            </div>
          </div>
        </b-container>
      </div>
      <div class="f_one">
        <!--布局框架 4-4-4 代码开始-->
        <div class="container">
          <div class="row clearfix">
            <div class="col-md-4 column txt1">
              <b-icon
                class="fa-phone"
                icon="telephone-fill"
              ></b-icon>
              <div class="d-an"><a
                  :href="`tel:${baseInfo.phone}`"
                  target=""
                >一键联系我们</a></div>
              <h3>{{ baseInfo.phone }}</h3>
            </div>
            <div class="col-md-5 column lx">
              <div class="text-white">
                <p>
                  <b-icon
                    class="fa-icon"
                    icon="person-fill"
                  ></b-icon>
                  {{ baseInfo.name }}
                </p>
                <p>
                  <b-icon
                    class="fa-icon"
                    icon="phone-fill"
                  ></b-icon>
                  电话：{{ baseInfo.phone }}
                </p>
                <p>
                  <b-icon
                    class="fa-icon"
                    icon="bag-fill"
                  ></b-icon>
                  地址：<span v-html="baseInfo.address"></span>
                </p>
                <p>
                  <b-icon
                    class="fa-icon bi-envelope b-icon bi"
                    icon="wallet-fill"
                  ></b-icon>
                  邮箱：{{ baseInfo.qq }}@qq.com
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="ema_1 row">
                <div class="col-md-6">
                  <img
                    class="ewmb-2"
                    :src="baseInfo.qrcode"
                    alt="二维码"
                  >
                  <p class="mt-2">微信二维码</p>
                </div>
                <div class="col-md-6">
                  <p class="mt-4"> 扫描左侧二维码</p>
                  手机访问更方便
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--布局框架 4-4-4 代码结束-->
      </div>
      <div class="f_two">
        <!--布局框架 12 代码开始-->
        <div class="container">
          <div class="row clearfix">
            <div class="col-md-12 text-center">
              <p class="copyright">Copyright ©{{ baseInfo.officialWebsite }} {{ baseInfo.name }}</p>
              <p>文章素材及部分图片来源于网络，版本归原来作者所有，如有侵权，请联系删除。
              </p>
              <!-- <p>技术支持：悦耀网络</p> -->
              <p> <a href="beian.miit.gov.cn">备案号:桂ICP备2020008811号-1</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 底部nav -->
    <div class="footer">
      <a href="index">
        <b-icon
          class="fa-phone"
          icon="house-fill"
        ></b-icon>&nbsp;&nbsp;&nbsp;首页
      </a>
      <a :href="productUrl">
        <b-icon
          class="fa-phone"
          icon="image-fill"
        ></b-icon>&nbsp;&nbsp;&nbsp;产品中心
      </a>
      <a :href="`tel:${baseInfo.phone}`">
        <b-icon
          class="fa-phone"
          icon="telephone-fill"
        ></b-icon>&nbsp;&nbsp;&nbsp;电话
      </a>
    </div>
  </div>
</template>

<script>
// import VueQrcode from 'vue-qrcode'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'websiteFooter',
  // components: {VueQrcode},
  computed: {
    ...mapState({
      baseInfo: state => state.baseInfo,
    }),
    ...mapGetters(['productUrl']),
  },
  data() {
    return {
      friendData: {},
      form: {
        name: '',
        phone: '',
        content: '',
      },
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$systemApi.friendlinkList().then((res = {}) => {
        this.friendData = res
      })
    },
    submit() {
      this.$systemApi.addMessage(this.form).then(() => {
        this.$bvToast.toast('提交成功，稍后会有客服联系您，请您耐心等待', {
          title: `提示`,
          toaster: 'b-toaster-top-center',
          solid: true,
          variant: 'success',
        })
        this.form = {
          name: '',
          phone: '',
          content: '',
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/*底部*/
.footer-box {
  background: #000000;
}

.f_one {
  background: #000;
  padding: 28px 0 23px;
}

.lx p {
  color: #fff;
  font-size: 14px;
  line-height: 30px;
}

.lx p .fa {
  padding-right: 10px;
}

.footers .f1 {
  margin-top: 5px;
  width: 29%;
  padding: 12px 0px;
}

.col-md-5.column.lx {
  padding: 0 0 0 45px;
  border-right: 1px solid #444;
  border-left: 1px solid #444;
}

.footers .f3 {
  padding: 0 0 0 25px;
}

.footers .f3 .ema_1 {
  float: left;
}

.footers .f3 .ema_1 img {
  width: 120px;
  height: 120px;
}

.footers .f3 .ema_1 p {
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin: 13px 0 0px 14px;
  line-height: 35px;
}

.footers .f1 h3 {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.footers .f1 img {
  margin: 15px 9px 0 0;
}
.txt1 {
  position: relative;
  h3 {
    color: #fff;
    float: left;
    font-size: 32px;
    font-weight: bold;
    font-family: SimHei;
    margin: 0;
  }
  .fa {
    font-size: 52px;
    color: #fff;
    margin-right: 30px;
    margin-top: 28px;
  }
  .fa-phone {
    position: absolute;
    top: 35px;
    left: -70px;
    font-size: 50px;
    color: #fff;
  }
}
.fa-icon {
  margin-right: 10px;
}
.d-an {
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
}

.d-an a {
  color: #fff;
  border: 1px solid #757575;
  width: 206px;
  height: 37px;
  line-height: 35px;
  display: block;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
}

.d-an a:hover {
  color: #fff;
  background-color: #99272f;
  border-color: #b7333c;
  display: block;
}
.ema_1 {
  color: #fff;
  text-align: center;
}
.ewmb-1 {
  margin-top: 32px;
  line-height: 24px;
  margin-left: 20px;
  float: left;
}
.ewmb-2 {
  width: 120px;
  height: 120px;
}

.f_two {
  background: #000;
  border-top: 1px solid #444;
  font-size: 14px;
  color: #c3c3c3;
  padding-top: 10px;
}

.copyright {
  font-size: 14px;
  color: #fff;
}

.themain {
  line-height: 24px;
}

.youlian {
  // padding: 10px 0 ;
  border-bottom: 1px solid #444;
}
.youlian .div1 {
  margin-top: 10px;
}
.youlian .w1240 {
  position: relative;
}
.youlian span {
  color: #fff;
  font-size: 18px;
}
.youlian p a {
  display: inline-block;
  width: 120px;
  color: #fff;
  font-size: 14px;
  transition: all 0.36s;
  text-align: center;
}
.youlian p a:hover {
  color: $themeColor;
  transform: translateX(5px);
}
.youlian .div2 ul {
  position: absolute;
  background: #333;
  right: 0;
  top: -97px;
  width: 120px;
  display: none;
  padding: 10px 0;
}
.youlian .div2 li a {
  text-align: center;
  display: block;
  color: #fff;
  font-size: 14px;
  padding: 5px 0;
}
.youlian .div2 h3 {
  background: $themeColor;
  height: 30px;
  width: 120px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
}
.youlian .div2 h3 img {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
.youlian .div2 {
  margin-top: 10px;
}

.neibanner {
  width: 100%;
  overflow: hidden;
}
.neibanner img {
  width: 100%;
  height: auto;
  display: block;
}
/*手机底部菜单*/
.footer {
  display: none;
  background: #303030;
  width: 100%;
  margin-top: 6px;
  background-size: 9px 128px;
  position: fixed;
  z-index: 110;
  bottom: 0;
  left: 0;
  line-height: 45px;
}
.footer a {
  -webkit-box-flex: 1;
  display: -webkit-box;
  color: #fff;
  display: inline-block;
  width: 32%;
  font: 100 16px/35px '微软雅黑';
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.footer a i {
  padding-right: 5px;
}
.hr {
  height: 45px;
}
</style>
