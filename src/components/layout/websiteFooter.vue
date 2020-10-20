
<template>
  <div>
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
    <div class="footer-box">
      <div class="f_one">
        <!--布局框架 4-4-4 代码开始-->
        <div class="container">
          <div class="row clearfix">
            <div class="col-md-4 column txt1">
              <i
                class="fa fa-volume-control-phone pull-left"
                aria-hidden="true"
              ></i>
              <div class="d-an"><a
                  href="http://www.gxyhfz.com/lxwm/"
                  target=""
                >一键联系我们</a></div>
              <h3>{{ baseInfo.phone }}</h3>
            </div>
            <div class="col-md-5 column lx">
              <div class="text-white">
                <i class="fa fa-bank"></i>{{ baseInfo.name }}<br>
                <i class="fa fa-phone-square"></i>电话：{{ baseInfo.phone }}<br>
                <i
                  class="fa fa-envelope-o"
                  aria-hidden="true"
                ></i>邮箱：{{ baseInfo.email }} <br>
                <i class="fa fa-map-signs"></i>
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
                  <p class="mt-2">手机二维码</p>
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
            </div>
            <div class="col-md-12 police">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { systemApi } from '@/api'
// import VueQrcode from 'vue-qrcode'
export default {
  name: 'websiteFooter',
  // components: {VueQrcode},
  data() {
    return {
      friendData: {},
      baseInfo: {
        name: '820532952@qq.com',
        email: '820532952@qq.com',
        phone: '18172043800',
        address: [
          '南宁市兴宁区昆仑大道2号南宁花鸟市场B区玉A区10-11-12号',
          '厂址一:南宁林科院邓氏工艺厂旁边66号',
          '厂址二:江门市新会福滨古典红木家具厂明朝大道128号',
        ],
        qrcode: 'http://211.149.157.233:9090/profile/upload/1/2020/09/16/266ddeee-beab-4984-9b0c-480811c1d085.png',
      },
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      systemApi.friendlinkList().then((res = {}) => {
        this.friendData = res
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

.txt1 .fa {
  font-size: 52px;
  color: #fff;
  margin-right: 30px;
  margin-top: 28px;
}

.txt1 h3 {
  color: #fff;
  float: left;
  font-size: 32px;
  font-weight: bold;
  font-family: SimHei;
  margin: 0;
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
  line-height: 50px;
}

.copyright {
  font-size: 14px;
  color: #fff;
}

.themain {
  line-height: 24px;
}

.youlian {
  padding: 20px 0 20px 0;
}
.youlian .div1 {
  margin-top: 10px;
}
.youlian .w1240 {
  position: relative;
}
.youlian span {
  color: #000;
  font-size: 18px;
}
.youlian p a {
  display: inline-block;
  width: 120px;
  color: #333;
  font-size: 14px;
  transition: all 0.36s;
  text-align: center;
}
.youlian p a:hover {
  color: #de0024;
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
  background: #de0024;
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
</style>
