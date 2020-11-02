<template>
  <div class="about">
    <websiteHeader ref="websiteHeader" />
    <websiteArticleList
      showType="product"
      :config="{
        title:'在线留言',
        breadcrumb:'在线留言',
      }"
    >
      <websiteSideBar
        slot="left"
        ref="websiteSideBar"
      >
      </websiteSideBar>
      <div
        slot="right"
        class="row"
      >

        <!-- Contact Form -->
        <div
          class="col-md-8 contact-form fadeIn wow"
          data-wow-duration="1.3s"
        >
          <form
            class="form-ajax"
            method="post"
          >
            <input
              type="hidden"
              name="form"
              value="Contact Page"
            >
            <div class="row">
              <div class="form-group col-md-12">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="请输入您的名字"
                  v-model="form.name"
                >
              </div>
              <div class="form-group col-md-6">
                <input
                  class="form-control"
                  placeholder="请输入您的手机号码"
                  v-model="form.phone"
                >
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <textarea
                  name="message"
                  class="form-control"
                  placeholder="请输入留言内容"
                  v-model="form.content"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <button
                  type="submit"
                  class="btn btn-theme"
                  @click="submit()"
                ><i class="fa fa-fw fa-paper-plane-o"></i>发表留言</button>
              </div>
            </div>
          </form>
        </div>
        <!-- /Contact Form -->

      </div>
    </websiteArticleList>
    <websiteFooter ref="websiteFooter" />
  </div>
</template>

<script>
import { systemApi } from '@/api'
import { commonMixin } from '@/mixins'
export default {
  name: 'messageIndex',
  mixins: [commonMixin],
  data() {
    return {
      form: {
        name: '',
        phone: '',
        content: '',
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {},
    submit() {
      systemApi.addMessage(this.form).then(() => {
        this.$bvToast.toast('提交成功，稍后会有客服联系您，请您耐心等待', {
          title: `提示`,
          solid: true,
          toaster: 'b-toaster-top-center',
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
@import url(~public/scss/media-750.scss);
#baidu-map {
  width: 100%;
  // height: 300px;
}
.about {
  &-main {
    border-bottom: solid 2px $themeColor;
    border-top: solid 2px $themeColor;
    padding: 40px 0;
    margin: 40px 0;
  }
  h3 {
    margin-bottom: 30px;
  }
}
.btn {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  padding: 9px 22px;
  font-family: inherit;
  color: #fff !important;
  border-color: $themeColor !important;
  background-color: $themeColor !important;
}
.btn:focus,
.btn.focus {
  color: #fff !important;
  border-color: #dd3333 !important;
  background-color: #dd3333 !important;
}
.btn:hover,
.btn.hover {
  color: #fff !important;
  border-color: #ff7777 !important;
  background-color: #ff7777 !important;
}
.btn:active,
.btn.active {
  color: #fff !important;
  border-color: #dd3333 !important;
  background-color: #dd3333 !important;
}

.contact-form {
  margin-bottom: 30px;
}
.contact-form textarea {
  min-height: 200px;
  resize: vertical;
}
.contact-information {
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  color: #777;
}
.contact-information li {
  padding: 10px 0;
  border-bottom: solid 1px #eee;
}
.contact-information li .icon {
  margin-right: 10px;
}
.contact-information li span {
  display: inline-block;
  width: 70px;
  font-weight: 500;
}
</style>
