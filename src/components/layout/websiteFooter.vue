<template>
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
            <h3>13471171534</h3>
          </div>
          <div class="col-md-5 column lx">
            <p><i class="fa fa-bank"></i>广西运合服装有限公司<br>
              <i class="fa fa-phone-square"></i>电话：13471171534 / 19968156941<br>
              <i
                class="fa fa-envelope-o"
                aria-hidden="true"
              ></i>邮箱：820082742@qq.com <br>
              <i class="fa fa-map-signs"></i>广西南宁市江南区定秋路9号21栋106号楼
            </p>
          </div>
          <div class="col-md-3 column txt3">
            <div class="ema_1">
              <img
                class="ewmb-2"
                src="http://www.gxyhfz.com/template/894_tplstyle_816_794//images/ewm2.jpg"
                alt="二维码"
              >
              <p class="ewmb-1">
                扫描左侧二维码<br>
                手机访问更方便
              </p>
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
            <p class="copyright">Copyright ©http://www.gxyhfz.com/ 广西运合服装有限公司 欢迎来电咨询！</p>
          </div>
          <div class="col-md-12 police">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'websiteFooter',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
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
    width: 45%;
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

.ema_1 .ewmb-1 {
    color: #fff;
    margin-top: 32px;
    line-height: 24px;
    margin-left: 20px;
    float: left;
}

.ema_1 .ewmb-2 {
    float: right;
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
</style>
