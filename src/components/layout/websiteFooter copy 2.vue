
<template>
  <div class="footers displaynoen">
    <div class="f_one">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="left">
              <!--插入图片代码开始-->
              <img
                src="http://www.gxmybl.com/template/105_tplstyle_0//images/1528862450.png"
                alt="1528862450.png"
              >
              <!--插入图片代码结束-->
            </div>
          </div>
          <div class="col-md-4">
            <div class="right">
              <div>电话：刘总18078153633（微信同步）</div>
              <div>李经理18076588893（微信同步）</div>
              <div>田经理18172086133（微信同步）</div>
              <div>地址：南宁市兴宁区三塘镇创新谷埌坡3队73号</div>

            </div>
          </div>
          <div class="col-md-4 lixm">
            <div class="wenzi">
              <p>微信公众号 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 微信公众号</p>
              <span>享受健康美味的烧烤美食！</span>
            </div>
          </div>
        </div>
      </div>
      <div class="f_two">
        <!--布局框架 12 代码开始-->
        <div class="container">
          <div class="row clearfix">
            <div class="col-md-12 yl_links">
              <!--友情链接代码开始-->
              <div class="links">友情链接：<a
                  class="links"
                  target="_blank"
                  href="http://www.gxwzycl.com/"
                  title="河池吴茱萸"
                >河池吴茱萸</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.gxyuanshang.com/"
                  title="广西庆典活动策划"
                >广西庆典活动策划</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.nndczp.com/"
                  title="广西扎啤加盟"
                >广西扎啤加盟</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.feilishi.top/"
                  title="广西文件柜厂家"
                >广西文件柜厂家</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.xldtgs.com/"
                  title="广西电梯厂家"
                >广西电梯厂家</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.gsjhhs.com/"
                  title="南宁旧货回收"
                >南宁旧货回收</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.nnlmmy.com/"
                  title="南宁镀锌角钢"
                >南宁镀锌角钢</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.nnjhpmc.com/"
                  title="广西泡沫板"
                >广西泡沫板</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.gxjqlmy.com/"
                  title="广西红木家具"
                >广西红木家具</a>|<a
                  class="links"
                  target="_blank"
                  href="http://www.bhchangtai.com/"
                  title="北海不锈钢管批发"
                >北海不锈钢管批发</a></div>
              <!--友情链接代码结束-->
            </div>
            <div class="col-md-12 bhbtd">
              <p class="copyright">Copyright ©http://www.gxmybl.com/ 广西牧羊部落户外活动策划有限公司 专业从事于<a
                  href="http://www.gxmybl.com/product/"
                  title="户外烧烤"
                >户外烧烤</a>,<a
                  href="http://www.gxmybl.com/kyqd/"
                  title="开业庆典"
                >开业庆典</a>,<a
                  href="http://www.gxmybl.com/hwhl/"
                  title="户外婚礼"
                >户外婚礼</a>,欢迎来电咨询! <a
                  href="http://www.miitbeian.gov.cn/"
                  target=""
                >桂ICP备18005463号</a></p>

            </div>
            <div class="col-md-12 police">
            </div>
            <div class="themain">
              <span>主营区域：</span>
              <a
                class="main-city"
                href="http://www.gxmybl.com/guangxi.html"
              >广西</a><a
                class="main-city"
                href="http://www.gxmybl.com/nanning.html"
              >南宁</a>
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
      baseInfo: {},
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
.footers {
  background-color: #000;
}
.footers .col-md-4 .right div {
  color: #fff;
  line-height: 34px;
  font-size: 14px;
}
.footers .col-md-4 .right {
  margin-top: 42px;
  border-right: 1px solid #464646;
  margin-left: 21px;
}
.footers .col-md-4 .left {
  margin-top: 42px;
  border-right: 1px solid #464646;
}
.footers .col-md-4.lixm {
  // background: url(../images/my.png)no-repeat center;
  height: 134px;
  margin-top: 42px;
  text-align: center;
  margin-bottom: 35px;
}
.footers .col-md-4.lixm p {
  color: #fff;
  line-height: 27px;
  font-size: 12px;
}
.footers .bhbtd p.copyright {
  font-size: 14px;
  color: #929292;
  text-align: center;
}
.col-md-12.bhbtd {
  margin-top: -9px;
}
.wenzi {
  margin-top: 110px;
}
.wenzi span {
  color: #fff;
  font-size: 14px;
}

.f_one {
}
.f_two {
  background: #131112;
}
i.fa.fa-unlink {font-size: 22px;margin: 10px 6px;}
.links,.links a{color: #d4d4d4;font-size: 14px;line-height: 31px;text-align: center;}
</style>
