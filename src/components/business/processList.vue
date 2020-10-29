<template>
   <section class="lc_main process-list">
      <b-container>
        <div class="row clearfix">
          <div class="col-md-12 column">
            <div class="title">
              <h3 style="color:#fff;"><strong>PROCESS</strong>定制流程</h3>
              <h5></h5>
            </div>

          </div>
        </div>
        <div class="process">
          <ul>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-1.png" alt="预约背景图片">
              <p>预约</p>
            </li>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-2.png" alt="沟通需求图片">
              <p>沟通需求</p>
            </li>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-3.png" alt="选材料图片">
              <p>选材料</p>
            </li>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-4.png" alt="签订合同图片">
              <p>签订合同</p>
            </li>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-5.png" alt="选尺寸图片">
              <p>选尺寸</p>
            </li>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-6.png" alt="批量生产图片">
              <p>批量生产</p>
            </li>
            <li class="process-x"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-7.png" alt="验货收款图片">
              <p>验货收款</p>
            </li>
            <li class="process-right"> <img src="http://www.gxyhfz.com/template/894_tplstyle_816_794/images/process-8.png" alt="售后服务图片">
              <p>售后服务</p>
            </li>
          </ul>
        </div>
      </b-container>
    </section>
</template>

<script>
export default {
  name: 'processList',
  components: {

  },
  data() {
    return {}
  },
  created() { },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
/*定制流程*/
.lc_main {
  // background: url(../images/lc_bg1.jpg) center no-repeat;
  background-color:#000;
}
.lc_main .title {
  text-align: center;
  padding-top: 20px;
}
.lc_main .title h3 {
  font-size: 24px;
  color: #fff;
}
.lc_main .title h3 strong {
  font-size: 32px;
  color: #cc0100;
  margin-right: 5px;
}
.lc_main .title h5 {
  width: 75px;
  height: 4px;
  background: #fff;
  margin: 12px auto;
}

.process {
  padding: 0px 0 50px 0;
  margin-top: 50px;
}
.process ul {
  overflow: hidden;
  width: 1170px;
  margin: 0 auto;
}
.process ul li {
  text-align: center;
}
.process ul li.process-x {
  float: left;
  width: 13%;
  // background: url(../images/process-right.png) 100% 30% no-repeat;
}
.process ul li.process-right {
  float: right;
}
.process ul li p {
  font-size: 15px;
  color: #fff;
  padding-top: 15px;
}
</style>
