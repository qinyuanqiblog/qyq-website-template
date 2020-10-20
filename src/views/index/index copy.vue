<template>
  <div id="app">
    666
    <websiteHeader />
    <!-- 搜索栏 -->
    <searchBox />
    <!-- 留言板 -->
    <div class="ly_mian">

      <div class="container new_bg">
        <div class="row">

          <div class="col-md-12 col-xs-12  padnone column ">
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
                        value=""
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
                        value=""
                        class="form-control"
                      >
                    </div>
                  </div>
                  <div class="mess_list">
                    <div class="mess_title fl">留言内容：</div>
                    <div class="mess_input fr">
                      <input
                        type="text"
                        name="content"
                        id="content"
                        value=""
                        class="form-control"
                      >
                    </div>
                  </div>

                  <div class="mess_list">
                    <div class="mess_title fl">验证码：</div>
                    <div class="mess_input mess_with fr">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="验证码"
                        style="color:black;width:120px;float:left;margin:0px 0px;"
                        name="code"
                        id="hcode"
                      >
                      <img
                        src="/index/guestbook/checkverify.html"
                        onclick="javascript:this.src='/index/guestbook/checkverify.html?tm='+Math.random();"
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
                      >
                    </div>
                  </div>
                  <div class="message_bg"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 底部开始 -->
    <websiteFooter />

    <!-- 侧栏 -->
    <contactSidebar />
    <!-- 客服 -->
    <phoneService />
    <!-- 首页弹框 -->
    <contactDialog />
  </div>
</template>

<script>
import { websiteHeader, websiteFooter, searchBox, contactSidebar, contactDialog, phoneService } from '@/components'
export default {
  name: 'index',
  components: {
    websiteHeader,
    websiteFooter,
    searchBox,
    contactSidebar,
    contactDialog,
    phoneService,
  },
}
</script>

<style>
</style>
