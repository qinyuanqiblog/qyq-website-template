<template>
  <div class="about">
    <websiteHeader />
    <div class="about-main">
      <div class=" container">

        <div class="row">

          <!-- Contact Form -->
          <div
            class="col-md-8 contact-form fadeIn wow"
            data-wow-duration="1.3s"
          >

            <h3 class="title">发表留言</h3>

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
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="请输入您的名字"
                    required=""
                  >
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="请输入您的邮箱"
                    required=""
                  >
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder="请输入留言内容"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <button
                    type="submit"
                    class="btn btn-theme"
                  ><i class="fa fa-fw fa-paper-plane-o"></i>发表留言</button>
                </div>
              </div>
            </form>
          </div>
          <!-- /Contact Form -->

          <!-- Address -->
          <div
            class="col-md-4 fadeIn wow"
            data-wow-duration="1.3s"
            data-wow-delay="0.7s"
          >

            <h3 class="title">公司信息</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form.
            </p>

            <ul class="contact-information">
              <li><i class="icon fa fa-fw fa-globe"></i><span>Address</span> 988782, Our Street, L.A.</li>
              <li><i class="icon fa fa-fw fa-envelope"></i><span>E-mail</span> clients@example.com</li>
              <li><i class="icon fa fa-fw fa-phone"></i><span>Phone</span> +12 345 678 000</li>
            </ul>

          </div>
          <!-- /Address -->

        </div>

        <div id="baidu-map"></div>

      </div>
    </div>
    <websiteFooter />
  </div>
</template>

<script>
import { systemApi } from '@/api'
export default {
  name: 'aboutIndex',
  data() {
    return {
      articleList: [],
      totalRows: 10,
      perPage: 10,
      currentPage: 1,
    }
  },
  mounted() {

    this.init()
  },
  methods: {
    init() {
      this.getArticleList()
      // this.baiduMapSetting()
    },
    baiduMapSetting() {

      setTimeout(() => {
        var map = new window.BMapGL.Map('container')
        var point = new window.BMapGL.Point(116.404, 39.915)
        map.centerAndZoom(point, 15)
        map.addEventListener('tilesloaded', function() {
          alert('地图加载完成！')
        })
      }, 0)

      // var map = new window.BMapGL.Map('container')
      // map.centerAndZoom(new window.BMapGL.Point(116.331398, 39.897445), 12)
      // //创建地址解析器实例
      // var myGeo = new window.BMapGL.Geocoder()
      // // 将地址解析结果显示在地图上，并调整地图视野
      // myGeo.getPoint(
      //   '北京市海淀区上地10街',
      //   function(point) {
      //     if (point) {
      //       map.centerAndZoom(point, 16)
      //       map.addOverlay(new window.BMapGL.Marker(point, { title: '北京市海淀区上地10街' }))
      //     } else {
      //       alert('您选择的地址没有解析到结果！')
      //     }
      //   },
      //   '北京市'
      // )
    },
    onPagination(currentPage) {
      this.currentPage = currentPage
      this.getArticleList()
    },
    getArticleList() {
      const ajaxData = {
        menuId: '10158',
        modelType: '2',
        pageNum: this.currentPage,
        pageSize: this.perPage,
        userId: window.sessionStorage.userId,
      }
      systemApi.articleList(ajaxData).then((res = {}) => {
        this.totalRows = res.total
        // this.perPage = res.total/this.pageSize
        this.articleList = res.rows || []
      })
    },
  },
}
</script>
<style lang="scss" scoped>
#baidu-map {
  width: 100%;
  // height: 300px;
}
.about {
  &-main {
    border-bottom: solid 2px #ff5555;
    border-top: solid 2px #ff5555;
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
  border-color: #ff5555 !important;
  background-color: #ff5555 !important;
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
